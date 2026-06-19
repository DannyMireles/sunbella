import type { Metadata } from "next";
import { LegacyHome } from "@/components/LegacyHome";

export const metadata: Metadata = {
  title: "Copy of HOME | My Site 2"
};

export default function HomeOnePage() {
  return <LegacyHome />;
}
