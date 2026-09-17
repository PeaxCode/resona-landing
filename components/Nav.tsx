import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/content';

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-divider bg-bg/70 backdrop-blur-lg">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="#top" className="flex items-center gap-2.5">
                    <Image src="/brand/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
                    <span className="text-sm font-bold tracking-[0.28em] text-text">RESONA</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-text/65 transition-colors hover:text-text"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#download"
                    className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-2 transition-colors hover:bg-accent/20 sm:px-5"
                >
                    Get Resona
                </a>
            </div>
        </header>
    );
}
