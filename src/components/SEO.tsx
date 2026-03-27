'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

const SITE = "https://repeadly.com";
const BRAND = "Repeadly";

const SEO = ({
  title,
  description = "The simplest customer loyalty and rewards platform for small businesses. Boost repeat visits, increase spend, and grow revenue.",
  canonical = "/",
  type = "website",
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${BRAND}` : `${BRAND} — Customer Loyalty & Rewards for Small Businesses`;
  const url = `${SITE}${canonical}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;