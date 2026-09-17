'use client';

import { useEffect, useState } from 'react';
import AuroraBackground from '@/components/AuroraBackground';
import PhoneMockup from '@/components/PhoneMockup';
import { ArrowRightIcon } from '@/components/icons';
import { HERO_WORDS } from '@/lib/content';

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((current) => (current + 1) % HERO_WORDS.length);
        }, 2400);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="top" className="relative overflow-hidden pt-16">
            <AuroraBackground />

            <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pb-32 md:pt-24">
                <div>
                    <p className="text-xs font-semibold tracking-[0.3em] text-accent-2">SOUND, TUNED TO YOU</p>

                    <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
                        A soundscape
                        <br />
                        made for{' '}
                        <span
                            key={wordIndex}
                            className="inline-block animate-word-in bg-gradient-to-r from-accent-bright to-accent-2 bg-clip-text text-transparent"
                        >
                            {HERO_WORDS[wordIndex]}
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-relaxed text-text/65">
                        Drag one pad and four live audio stems blend in real time until the mix matches exactly how
                        you want to feel. No playlists, no signup wall — just press play.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#download"
                            className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
                        >
                            Get Resona
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center gap-2 rounded-full border border-divider px-6 py-3.5 text-sm font-medium text-text/80 transition-colors hover:border-white/25 hover:text-text"
                        >
                            See how it works
                        </a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <PhoneMockup />
                </div>
            </div>
        </section>
    );
}
