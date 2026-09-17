type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
    const centered = align === 'center';

    return (
        <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
            <p className="text-xs font-semibold tracking-[0.3em] text-accent-2">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-lg leading-relaxed text-text/60">{description}</p>}
        </div>
    );
}
