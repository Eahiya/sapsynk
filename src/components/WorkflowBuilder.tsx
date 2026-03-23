import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

type NodeKind = 'trigger' | 'process' | 'output';

interface Node {
  id: string;
  label: string;
  kind: NodeKind;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
}

const nodeColors: Record<NodeKind, { bg: string; border: string; text: string }> = {
  trigger: { bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.5)', text: '#F97316' },
  process: { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.5)', text: '#8B5CF6' },
  output:  { bg: 'rgba(180, 155, 255,0.08)',  border: 'rgba(180, 155, 255,0.4)',  text: '#b49bff' },
};

const SVG_W = 800;
const SVG_H = 360;

const initialNodes: Node[] = [
  // Triggers
  { id: 't1', label: 'New Lead\nin HubSpot',   kind: 'trigger', x: 80,  y: 60 },
  { id: 't2', label: 'Email\nReceived',         kind: 'trigger', x: 80,  y: 180 },
  { id: 't3', label: 'Form\nSubmitted',         kind: 'trigger', x: 80,  y: 300 },
  // Processes
  { id: 'p1', label: 'AI Analyzes\nIntent',    kind: 'process', x: 300, y: 100 },
  { id: 'p2', label: 'Generate\nResponse',     kind: 'process', x: 300, y: 240 },
  // Outputs
  { id: 'o1', label: 'Slack\nNotification',    kind: 'output',  x: 560, y: 60  },
  { id: 'o2', label: 'CRM\nUpdated',           kind: 'output',  x: 560, y: 180 },
  { id: 'o3', label: 'Calendar\nBooked',       kind: 'output',  x: 560, y: 300 },
];

const edges: Edge[] = [
  { from: 't1', to: 'p1' }, { from: 't2', to: 'p1' }, { from: 't3', to: 'p2' },
  { from: 'p1', to: 'o1' }, { from: 'p1', to: 'o2' }, { from: 'p2', to: 'o2' }, { from: 'p2', to: 'o3' },
];

function getNodeCenter(nodes: Node[], id: string) {
  const n = nodes.find((x) => x.id === id);
  return n ? { x: n.x + 70, y: n.y + 30 } : { x: 0, y: 0 };
}

export default function WorkflowBuilder() {
  const [activeFlow, setActiveFlow] = useState<string | null>(null);
  const [nodes] = useState<Node[]>(initialNodes);

  const triggerFlow = useCallback((triggerId: string) => {
    setActiveFlow(triggerId);
    setTimeout(() => setActiveFlow(null), 3000);
  }, []);

  const activeEdges = activeFlow
    ? edges.filter(
        (e) =>
          e.from === activeFlow ||
          (activeFlow === 't1' && ['p1', 'o1', 'o2'].includes(e.to)) ||
          (activeFlow === 't2' && ['p1', 'o1', 'o2'].includes(e.to)) ||
          (activeFlow === 't3' && ['p2', 'o2', 'o3'].includes(e.to))
      )
    : [];

  return (
    <section id="workflow" className="py-28 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-[family-name:var(--font-mono)] tracking-[0.3em] uppercase text-[#F5F0E8]/30 mb-3">
            Interactive Demo
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-[#F5F0E8]">
            Click a trigger to{' '}
            <span className="text-[#b49bff]">run the workflow</span>
          </h2>
          <p className="text-[#F5F0E8]/40 mt-3 text-sm flex items-center justify-center gap-2">
            <ArrowDown className="w-4 h-4" /> Click any orange node to activate the flow
          </p>
        </div>

        {/* Node graph panel */}
        <div className="rounded-2xl border border-white/8 relative overflow-hidden"
             style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)' }}>
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full"
            style={{ height: 'clamp(280px, 50vw, 420px)' }}
          >
            {/* Static edges */}
            {edges.map((edge) => {
              const from = getNodeCenter(nodes, edge.from);
              const to = getNodeCenter(nodes, edge.to);
              const isActive = activeEdges.some((ae) => ae.from === edge.from && ae.to === edge.to);
              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <line
                    x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                    stroke={isActive ? '#b49bff' : 'rgba(255,255,255,0.08)'}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={isActive ? '8 4' : 'none'}
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />
                  {/* Animated flow dot */}
                  {isActive && (
                    <motion.circle
                      r={5}
                      fill="#b49bff"
                      filter="url(#glow)"
                      initial={{ offsetDistance: '0%' } as never}
                      animate={{ offsetDistance: '100%' } as never}
                      transition={{ duration: 1.2, ease: 'easeInOut', repeat: 2 }}
                      style={{
                        offsetPath: `path('M ${from.x} ${from.y} L ${to.x} ${to.y}')`,
                      } as React.CSSProperties}
                    />
                  )}
                </g>
              );
            })}

            {/* Glow filter */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Nodes */}
            {nodes.map((node) => {
              const c = nodeColors[node.kind];
              const isActive = activeFlow === node.id ||
                (activeFlow && activeEdges.some((e) => e.to === node.id));
              return (
                <g
                  key={node.id}
                  onClick={() => node.kind === 'trigger' && triggerFlow(node.id)}
                  style={{ cursor: node.kind === 'trigger' ? 'pointer' : 'default' }}
                >
                  <rect
                    x={node.x} y={node.y} width={140} height={60} rx={10}
                    fill={isActive ? c.border : c.bg}
                    stroke={isActive ? c.text : c.border}
                    strokeWidth={isActive ? 2 : 1}
                    opacity={isActive ? 1 : 0.8}
                    style={{ transition: 'all 0.3s', filter: isActive ? `drop-shadow(0 0 8px ${c.text})` : 'none' }}
                  />
                  {node.label.split('\n').map((line, li) => (
                    <text
                      key={li}
                      x={node.x + 70}
                      y={node.y + 24 + li * 16}
                      textAnchor="middle"
                      fontSize="11"
                      fill={isActive ? '#F5F0E8' : c.text}
                      fontFamily="var(--font-mono), monospace"
                      fontWeight={isActive ? '600' : '400'}
                      style={{ transition: 'fill 0.3s' }}
                    >
                      {line}
                    </text>
                  ))}
                  {/* Trigger click hint */}
                  {node.kind === 'trigger' && !activeFlow && (
                    <motion.circle
                      cx={node.x + 130} cy={node.y + 10} r={5}
                      fill="#F97316"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Bottom bar */}
          <div className="border-t border-white/5 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
               style={{ background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-sm text-[#F5F0E8]/60">
              <span className="text-[#b49bff]">⟡</span>{' '}
              This workflow saves{' '}
              <span className="text-[#F5F0E8] font-semibold">~12 hrs/week</span>{' '}
              for teams like yours
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#030014] bg-[#b49bff]
                         hover:bg-[#b49bff]/90 transition-all shrink-0"
            >
              Want this built for you? →
            </motion.a>
          </div>
        </div>

        {/* Active flow toast */}
        <AnimatePresence>
          {activeFlow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 text-center text-sm font-[family-name:var(--font-mono)] text-[#b49bff]"
            >
              ▶ Workflow executing... watching data flow in real time
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
