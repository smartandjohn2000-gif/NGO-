import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo and video gallery showcasing World Impact Initiative programs and community impact across Canada and worldwide.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
