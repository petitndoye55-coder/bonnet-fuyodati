import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://bonnet.fuyodati.com";
const googleAnalyticsId = "G-BKVJBJ4YRV";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bonnet à Dakar dès 15 000 F CFA | FuyoDati", template: "%s | FuyoDati Dakar" },
  description: "Achat et lavage de bonnet haoussa à Dakar chez FuyoDati : nettoyage soigneux à 2 000 F CFA l’unité, commande WhatsApp et livraison rapide.",
  keywords: ["lavage bonnet haoussa Dakar", "nettoyage bonnet haoussa", "entretien bonnet haoussa Dakar", "bonnet à Dakar", "bonnet togolais Dakar", "bonnet africain Sénégal", "FuyoDati"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "0iXPpU4GIcxr89vG_ZeCCA1X5wmCd44fW2hJ9iG1Lno" },
  openGraph: { type: "website", locale: "fr_SN", url: siteUrl, siteName: "FuyoDati", title: "Bonnets et lavage de bonnet haoussa à Dakar | FuyoDati", description: "Lavage soigneux de bonnet haoussa à Dakar à 2 000 F CFA l’unité, vente de bonnets et commande directe sur WhatsApp.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bonnets à Dakar — FuyoDati" }] },
  twitter: { card: "summary_large_image", title: "Lavage de bonnet haoussa à Dakar | FuyoDati", description: "Nettoyage soigneux à 2 000 F CFA l’unité et réservation sur WhatsApp.", images: ["/og.png"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="fr-SN"><body>{children}<Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`}</Script></body></html>;
}
