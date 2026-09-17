import MoodPadDemo from '@/components/MoodPadDemo';
import SectionHeading from '@/components/SectionHeading';
import { STEPS } from '@/lib/content';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <SectionHeading
                eyebrow="HOW IT WORKS"
                title="Not a playlist. A live mix, tuned to you."
                description="From your first tap to a saved preset, in three steps."
            />

            <div className="mt-14 grid gap-10 md:grid-cols-3">
                {STEPS.map((step) => (
                    <div key={step.number}>
                        <span className="text-sm font-semibold text-accent-2">{step.number}</span>
                        <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text/60">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 rounded-3xl border border-divider bg-surface/70 p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-[0.3em] text-accent-2">TRY THE MECHANIC</p>
                <h3 className="mt-3 text-2xl font-bold text-text">The Mood Pad, simplified</h3>
                <div className="mt-8">
                    <MoodPadDemo />
                </div>
            </div>
        </section>
    );
}
