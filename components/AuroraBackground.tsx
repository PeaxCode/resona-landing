// Matches DEFAULT_AMBIENT_PALETTE in src/constants/theme.ts — Resona's signature violet aurora.
const DEFAULT_COLORS = ['#8b7fd4', '#a594ff', '#7c3aed', '#6366f1', '#c084fc', '#9333ea'];

type AuroraBackgroundProps = {
    colors?: string[];
    className?: string;
};

export default function AuroraBackground({ colors = DEFAULT_COLORS, className = '' }: AuroraBackgroundProps) {
    const [c0, c1, c2, c3] = colors;

    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            <div
                className="absolute -inset-[25%] animate-drift opacity-80 blur-[90px]"
                style={{
                    background: `
                        radial-gradient(circle at 22% 28%, ${c0}59, transparent 34%),
                        radial-gradient(circle at 78% 18%, ${c1}4d, transparent 32%),
                        radial-gradient(circle at 62% 68%, ${c2}42, transparent 38%),
                        radial-gradient(circle at 25% 82%, ${c3}33, transparent 34%)
                    `,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg" />
        </div>
    );
}
