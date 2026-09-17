import AuroraBackground from '@/components/AuroraBackground';
import { AppleIcon, PlayStoreIcon } from '@/components/icons';
import { LEGAL_LINKS } from '@/lib/content';

export default function CTASection() {
    return (
        <section id="download" className="relative overflow-hidden">
            <AuroraBackground className="opacity-60" />

            <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
                <p className="text-xs font-semibold tracking-[0.3em] text-accent-2">GET THE APP</p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                    Get Resona on iOS and Android.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-text/60">
                    Guest-first and free to start — no account required to press play.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <span className="flex items-center gap-2.5 rounded-2xl border border-divider px-5 py-3 text-text/40">
                        <AppleIcon className="h-6 w-6" />
                        <span className="text-left leading-tight">
                            <span className="block text-[10px] uppercase tracking-wider">Coming soon on</span>
                            <span className="block text-sm font-semibold">App Store</span>
                        </span>
                    </span>
                    <span className="flex items-center gap-2.5 rounded-2xl border border-divider px-5 py-3 text-text/40">
                        <PlayStoreIcon className="h-6 w-6" />
                        <span className="text-left leading-tight">
                            <span className="block text-[10px] uppercase tracking-wider">Coming soon on</span>
                            <span className="block text-sm font-semibold">Google Play</span>
                        </span>
                    </span>
                </div>

                <p className="mt-6 text-xs text-text/35">
                    By using Resona, you agree to our{' '}
                    <a href={LEGAL_LINKS.terms} target="_blank" rel="noreferrer" className="underline hover:text-text/60">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href={LEGAL_LINKS.privacy} target="_blank" rel="noreferrer" className="underline hover:text-text/60">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
