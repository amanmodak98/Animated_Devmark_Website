import Services from "@/components/services/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Devmark",
  description: "Web development, brand design, and digital solutions tailored to your business.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}
