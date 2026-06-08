'use client';

import { useEffect, useRef } from 'react';

/**
 * ParticleBackground — high-performance canvas grid that warps toward mouse cursor.
 * Grid nodes spring back to origin with damping for a fluid "intelligence" effect.
 */

interface GridNode {
  ox: number; oy: number; // origin
  x:  number; y:  number; // current position
  vx: number; vy: number; // velocity
}

const COLS          = 28;
const ROWS          = 16;
const MOUSE_RADIUS  = 220;
const MOUSE_FORCE   = 55;
const SPRING        = 0.055;
const DAMPING       = 0.82;
const BASE_ALPHA    = 0.07;
const HOVER_ALPHA   = 0.28;
const NODE_BASE_R   = 1;
const NODE_HOVER_R  = 3;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -9999, y: -9999 };
    let nodes: GridNode[] = [];
    let W = 0, H = 0;

    /* ── Initialise grid ── */
    const buildGrid = () => {
      nodes = [];
      const cw = W / (COLS - 1);
      const ch = H / (ROWS - 1);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const ox = c * cw;
          const oy = r * ch;
          nodes.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
        }
      }
    };

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildGrid();
    };

    /* ── Render loop ── */
    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        // Mouse repulsion
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_RADIUS && d > 0.5) {
          const force = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) ** 2 * MOUSE_FORCE;
          n.vx -= (dx / d) * force * 0.045;
          n.vy -= (dy / d) * force * 0.045;
        }
        // Spring return
        n.vx += (n.ox - n.x) * SPRING;
        n.vy += (n.oy - n.y) * SPRING;
        // Damp
        n.vx *= DAMPING;
        n.vy *= DAMPING;
        // Integrate
        n.x += n.vx;
        n.y += n.vy;
      }

      /* Draw connections — only right + down neighbours (O(n)) */
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const n = nodes[i];

          const mdx     = mouse.x - n.x;
          const mdy     = mouse.y - n.y;
          const mDist   = Math.sqrt(mdx * mdx + mdy * mdy);
          const prox    = Math.max(0, 1 - mDist / MOUSE_RADIUS);
          const lineA   = BASE_ALPHA + prox * HOVER_ALPHA;

          // Right neighbour
          if (c < COLS - 1) {
            const nb = nodes[i + 1];
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.strokeStyle = `rgba(201,168,76,${lineA.toFixed(3)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
          // Down neighbour
          if (r < ROWS - 1) {
            const nb = nodes[i + COLS];
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.strokeStyle = `rgba(201,168,76,${lineA.toFixed(3)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }

          // Node dot
          const r_ = NODE_BASE_R + prox * NODE_HOVER_R;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r_, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201,168,76,${(0.18 + prox * 0.65).toFixed(3)})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(tick);
    };

    const onMove  = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = ()               => { mouse.x = -9999;     mouse.y = -9999;     };

    window.addEventListener('resize',    resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    resize();
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize',    resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    />
  );
}
