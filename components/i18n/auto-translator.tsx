"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { SupportedLanguage } from "@/lib/constants";

const textOriginals = new WeakMap<Text, string>();
const attrOriginals = new WeakMap<HTMLElement, Record<string, string>>();
const translationCache = new Map<SupportedLanguage, Map<string, string>>();

function shouldTranslateText(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.length < 2) return false;
  if (!/[A-Za-z]/.test(trimmed)) return false;
  return true;
}

function getTextNodes(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentElement = node.parentElement;
      if (!parentElement) return NodeFilter.FILTER_REJECT;
      if (
        ["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "IFRAME"].includes(parentElement.tagName)
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parentElement.closest("[data-no-translate='true']")) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!shouldTranslateText(node.textContent ?? "")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let currentNode = walker.nextNode();
  while (currentNode) {
    nodes.push(currentNode as Text);
    currentNode = walker.nextNode();
  }
  return nodes;
}

function getAttributeNodes(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      "input[placeholder], textarea[placeholder], [title], [aria-label]",
    ),
  ).filter((element) => !element.closest("[data-no-translate='true']"));
}

async function fetchTranslations(texts: string[], targetLanguage: SupportedLanguage) {
  if (!texts.length || targetLanguage === "en") return;
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts, targetLanguage }),
  });

  if (!response.ok) {
    throw new Error("Translation request failed");
  }

  const payload = (await response.json()) as { translations: string[] };
  const cacheForLanguage = translationCache.get(targetLanguage) ?? new Map<string, string>();
  texts.forEach((text, index) => {
    cacheForLanguage.set(text, payload.translations[index] ?? text);
  });
  translationCache.set(targetLanguage, cacheForLanguage);
}

async function translateDocument(targetLanguage: SupportedLanguage) {
  const root = document.body;

  const textNodes = getTextNodes(root);
  const attributeNodes = getAttributeNodes(root);

  if (targetLanguage === "en") {
    textNodes.forEach((node) => {
      const original = textOriginals.get(node);
      if (original !== undefined) {
        node.textContent = original;
      }
    });
    attributeNodes.forEach((element) => {
      const originalAttrs = attrOriginals.get(element);
      if (!originalAttrs) return;
      Object.entries(originalAttrs).forEach(([attrName, value]) => {
        element.setAttribute(attrName, value);
      });
    });
    return;
  }

  const sourceTexts = textNodes.map((node) => {
    if (!textOriginals.has(node)) {
      textOriginals.set(node, node.textContent ?? "");
    }
    return textOriginals.get(node) ?? "";
  });

  const attributeTextEntries: Array<{ element: HTMLElement; attrName: string; value: string }> = [];
  attributeNodes.forEach((element) => {
    if (!attrOriginals.has(element)) {
      const originalAttrs: Record<string, string> = {};
      ["placeholder", "title", "aria-label"].forEach((attrName) => {
        const attrValue = element.getAttribute(attrName);
        if (attrValue && shouldTranslateText(attrValue)) {
          originalAttrs[attrName] = attrValue;
        }
      });
      attrOriginals.set(element, originalAttrs);
    }
    const originalAttrs = attrOriginals.get(element) ?? {};
    Object.entries(originalAttrs).forEach(([attrName, value]) => {
      attributeTextEntries.push({ element, attrName, value });
    });
  });

  const sourceSet = new Set<string>();
  sourceTexts.forEach((value) => {
    if (shouldTranslateText(value)) sourceSet.add(value);
  });
  attributeTextEntries.forEach((entry) => {
    if (shouldTranslateText(entry.value)) sourceSet.add(entry.value);
  });

  const cacheForLanguage = translationCache.get(targetLanguage) ?? new Map<string, string>();
  const missingTexts = Array.from(sourceSet).filter((text) => !cacheForLanguage.has(text));

  const batchSize = 40;
  for (let index = 0; index < missingTexts.length; index += batchSize) {
    const batch = missingTexts.slice(index, index + batchSize);
    await fetchTranslations(batch, targetLanguage);
  }

  const updatedCache = translationCache.get(targetLanguage) ?? new Map<string, string>();
  textNodes.forEach((node, index) => {
    const source = sourceTexts[index];
    node.textContent = updatedCache.get(source) ?? source;
  });

  attributeTextEntries.forEach((entry) => {
    const translated = updatedCache.get(entry.value) ?? entry.value;
    entry.element.setAttribute(entry.attrName, translated);
  });
}

type AutoTranslatorProps = {
  language: SupportedLanguage;
};

export function AutoTranslator({ language }: AutoTranslatorProps) {
  const pathname = usePathname();

  useEffect(() => {
    let ignore = false;
    const timer = window.setTimeout(() => {
      if (ignore) return;
      translateDocument(language).catch(() => {
        // Keep the default language content visible when translation fails.
      });
    }, 80);

    return () => {
      ignore = true;
      window.clearTimeout(timer);
    };
  }, [language, pathname]);

  return null;
}
