import { useRef, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValueEvent } from 'motion/react';

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(50); // percentage

  const springX = useSpring(50, { stiffness: 200, damping: 30 });

  useMotionValueEvent(springX, 'change', (v) => setDragX(v));

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (e.buttons !== 1) return;
      springX.set(getPercent(e.clientX));
    },
    [getPercent, springX]
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      springX.set(getPercent(e.clientX));
    },
    [getPercent, springX]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      springX.set(getPercent(e.touches[0].clientX));
    },
    [getPercent, springX]
  );

  // Hours counter based on drag position
  const beforeHours = Math.round(47 - (dragX / 100) * 0); // stays 47
  const afterHours = Math.max(1, Math.round(2 + ((100 - dragX) / 100) * 45));

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-[family-name:var(--font-mono)] tracking-[0.3em] uppercase text-[#F5F0E8]/30 mb-3">
            The Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-[#F5F0E8]">
            Drag to see{' '}
            <span className="text-[#b49bff]">the difference</span>
          </h2>
          <p className="text-[#F5F0E8]/40 mt-4 text-sm">← Drag the handle to reveal →</p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-white/10 select-none"
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onTouchMove={onTouchMove}
          style={{ cursor: 'col-resize' }}
        >
          {/* BEFORE (left — full) */}
          <div className="absolute inset-0 flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, #1a0505 0%, #0d0505 100%)' }}>
            <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: 'linear-gradient(rgba(239,68,68,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.15) 1px, transparent 1px)',
                   backgroundSize: '30px 30px',
                 }} />

            {/* Before content */}
            <div className="text-center relative z-10 px-8 max-w-sm">
              <div className="text-6xl mb-4">😩</div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['📧', '📊', '📝', '🗓', '⏰', '📋'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [-2, 2, -2], y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border"
                    style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)' }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <div className="text-[#EF4444] font-[family-name:var(--font-mono)] text-4xl font-bold mb-1">
                {beforeHours}hrs<span className="text-lg">/week</span>
              </div>
              <div className="text-[#F5F0E8]/40 text-sm">manual repetitive work</div>
            </div>

            {/* Label */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase"
                 style={{ background: 'rgba(239,68,68,0.15)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.3)' }}>
              WITHOUT AI AUTOMATION
            </div>
          </div>

          {/* AFTER (right — clipped) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: `inset(0 0 0 ${dragX}%)`,
              background: 'linear-gradient(135deg, #051a09 0%, #020d04 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: 'linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)',
                   backgroundSize: '30px 30px',
                 }} />

            {/* After content — node graph */}
            <div className="relative z-10">
              <svg width="320" height="220" viewBox="0 0 320 220">
                {/* Edges */}
                {[
                  { x1: 60, y1: 110, x2: 140, y2: 110 },
                  { x1: 180, y1: 110, x2: 260, y2: 70 },
                  { x1: 180, y1: 110, x2: 260, y2: 110 },
                  { x1: 180, y1: 110, x2: 260, y2: 150 },
                ].map((edge, i) => (
                  <motion.line
                    key={i}
                    x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2}
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeOpacity={0.6}
                    strokeDasharray="6 3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatType: 'loop' }}
                  />
                ))}

                {/* Center AI node */}
                <motion.circle
                  cx={160} cy={110} r={30}
                  fill="rgba(34,197,94,0.15)"
                  stroke="#22C55E"
                  strokeWidth="1.5"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <text x={160} y={106} textAnchor="middle" fontSize="11" fill="#22C55E" fontFamily="monospace">AI</text>
                <text x={160} y={120} textAnchor="middle" fontSize="9" fill="rgba(34,197,94,0.7)" fontFamily="monospace">Core</text>

                {/* Input node */}
                <rect x={20} y={90} width={70} height={40} rx={8} fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
                <text x={55} y={114} textAnchor="middle" fontSize="9" fill="#22C55E" fontFamily="monospace">Trigger</text>

                {/* Output nodes */}
                {[70, 110, 150].map((y, i) => (
                  <g key={i}>
                    <rect x={240} y={y} width={70} height={30} rx={6} fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
                    <text x={275} y={y + 19} textAnchor="middle" fontSize="8" fill="#22C55E" fontFamily="monospace">
                      {['Notify', 'CRM', 'Book'][i]}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="text-center mt-2">
                <div className="text-[#22C55E] font-[family-name:var(--font-mono)] text-4xl font-bold mb-1">
                  {afterHours}hrs<span className="text-lg">/week</span>
                </div>
                <div className="text-[#F5F0E8]/40 text-sm">with SapSynk automation</div>
              </div>
            </div>

            {/* Label */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase"
                 style={{ background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)' }}>
              WITH SAPSYNK
            </div>
          </div>

          {/* Drag divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] z-20 pointer-events-none"
            style={{
              left: `${dragX}%`,
              background: 'linear-gradient(180deg, transparent, #b49bff, transparent)',
              boxShadow: '0 0 12px rgba(180, 155, 255,0.6)',
            }}
          />

          {/* Drag handle */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full glass-cyan
                       flex items-center justify-center text-[#b49bff] font-bold select-none
                       border border-[#b49bff]/40 shadow-lg"
            style={{ left: `calc(${dragX}% - 20px)`, boxShadow: '0 0 20px rgba(180, 155, 255,0.4)' }}
          >
            <span className="text-xs font-[family-name:var(--font-mono)]">⟷</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
