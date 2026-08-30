import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Gratus India - Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect information about you in various ways, including:

Personal Data: Name, email address, phone number, company name, job title, and shipping/billing addresses that you provide when filling out forms on our website.

Usage Data: Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and other diagnostic data.

Cookies: We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the collected information for various purposes:

- To process and fulfill your orders and inquiries
- To communicate with you about products, services, and promotions
- To improve our website, products, and customer service
- To send periodic emails regarding your orders or other products and services
- To comply with legal obligations and resolve disputes
- To analyze website usage and optimize user experience`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:

- Trusted third parties who assist us in operating our website and servicing you, provided they agree to keep this information confidential
- When we believe release is appropriate to comply with the law, enforce site policies, or protect ours or others' rights, property, or safety
- In connection with a merger, acquisition, or sale of all or a portion of our assets, with appropriate notice`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- SSL encryption for data transmitted through our website
- Secure server infrastructure and access controls
- Regular security assessments and updates
- Employee training on data protection practices

However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When your data is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- Access: Request a copy of the personal data we hold about you
- Correction: Request correction of inaccurate or incomplete data
- Deletion: Request deletion of your personal data
- Objection: Object to the processing of your personal data
- Portability: Request transfer of your data to another organization

To exercise any of these rights, please contact us using the information provided below.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us so we can take steps to delete such information.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically. Your continued use of our website following any changes constitutes your acceptance of the revised policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:

Gratus India
Near Ekta Vihar, Kashipur Road,
Rampur Doraha, Moradabad - 244001 (UP), India

GST: 09BBZPA4353F2ZE
Email: gratusindia@gmail.com, sales@gratusindia.com
Phone: +91 9927683415, +91 8791737818`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-gradient animate-gradient relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-bold tracking-widest text-white">EFFECTIVE • JANUARY 2025</div>
          <h1 className="animate-fadeInUp mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
          <p className="animate-fadeInUp delay-100 mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed text-blue-100">
            Your privacy is important to us. This policy outlines how we handle and protect your data with transparency.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl bg-slate-50 px-6 py-4 ring-1 ring-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs font-bold tracking-widest text-gray-500">LAST UPDATED: JANUARY 2025</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> GDPR • Compliant</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 leading-relaxed text-[15px] text-gray-600">
              Gratus India (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website and provides manufacturing
              and export services. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our services.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 40}>
                <div className="card-lift rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-gray-100">
                  <h2 className="text-base font-extrabold tracking-tight text-secondary">{section.title}</h2>
                  <div className="mt-1 h-0.5 w-10 bg-primary rounded-full" />
                  <div className="mt-4 whitespace-pre-line leading-relaxed text-[14px] text-gray-600">
                    {section.content}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl bg-secondary p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold">Questions about privacy?</div>
                <div className="text-xs text-white/70">Reach us at gratusindia@gmail.com / sales@gratusindia.com</div>
              </div>
              <a href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-secondary hover:bg-gray-50 transition">Contact Us →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
