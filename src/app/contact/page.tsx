import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ConsultWeb to discuss your web product, marketplace, MVP, e-commerce, or business automation project.",
};

export default function ContactPage() {
  return (
    <div className="section-shell py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you’re building"
            description="Share your project goals, timeline, and constraints. We’ll review the opportunity and help map the most practical next step."
          />

          <div className="mt-10 space-y-6">
            <div className="rounded-[26px] border border-white/10 bg-[#0d221f]/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-lime-300">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-lg text-white hover:text-lime-200">
                {siteConfig.email}
              </a>
            </div>
            {/* <div className="rounded-[26px] border border-white/10 bg-[#0d221f]/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-lime-300">Phone</p>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-3 block text-lg text-white hover:text-lime-200">
                {siteConfig.phone}
              </a>
            </div> */}
            <div className="rounded-[26px] border border-white/10 bg-[#0d221f]/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-lime-300">Location</p>
              <p className="mt-3 text-lg text-white">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
