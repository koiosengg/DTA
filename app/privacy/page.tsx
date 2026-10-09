import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Deccan Taekwondo Academy",
  description:
    "Privacy Policy for Deccan Taekwondo Academy (DTA). Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="w-full bg-primary py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center">
        <div className="w-full max-w-7xl">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[56px] font-bold text-white tracking-[-1px] lg:tracking-tight font-sora leading-[1.2]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[16px] text-[#E7E7E7] leading-relaxed font-primary font-normal max-w-xl">
            Your privacy matters to us. This policy explains how Deccan
            Taekwondo Academy collects, uses, and protects your information.
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400 font-primary">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center">
        <div className="w-full max-w-7xl break-words">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
            {/* 1. Introduction */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                1. Introduction
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Deccan Taekwondo Academy (&quot;DTA,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) operates the website{" "}
                <a
                  href="https://deccantaekwondo.com"
                  className="text-accent hover:underline font-semibold break-all"
                >
                  deccantaekwondo.com
                </a>
                . This Privacy Policy describes how we collect, use, and
                safeguard information when you visit our website or interact
                with us through our contact form and communication channels.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                By using our website, you agree to the practices described in
                this Privacy Policy. If you do not agree, please do not use our
                website.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                2. Information We Collect
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We collect only the information you voluntarily provide to us
                through our contact form. This includes:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  <strong className="text-primary">Full Name</strong> — to
                  identify you and personalise our response.
                </li>
                <li>
                  <strong className="text-primary">Email Address</strong> — to
                  respond to your enquiry.
                </li>
                <li>
                  <strong className="text-primary">Mobile Number</strong> — to
                  contact you regarding your enquiry, class timings, or
                  admissions.
                </li>
                <li>
                  <strong className="text-primary">Topic of Enquiry</strong> —
                  to understand the nature of your request (e.g., General
                  Inquiry, Class Timings, Admissions, Fees &amp; Pricing, Trial
                  Class).
                </li>
                <li>
                  <strong className="text-primary">Message</strong> — any
                  additional information you choose to share.
                </li>
              </ul>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We do not collect payment information, login credentials, health
                data, or any other sensitive personal information through our
                website.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                3. How We Use Your Information
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                The information you submit through our contact form is used
                solely for the following purposes:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>Responding to your enquiries and questions.</li>
                <li>
                  Providing information about our classes, programs, and
                  schedules.
                </li>
                <li>
                  Scheduling trial classes or processing admissions when
                  requested.
                </li>
                <li>
                  Communicating with you about topics you have expressed interest
                  in.
                </li>
              </ul>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We do not use your information for unsolicited marketing,
                advertising, or selling to third parties.
              </p>
            </div>

            {/* 4. Third-Party Services */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                4. Third-Party Services
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Our website uses a limited number of third-party services to
                operate:
              </p>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-2">
                <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-5 flex flex-col gap-1.5">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-primary font-primary">
                    Formspree
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-secondary font-primary leading-relaxed">
                    Our contact form submissions are processed through
                    Formspree. When you submit the form, your name, email,
                    mobile number, topic, and message are transmitted to
                    Formspree for delivery to us. Formspree processes this data
                    in accordance with its own{" "}
                    <a
                      href="https://formspree.io/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold break-all"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-5 flex flex-col gap-1.5">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-primary font-primary">
                    WhatsApp
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-secondary font-primary leading-relaxed">
                    We provide a WhatsApp link for direct communication. When
                    you click the WhatsApp button, you are redirected to the
                    WhatsApp platform. Any conversation through WhatsApp is
                    subject to{" "}
                    <a
                      href="https://www.whatsapp.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold break-all"
                    >
                      WhatsApp&apos;s privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-5 flex flex-col gap-1.5">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-primary font-primary">
                    Google Fonts
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-secondary font-primary leading-relaxed">
                    Our website uses fonts served by Google Fonts. When you visit
                    our website, your browser may connect to Google servers to
                    load these fonts. Google may collect certain technical
                    information (such as your IP address) as part of this
                    process. For more details, see{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold break-all"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-5 flex flex-col gap-1.5">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-primary font-primary">
                    Google Maps
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-secondary font-primary leading-relaxed">
                    We provide a link to our location on Google Maps. When you
                    click this link, you are redirected to Google Maps, which is
                    subject to{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold break-all"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Cookies and Tracking */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Our website does not use analytics tracking tools such as Google
                Analytics, Facebook Pixel, or similar services. We do not set
                advertising or marketing cookies.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Our hosting infrastructure and third-party font services may use
                essential or technical cookies as part of normal website
                operation. These are not used to track your browsing activity
                across other websites.
              </p>
            </div>

            {/* 6. Data Sharing */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                6. How We Share Information
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We do not sell, rent, or trade your personal information to third
                parties. Your information may be shared only in the following
                limited circumstances:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  <strong className="text-primary">Service Providers</strong> —
                  Formspree processes your form submissions on our behalf.
                </li>
                <li>
                  <strong className="text-primary">Legal Obligations</strong> —
                  We may disclose information if required to do so by law or in
                  response to valid legal requests by public authorities.
                </li>
              </ul>
            </div>

            {/* 7. Data Retention */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                7. Data Retention
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We retain your contact form submissions only for as long as
                reasonably necessary to respond to your enquiry and fulfill the
                purposes described in this policy. We do not maintain a long-term
                database of user information collected through the website.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Information processed by Formspree is subject to Formspree&apos;s
                own data retention policies.
              </p>
            </div>

            {/* 8. Data Security */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                8. Data Security
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We take reasonable measures to protect your personal information.
                Our website is served over HTTPS, which encrypts data transmitted
                between your browser and our servers. However, no method of
                transmission over the internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Deccan Taekwondo Academy offers martial arts training to students
                of all ages, including children aged 3 and above. However, our
                website and contact form are intended to be used by parents,
                guardians, or adults enquiring on behalf of a minor.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We do not knowingly collect personal information directly from
                children through our website. If you are a parent or guardian and
                believe your child has submitted personal information through
                our contact form without your consent, please contact us and we
                will take steps to remove that information.
              </p>
            </div>

            {/* 10. Your Privacy Rights */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                10. Your Privacy Rights
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Depending on your location and applicable law, you may have
                rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  The right to request access to the personal information we
                  hold about you.
                </li>
                <li>
                  The right to request correction of inaccurate information.
                </li>
                <li>
                  The right to request deletion of your personal information.
                </li>
                <li>The right to withdraw consent for future communications.</li>
              </ul>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                To exercise any of these rights, please contact us using the
                details provided below.
              </p>
            </div>

            {/* 11. Links to Third-Party Websites */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                11. Links to Third-Party Websites
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Our website may contain links to third-party websites and
                services, including social media platforms (Instagram, Facebook),
                Google Maps, and WhatsApp. We are not responsible for the privacy
                practices of these external websites. We encourage you to review
                the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* 12. Changes */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Any changes will be posted on this page with
                an updated &quot;Last updated&quot; date. We encourage you to
                review this page periodically.
              </p>
            </div>

            {/* 13. Contact Us */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                13. Contact Us
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us:
              </p>
              <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-6 flex flex-col gap-2 mt-1">
                <p className="text-[15px] sm:text-[16px] font-semibold text-primary font-primary">
                  Deccan Taekwondo Academy
                </p>
                <p className="text-[14px] sm:text-[15px] text-secondary font-primary leading-relaxed">
                  Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony,
                  Sudhama Nagar, Bengaluru, Karnataka 560027
                </p>
                <p className="text-[14px] sm:text-[15px] text-secondary font-primary break-all">
                  Email:{" "}
                  <a
                    href="mailto:dta.for.teakwondo@gmail.com"
                    className="text-accent hover:underline font-semibold"
                  >
                    dta.for.teakwondo@gmail.com
                  </a>
                </p>
                <p className="text-[14px] sm:text-[15px] text-secondary font-primary">
                  Phone:{" "}
                  <a
                    href="tel:+919108414481"
                    className="text-accent hover:underline font-semibold"
                  >
                    +91 91084 14481
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
