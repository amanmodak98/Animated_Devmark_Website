import TeamPreview from "@/components/team/TeamPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Devmark",
  description: "Meet the people behind Devmark.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamPreview />
    </main>
  );
}
