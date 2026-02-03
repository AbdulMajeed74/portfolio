import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "../components/MotionProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Abdul Majeed | Full Stack Engineer",
        template: "%s | Abdul Majeed"
    },
    description: "Digital Architect & Full Stack Engineer specializing in high-performance digital ecosystems. Explore the portfolio of Abdul Majeed.",
    keywords: ["Full Stack Engineer", "Next.js Developer", "React Architect", "Abdul Majeed", "Portfolio"],
    authors: [{ name: "Abdul Majeed" }],
    creator: "Abdul Majeed",
    icons: {
        icon: "/favicon.ico", // Ensure this exists or matches your file
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} dark antialiased`}>
            <body className="font-sans">
                <MotionProvider>
                    {children}
                </MotionProvider>
            </body>
        </html>
    );
}
