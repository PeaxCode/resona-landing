'use client';

import { useRef, useState } from 'react';
import { STEMS } from '@/lib/content';

export default function MoodPadDemo() {
    const padRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0.5, y: 0.42 });
    const [dragging, setDragging] = useState(false);

    function applyPoint(clientX: number, clientY: number) {
        const rect = padRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
        setPos({ x, y });
    }

    function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragging(true);
        applyPoint(event.clientX, event.clientY);
    }

    function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
        if (!dragging) return;
        applyPoint(event.clientX, event.clientY);
    }

    function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
        event.currentTarget.releasePointerCapture(event.pointerId);
        setDragging(false);
    }

    // Each gain tracks proximity to its own label on the pad (Rhythm=top, Pad=right, Melody=bottom, Brightness=left).
    const gains = {
        rhythm: Math.round((1 - pos.y) * 100),
        pad: Math.round(pos.x * 100),
        melody: Math.round(pos.y * 100),
        brightness: Math.round((1 - pos.x) * 100),
    };

    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div
                ref={padRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="relative h-64 w-64 shrink-0 touch-none select-none rounded-3xl border border-divider bg-[#14141d] shadow-inner shadow-black/40"
            >
                <div
                    className="pointer-events-none absolute rounded-full bg-accent-bright/30 blur-2xl transition-[left,top] duration-75 ease-out"
                    style={{
                        width: '55%',
                        height: '55%',
                        left: `${pos.x * 100}%`,
                        top: `${pos.y * 100}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-accent-bright shadow-[0_0_20px_rgba(165,148,255,0.8)] transition-[left,top] duration-75 ease-out"
                    style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%` }}
                />

                {STEMS.map((stem, index) => (
                    <span
                        key={stem}
                        className={`absolute text-[10px] font-medium uppercase tracking-[0.2em] text-text/35 ${
                            [
                                'left-1/2 top-3 -translate-x-1/2',
                                'right-3 top-1/2 -translate-y-1/2',
                                'left-1/2 bottom-3 -translate-x-1/2',
                                'left-3 top-1/2 -translate-y-1/2',
                            ][index]
                        }`}
                    >
                        {stem}
                    </span>
                ))}
            </div>

            <div className="grid w-full max-w-xs grid-cols-2 gap-x-6 gap-y-4">
                {(['rhythm', 'pad', 'melody', 'brightness'] as const).map((key) => (
                    <div key={key}>
                        <div className="flex items-center justify-between text-xs text-text/50">
                            <span className="capitalize">{key}</span>
                            <span>{gains[key]}%</span>
                        </div>
                        <div className="mt-1.5 h-1 rounded-full bg-white/10">
                            <div
                                className="h-full rounded-full bg-accent-2 transition-[width] duration-75 ease-out"
                                style={{ width: `${gains[key]}%` }}
                            />
                        </div>
                    </div>
                ))}
                <p className="col-span-2 mt-2 text-sm text-text/55">
                    Drag the pad. In the app, this same gesture rides four live audio stems up and down in real
                    time — this is a simplified preview of that mix.
                </p>
            </div>
        </div>
    );
}
