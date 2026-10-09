import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Deccan Taekwondo Academy",
  description:
    "Terms and Conditions for Deccan Taekwondo Academy (DTA). Read our terms of use, disclaimers, and conditions for using our website.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="w-full bg-primary py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center">
        <div className="w-full max-w-7xl">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[56px] font-bold text-white tracking-[-1px] lg:tracking-tight font-sora leading-[1.2]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[16px] text-[#E7E7E7] leading-relaxed font-primary font-normal max-w-xl">
            Please read these terms carefully before using the Deccan Taekwondo
            Academy website.
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
            {/* 1. Agreement to Terms */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                1. Agreement to Terms
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                By accessing and using the website{" "}
                <a
                  href="https://deccantaekwondo.com"
                  className="text-accent hover:underline font-semibold break-all"
                >
                  deccantaekwondo.com
                </a>{" "}
                (&quot;the Website&quot;), operated by Deccan Taekwondo Academy
                (&quot;DTA,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), you agree to be bound by these Terms &amp;
                Conditions. If you do not agree with any part of these terms,
                please do not use the Website.
              </p>
            </div>

            {/* 2. About the Website */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                2. About the Website
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                This Website is operated by Deccan Taekwondo Academy, a martial
                arts training academy based in Bengaluru, Karnataka, India. The
                Website provides information about our programs, classes,
                schedules, and a way to contact us through a form or other
                communication channels.
              </p>
            </div>

            {/* 3. Use of the Website */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                3. Use of the Website
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                You agree to use the Website only for lawful purposes and in a
                manner that does not infringe the rights of, or restrict or
                inhibit the use of, the Website by any other person. You must
                not:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  Use the Website in any way that violates any applicable local,
                  state, national, or international law.
                </li>
                <li>
                  Submit false, misleading, or fraudulent information through our
                  contact form.
                </li>
                <li>
                  Attempt to gain unauthorized access to the Website, its
                  servers, or any related systems.
                </li>
                <li>
                  Use the Website to transmit or distribute any malicious
                  software, spam, or harmful content.
                </li>
                <li>
                  Copy, reproduce, or redistribute the Website&apos;s content
                  without prior written permission.
                </li>
              </ul>
            </div>

            {/* 4. Intellectual Property */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                4. Intellectual Property
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                All content on this Website — including text, images,
                photographs, logos, graphics, icons, design elements, and
                software — is the property of Deccan Taekwondo Academy or its
                content providers and is protected by applicable intellectual
                property laws.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                You may not use, reproduce, modify, distribute, or display any
                content from this Website without our prior written consent.
              </p>
            </div>

            {/* 5. Contact Form Submissions */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                5. Contact Form Submissions
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                When you submit information through our contact form, you
                confirm that:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  The information you provide (name, email, mobile number,
                  topic, and message) is accurate and truthful.
                </li>
                <li>
                  If you are submitting an enquiry on behalf of a minor, you are
                  the parent or legal guardian of that minor.
                </li>
                <li>
                  You consent to us using the submitted information to respond
                  to your enquiry.
                </li>
              </ul>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Form submissions are processed through Formspree, a third-party
                form handling service. Your submission is subject to both our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline font-semibold"
                >
                  Privacy Policy
                </Link>{" "}
                and Formspree&apos;s terms.
              </p>
            </div>

            {/* 6. Programs and Services */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                6. Programs and Services
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Information about our martial arts programs, classes, schedules,
                and fees displayed on the Website is provided for general
                informational purposes. We reserve the right to modify, update,
                or discontinue any program, schedule, or pricing at any time
                without prior notice on the Website.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Enrollment in any program is subject to separate terms and
                conditions communicated at the time of registration at our
                academy.
              </p>
            </div>

            {/* 7. Trial Classes */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                7. Trial Classes
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Requests for trial classes made through the Website are subject
                to availability and confirmation by our team. Submitting a
                request does not guarantee a booking. We will contact you to
                confirm scheduling and any applicable requirements.
              </p>
            </div>

            {/* 8. Disclaimer of Warranties */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                The Website and its content are provided on an &quot;as is&quot;
                and &quot;as available&quot; basis. We make no warranties or
                representations, express or implied, regarding:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-secondary font-primary leading-relaxed">
                <li>
                  The accuracy, completeness, or timeliness of the content.
                </li>
                <li>
                  Uninterrupted or error-free operation of the Website.
                </li>
                <li>
                  The absence of viruses or other harmful components.
                </li>
              </ul>
            </div>

            {/* 9. Limitation of Liability */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                9. Limitation of Liability
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                To the fullest extent permitted by applicable law, Deccan
                Taekwondo Academy shall not be liable for any direct, indirect,
                incidental, special, or consequential damages arising out of or
                in connection with your use of the Website, including but not
                limited to damages for loss of data, revenue, or profit.
              </p>
            </div>

            {/* 10. Third-Party Links */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                10. Third-Party Links
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                The Website may contain links to third-party websites and
                services, including Instagram, Facebook, WhatsApp, and Google
                Maps. These links are provided for your convenience. We do not
                control or endorse these websites and are not responsible for
                their content, privacy practices, or terms of use.
              </p>
            </div>

            {/* 11. Physical Activity Disclaimer */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                11. Physical Activity Disclaimer
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Martial arts training involves physical activity and inherent
                risks. By enquiring about or enrolling in any DTA program, you
                acknowledge that participation in martial arts activities
                carries a risk of physical injury. Participants (or
                parents/guardians of minor participants) are responsible for
                assessing their fitness to participate and should consult a
                medical professional if needed.
              </p>
            </div>

            {/* 12. Privacy */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                12. Privacy
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                Your use of the Website is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline font-semibold"
                >
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal
                information.
              </p>
            </div>

            {/* 13. Changes to Terms */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                13. Changes to These Terms
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                We reserve the right to modify these Terms &amp; Conditions at
                any time. Changes will be posted on this page with an updated
                &quot;Last updated&quot; date. Your continued use of the Website
                after any modifications constitutes your acceptance of the
                revised terms.
              </p>
            </div>

            {/* 14. Governing Law */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                14. Governing Law
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                These Terms &amp; Conditions shall be governed by and construed
                in accordance with the laws of India. Any disputes arising out
                of or relating to these terms shall be subject to the exclusive
                jurisdiction of the courts in Bengaluru, Karnataka, India.
              </p>
            </div>

            {/* 15. Contact Us */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-primary font-sora tracking-tight">
                15. Contact Us
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-secondary leading-relaxed font-primary">
                If you have any questions about these Terms &amp; Conditions,
                please contact us:
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
