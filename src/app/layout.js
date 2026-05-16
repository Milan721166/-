import "./globals.css";

export const metadata = {
  title: "Nobodingonton | Next-Gen Digital Experience",
  description: "Experience the future of digital creation with Nobodingonton. Fast, beautiful, and interactive.",
  keywords: "nextjs, digital experience, web design, innovation, nobodingonton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
