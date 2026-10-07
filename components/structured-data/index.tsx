import React from "react";
import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  webSiteSchema,
  aboutPageSchema,
  contactPageSchema,
  getBreadcrumbSchema,
} from "./schemas";

/**
 * JSON-LD Script Component
 * Renders an application/ld+json script tag safely
 */
export const JsonLdScript = ({
  data,
}: {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data),
    }}
  />
);

/**
 * Home Page Structured Data
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={serviceSchema} />
  </>
);

/**
 * About Page Structured Data
 */
export const AboutPageStructuredData = () => (
  <>
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("About Us", "/about")} />
  </>
);

/**
 * Contact Page Structured Data
 */
export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact Us", "/contact")} />
  </>
);

export {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  webSiteSchema,
  aboutPageSchema,
  contactPageSchema,
  getBreadcrumbSchema,
};
