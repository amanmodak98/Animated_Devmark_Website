import About from "@/components/about/About";
import SocialProof from "@/components/social-proof/SocialProof";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Devmark",
  description: "Learn about our team, mission, and what makes Devmark different.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <SocialProof />
    </main>
  );
}
