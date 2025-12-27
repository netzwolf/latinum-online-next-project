import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Latinum.online",
  description: "Strukturierte Wiederholung von Latein-Grammatik: Formenlehre und Satzlehre."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <nav>
          <div className="nav-inner">
            <Link href="/">Latinum.online</Link>
            <div className="nav-links">
              <Link href="/formenlehre">Formenlehre</Link>
              <Link href="/satzlehre">Satzlehre</Link>
              <Link href="/ueber-latinum-online">Über</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}