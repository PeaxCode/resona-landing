import SectionHeading from '@/components/SectionHeading';
import WaveArt from '@/components/WaveArt';
import { ACTIVITIES } from '@/lib/content';

export default function ActivityShowcase() {
    const [primary, ...rest] = ACTIVITIES;

    return (
        <section id="modes" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <SectionHeading
                eyebrow="FOCUS & RELAX"
                title="Five activities. One catalog that adapts to each."
                description="Every card is its own sound — same engine, different mix of rhythm, pad, melody, and brightness."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <ActivityCard activity={primary} className="relative h-64 overflow-hidden rounded-3xl sm:col-span-2" />
                {rest.map((activity) => (
                    <ActivityCard
                        key={activity.name}
                        activity={activity}
                        className="relative h-52 overflow-hidden rounded-3xl"
                    />
                ))}
            </div>
        </section>
    );
}

function ActivityCard({
    activity,
    className,
}: {
    activity: (typeof ACTIVITIES)[number];
    className: string;
}) {
    const gradientId = `wave-${activity.name.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className={`${className} border border-divider`}>
            <WaveArt gradientId={gradientId} from={activity.from} to={activity.to} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{activity.name}</h3>
                <p className="mt-1.5 max-w-xs text-sm text-white/75">{activity.description}</p>
            </div>
        </div>
    );
}
