import Contact from "@/components/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Devmark",
  description: "Get in touch to start your next project with us.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
