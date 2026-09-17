import { BoltIcon, DownloadIcon, SlidersIcon, SplitIcon, TargetIcon, WaveIcon } from '@/components/icons';
import SectionHeading from '@/components/SectionHeading';
import { FEATURES, type Feature } from '@/lib/content';

const ICONS: Record<Feature['icon'], typeof BoltIcon> = {
    bolt: BoltIcon,
    sliders: SlidersIcon,
    target: TargetIcon,
    split: SplitIcon,
    download: DownloadIcon,
    wave: WaveIcon,
};

export default function FeatureGrid() {
    return (
        <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <SectionHeading eyebrow="WHAT'S INSIDE" title="Built around one loop: feel, tune, save." />

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-divider bg-divider sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map((feature) => {
                    const Icon = ICONS[feature.icon];
                    return (
                        <div key={feature.title} className="bg-bg p-8">
                            <Icon className="h-6 w-6 text-accent-2" />
                            <h3 className="mt-5 text-base font-semibold text-text">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-text/60">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
