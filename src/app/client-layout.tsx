import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GoogleAnalytics } from '@next/third-parties/google';


export default function ClientLayout({
  children,
  htmlAttrs = {},
  bodyAttrs = {},
}: {
  children: React.ReactNode;
  htmlAttrs?: Record<string, string>;
  bodyAttrs?: Record<string, string>;
}) {
  return (
    <html {...htmlAttrs}>
      <head>
        <title>Imad Ali</title>
        <meta name="description" content="a backend engineer with 10+ years of experience crafting resilient platforms, public APIs, and developer-friendly tools. I turn complex problems into elegant, maintainable systems." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://imixtron.com" />

        <meta property="og:title" content="Imad Ali - imixtron" />
        <meta property="og:description" content="a backend engineer with 10+ years of experience crafting resilient platforms, public APIs, and developer-friendly tools. I turn complex problems into elegant, maintainable systems." />
        <meta property="og:image" content="og_image.png" />
        <meta property="og:url" content="https://imixtron.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "imixtron",
          "url": "https://imixtron.com"
        }) }} />
      </head>
      <body {...bodyAttrs}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster key="toaster" />
        <Sonner key="sonner" />
      </body>
      <GoogleAnalytics gaId="G-F4661VW012" />
    </html>
  );
}