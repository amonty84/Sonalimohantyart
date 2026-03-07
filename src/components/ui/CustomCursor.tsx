"use client";

import React, { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);
    const frameRef = useRef<number>(0);

    const updateCursorStyle = useCallback(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const { x, y } = posRef.current;
        const hovering = isHoveringRef.current;

        const size = hovering ? 48 : 12;
        const offset = size / 2;

        cursor.style.transform = `translate(${x - offset}px, ${y - offset}px)`;
        cursor.style.width = `${size}px`;
        cursor.style.height = `${size}px`;
        cursor.style.backgroundColor = hovering ? 'transparent' : 'var(--color-foreground)';
        cursor.style.border = hovering ? '1px solid var(--color-foreground)' : '1px solid transparent';

        frameRef.current = requestAnimationFrame(updateCursorStyle);
    }, []);

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            isHoveringRef.current = (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                !!target.closest('button') ||
                !!target.closest('a') ||
                !!target.closest('.cursor-pointer')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        frameRef.current = requestAnimationFrame(updateCursorStyle);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(frameRef.current);
        };
    }, [updateCursorStyle]);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block"
            style={{
                width: 12,
                height: 12,
                backgroundColor: 'var(--color-foreground)',
                border: '1px solid transparent',
                transition: 'width 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.15s ease, border 0.15s ease',
                willChange: 'transform',
            }}
        />
    );
}
