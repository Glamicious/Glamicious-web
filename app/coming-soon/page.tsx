import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Glamicious — Coming soon",
  description:
    "Glamicious is a new way to find salons, spas, lash and nail studios in Yangon, see real prices and free times, and pay with your wallet. Coming soon.",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
