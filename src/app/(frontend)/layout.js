import "./globals.css";

export const metadata = {
  title: "Portal - Digital Playgrounds for Creative Communities",
  description: "Create interactive digital experiences to tell your story and connect with your audience",
  keywords: "digital playgrounds, creatives, interactive experiences, storytelling, audience engagement, community, connection",
  author: "Uzoma Studio",
  openGraph: {
    title: "Portal - Digital Playgrounds for Creative Communities",
    description: "Create interactive digital experiences to tell your story and connect with your audience",
    url: "https://portal8.site",
    site_name: "Portal",
    images: [
      {
        url: "https://portal8.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portal - Digital Playgrounds for Creative Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal - Digital Playgrounds for Creative Communities",
    description: "Create interactive digital experiences to tell your story and connect with your audience",
    images: [
      {
        url: "https://portal8.site/og-image.jpg",
        alt: "Portal - Digital Playgrounds for Creative Communities",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
