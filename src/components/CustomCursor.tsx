import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.2);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.2);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // NEVER hide native cursor, only render a subtle ambient magnetic ring that floats alongside
  if (!enabled || !isVisible) return null;

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ transition: 'opacity 0.2s ease' }}
    >
      <div
        className={`transition-all duration-200 rounded-full border border-[#2457F5]/60 ${
          hovered
            ? 'w-10 h-10 bg-[#2457F5]/15 scale-125 border-[#18C6C1]'
            : 'w-6 h-6 bg-transparent'
        }`}
      />
    </div>
  );
};
