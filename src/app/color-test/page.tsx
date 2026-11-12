import { ColorSystemDemo } from "@/components/sections/color-system-demo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ColorTestPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <ColorSystemDemo />
    </div>
  );
}
