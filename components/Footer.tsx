import Image from 'next/image';
import { LEGAL_LINKS } from '@/lib/content';

export default function Footer() {
    return (
        <footer className="border-t border-divider">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm text-text/50 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-2.5">
                    <Image src="/brand/logo-mark.png" alt="" width={20} height={20} className="h-5 w-5" />
                    <span className="font-semibold tracking-[0.2em] text-text/70">RESONA</span>
                </div>

                <p>© {new Date().getFullYear()} Resona. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    <a href={LEGAL_LINKS.privacy} target="_blank" rel="noreferrer" className="hover:text-text/80">
                        Privacy Policy
                    </a>
                    <a href={LEGAL_LINKS.terms} target="_blank" rel="noreferrer" className="hover:text-text/80">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
