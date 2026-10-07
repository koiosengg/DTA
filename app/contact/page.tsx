"use client";

import ContactBanner from "@/components/Contact/Banner";
import ReachUs from "@/components/Contact/ReachUs";
import { ContactPageStructuredData } from "@/components/structured-data";

export default function Contact() {
  return (
    <div className="grow bg-white">
      <ContactPageStructuredData />
      <ContactBanner />
      <ReachUs />
    </div>
  );
}
