import type { Metadata } from "next";
import "./globals.css";
import AntdProvider from "./AntdProvider";

export const metadata: Metadata = {
  title: "Adapty Clone",
  description: "Платформа для роста мобильных приложений",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
