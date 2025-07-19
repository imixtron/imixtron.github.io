import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      <body {...bodyAttrs}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster key="toaster" />
        <Sonner key="sonner" />
      </body>
    </html>
  );
}