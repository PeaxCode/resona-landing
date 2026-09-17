import Image from 'next/image';

type PhoneMockupProps = {
    className?: string;
};

export default function PhoneMockup({ className = '' }: PhoneMockupProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-accent/25 blur-[70px]" />
            <div className="relative rounded-[2.6rem] border border-white/10 bg-surface p-2.5 shadow-2xl shadow-black/60">
                <Image
                    src="/screens/app-home-focus.png"
                    alt="Resona home screen showing the Deep Work, Light Work, Creativity, Learning, and Motivation soundscapes"
                    width={414}
                    height={900}
                    priority
                    className="w-[240px] rounded-[2.1rem] sm:w-[280px]"
                />
            </div>
        </div>
    );
}
