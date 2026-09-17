import { TRUST_FACTS } from '@/lib/content';

export default function TrustStrip() {
    const items = [...TRUST_FACTS, ...TRUST_FACTS];

    return (
        <div className="relative overflow-hidden border-y border-divider bg-surface/60 py-4">
            <div className="flex w-max animate-marquee gap-12">
                {items.map((fact, index) => (
                    <span
                        key={`${fact}-${index}`}
                        className="flex items-center gap-3 whitespace-nowrap text-sm text-text/55"
                    >
                        <span className="h-1 w-1 rounded-full bg-accent-2" />
                        {fact}
                    </span>
                ))}
            </div>
        </div>
    );
}
