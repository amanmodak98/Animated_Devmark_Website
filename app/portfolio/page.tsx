import Portfolio from "@/components/portfolio/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Devmark",
  description: "Our recent projects — websites and digital experiences we've built.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
