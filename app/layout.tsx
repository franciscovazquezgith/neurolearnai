import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroLearn AI — Aprende diferente. Aprende mejor.",
  description:
    "NeuroLearn AI analiza cómo aprendes y crea un camino educativo único para maximizar tu rendimiento. Tutor IA 24/7, flashcards inteligentes y planes personalizados.",
  keywords: ["aprendizaje IA", "tutor inteligente", "educación adaptativa", "NeuroLearn"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#060B15] text-white antialiased">{children}</body>
    </html>
  );
}
