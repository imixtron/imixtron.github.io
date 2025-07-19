export const metadata = {
  title: "Imad Ali - Personal Website",
  description: "Personal website of Imad Ali - Developer building digital experiences",
  viewport: "width=device-width, initial-scale=1.0",
};


import ClientLayout from './client-layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout htmlAttrs={{"lang":"en"}} >{children}</ClientLayout>;
}