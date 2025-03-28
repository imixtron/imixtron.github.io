import type {Metadata} from "next";
import {Jost} from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import {Theme} from '@radix-ui/themes';
import HorizontalScroll from '@/components/horizontal-scroll';

const jost = Jost({
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Imad Ali Abbasi",
  description: "Hi! I am Imad Ali A professional software engineer here to solve your problems!",
  keywords: ['imixtron', 'Imad', 'Ali', 'Software Engineer', 'Java', 'Spring Boot', 'Node', 'Careem', 'LocAI', 'AI']
};

export const oversizedWidth = "100vw";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${jost.variable}`} style={{ width: oversizedWidth, height: '100% !important' }}>
        <Theme accentColor="amber" radius="full" scaling="105%" appearance="light">
          {/*<HorizontalScroll>*/}
            {children}
          {/*</HorizontalScroll>*/}
        </Theme>
      </body>
    </html>
  );
}
