type WaveArtProps = {
    gradientId: string;
    from: string;
    to: string;
    className?: string;
};

// A stylized echo of the app's AmbientBackground wave art — not a pixel copy, just the same family of shape.
export default function WaveArt({ gradientId, from, to, className = '' }: WaveArtProps) {
    return (
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" className={className} aria-hidden="true">
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0.3" y2="1">
                    <stop offset="0%" stopColor={from} stopOpacity={0.85} />
                    <stop offset="100%" stopColor={to} stopOpacity={1} />
                </linearGradient>
            </defs>
            <rect width="400" height="300" fill={`url(#${gradientId})`} />
            <path
                d="M0,175 C60,135 110,195 165,165 C225,132 265,80 325,112 C365,134 385,150 400,142 L400,300 L0,300 Z"
                fill="black"
                opacity={0.16}
            />
            <path
                d="M0,212 C70,182 135,225 195,197 C255,168 305,136 400,182 L400,300 L0,300 Z"
                fill="black"
                opacity={0.22}
            />
            <path
                d="M0,246 C80,226 165,254 245,231 C305,212 355,221 400,216 L400,300 L0,300 Z"
                fill="black"
                opacity={0.32}
            />
        </svg>
    );
}
