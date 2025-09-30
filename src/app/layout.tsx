import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Portfolio | Fernando Oliveira",
  description:
    "My personal portfolio website showcasing my projects and skills.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookiesMap = await cookies();
  const locale = cookiesMap.get("locale")?.value || "en";
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
