import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
    variable: '--font-hanken',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Resona — Sound, tuned to you.',
    description:
        'A personalized focus and relaxation soundscape app. Drag one pad and four live audio stems blend in real time until the sound matches exactly how you want to feel.',
    openGraph: {
        title: 'Resona — Sound, tuned to you.',
        description:
            'A personalized focus and relaxation soundscape app, built around four live audio stems and one mood pad.',
        images: ['/brand/app-icon.png'],
        type: 'website',
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className={`${hanken.variable} h-full antialiased`}>
            <body className="flex min-h-full flex-col bg-bg font-sans text-text">{children}</body>
        </html>
    );
}
