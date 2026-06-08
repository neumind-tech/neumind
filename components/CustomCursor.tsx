'use client';

import { useEffect, useRef } from 'react';

/**
 * CustomCursor — gold ring cursor with smooth damped movement.
 * Only activates on pointer-fine (desktop/trackpad) devices.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const pos     = useRef({ x: 0, y: 0 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    // Only enable on fine-pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;

    ring.style.opacity = '1';
    dot.style.opacity  = '1';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // Damping — ring lags behind mouse for liquid feel
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      ring.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      dot.style.transform  = `translate(${mouse.current.x - 2.5}px, ${mouse.current.y - 2.5}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Hover state on interactive elements
    const onEnter = () => ring.classList.add('nm-hover');
    const onLeave = () => ring.classList.remove('nm-hover');

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animate);
    attachHoverListeners();

    // Re-attach on DOM mutations (for dynamically added elements)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="nm-cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="nm-cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
