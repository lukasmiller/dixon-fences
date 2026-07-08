import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dixon Fences",
  description: "Professional fencing contractor services with custom installations and repairs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="/template/css/style.css" />
        <link rel="stylesheet" href="/template/css/font-awesome.css" />
        <link rel="stylesheet" href="/template/css/form.css" />
        <link rel="stylesheet" href="/template/css/camera.css" />
        <style>{`
          :root {
            --site-bg: #fefefe;
            --site-surface: #e0e8ed;
            --site-muted: #b7c8d4;
            --site-accent: #194565;
            --site-text: #194565;
          }

          body {
            background: var(--site-bg) !important;
            color: var(--site-text) !important;
          }

          .page1,
          .content,
          footer,
          .page1_block,
          .extra_wrapper {
            background-color: var(--site-bg) !important;
          }

          header,
          .page1_block,
          footer {
            background-color: var(--site-surface) !important;
            color: var(--site-text) !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          strong,
          address,
          p,
          li,
          span {
            color: var(--site-text) !important;
          }

          a {
            color: var(--site-accent) !important;
          }

          a:hover {
            color: var(--site-text) !important;
          }

          .sf-menu > li > a,
          .sf-menu > li.current > a,
          .sf-menu > li > a:hover,
          .sf-menu > li.current > a:hover,
          .menu_block nav ul li a,
          .menu_block nav ul li.current a {
            color: var(--site-accent) !important;
          }

          .socials a,
          .socials i {
            color: var(--site-accent) !important;
          }

          .page1 h2 {
            color: var(--site-accent) !important;
          }

          a.btn {
            background-color: var(--site-accent) !important;
            color: var(--site-bg) !important;
          }

          a.btn:hover {
            background-color: var(--site-surface) !important;
            color: var(--site-accent) !important;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
