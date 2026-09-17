import SectionHeading from '@/components/SectionHeading';
import WaveArt from '@/components/WaveArt';
import { SOUND_CATEGORIES } from '@/lib/content';

export default function SoundCategories() {
    return (
        <section id="sound" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <SectionHeading
                eyebrow="UNDER THE HOOD"
                title="Four sound worlds, endless mixes"
                description="Every track in the catalog belongs to one of four textures — the Mood Pad decides how much of it you hear."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SOUND_CATEGORIES.map((category) => {
                    const gradientId = `sound-${category.slug}`;
                    return (
                        <div
                            key={category.slug}
                            className="relative h-56 overflow-hidden rounded-3xl border border-divider"
                        >
                            <WaveArt
                                gradientId={gradientId}
                                from={category.colors[1]}
                                to={category.colors[2]}
                                className="absolute inset-0 h-full w-full"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                                <h3 className="text-lg font-bold text-white">{category.label}</h3>
                                <p className="mt-1 text-sm text-white/75">{category.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
