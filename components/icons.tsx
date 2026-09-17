type IconProps = {
    className?: string;
};

export function BoltIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12.5 2 4 14h6l-1 8 8.5-12h-6l1-8Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
        </svg>
    );
}

export function SlidersIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4 6h9M17 6h3M4 12h3M9 12h11M4 18h13M21 18h-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            <circle cx="15" cy="6" r="2.25" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="7" cy="12" r="2.25" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="17" cy="18" r="2.25" stroke="currentColor" strokeWidth={1.5} />
        </svg>
    );
}

export function TargetIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.5} />
            <circle cx="12" cy="12" r="1.25" fill="currentColor" />
        </svg>
    );
}

export function SplitIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 3v18M5 7c2.5 1.5 2.5 8.5 0 10M19 7c-2.5 1.5-2.5 8.5 0 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        </svg>
    );
}

export function DownloadIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 3v12m0 0 4.5-4.5M12 15 7.5 10.5M4.5 18.5v1a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function WaveIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M2 12c1.5 0 1.5-6 3-6s1.5 12 3 12 1.5-14 3-14 1.5 16 3 16 1.5-12 3-12 1.5 6 3 6 1.5-4 3-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ArrowRightIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function AppleIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M16.365 1.43c0 1.14-.468 2.19-1.229 2.955-.845.878-2.238 1.548-3.36 1.454-.14-1.09.42-2.24 1.19-2.99.85-.83 2.31-1.44 3.4-1.42Zm3.51 16.8c-.37.86-.55 1.24-1.03 2-.66 1.05-1.6 2.36-2.76 2.37-1.03.01-1.3-.68-2.7-.67-1.4.01-1.7.68-2.73.67-1.16-.01-2.05-1.19-2.71-2.24-1.86-2.94-2.06-6.39-.91-8.23.82-1.31 2.11-2.07 3.32-2.07 1.23 0 2 .68 3.02.68 1 0 1.6-.68 3.02-.68 1.08 0 2.22.59 3.03 1.6-2.66 1.46-2.23 5.27.45 6.57Z" />
        </svg>
    );
}

export function PlayStoreIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4 3.5v17l14-8.5-14-8.5Z" fill="currentColor" opacity={0.9} />
        </svg>
    );
}
