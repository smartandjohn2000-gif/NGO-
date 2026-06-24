import { NextResponse } from "next/server";
import { LANGUAGE_OPTIONS, type SupportedLanguage } from "@/lib/constants";

type TranslateRequest = {
  texts?: unknown;
  targetLanguage?: unknown;
};

const SUPPORTED_LANGUAGES = new Set(LANGUAGE_OPTIONS.map((option) => option.code));

function parseTranslationPayload(payload: TranslateRequest) {
  const rawTexts = Array.isArray(payload.texts) ? payload.texts : [];
  const texts = rawTexts.filter((value): value is string => typeof value === "string");
  const targetLanguage = typeof payload.targetLanguage === "string" ? payload.targetLanguage : "en";
  return {
    texts: texts.slice(0, 60),
    targetLanguage: targetLanguage as SupportedLanguage,
  };
}

async function translateText(text: string, targetLanguage: SupportedLanguage) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", targetLanguage);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    return text;
  }

  const payload = (await response.json()) as unknown;
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) {
    return text;
  }

  const translatedSegments = (payload[0] as unknown[])
    .map((segment) => (Array.isArray(segment) ? segment[0] : ""))
    .filter((segment): segment is string => typeof segment === "string");

  const translated = translatedSegments.join("");
  return translated || text;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TranslateRequest;
    const { texts, targetLanguage } = parseTranslationPayload(body);

    if (!SUPPORTED_LANGUAGES.has(targetLanguage)) {
      return NextResponse.json({ message: "Unsupported language" }, { status: 400 });
    }

    if (!texts.length || targetLanguage === "en") {
      return NextResponse.json({ translations: texts });
    }

    const translations = await Promise.all(texts.map((text) => translateText(text, targetLanguage)));
    return NextResponse.json({ translations });
  } catch {
    return NextResponse.json({ message: "Translation failed" }, { status: 500 });
  }
}
