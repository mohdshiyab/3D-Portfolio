import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Shield, Zap, Database, Video, Brain, Bell, ChevronRight, X } from 'lucide-react';

const NODES = [
  {
    id: 'webrtc',
    icon: Video,
    label: 'WebRTC Engine',
    sublabel: 'Telemedicine',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.3)',
    x: '10%', y: '20%',
    detail: {
      title: 'WebRTC Peer-to-Peer Telemedicine',
      latency: '< 120ms',
      payload: 'SDP offer/answer · ICE candidates · DTLS-SRTP',
      security: 'End-to-end encrypted (DTLS 1.2)',
      description: 'Real-time video consultation engine with STUN/TURN relay fallback. Supports HD 720p video at 30fps with adaptive bitrate switching based on network conditions.',
      metrics: [
        { label: 'Avg. Latency', value: '118ms' },
        { label: 'Uptime', value: '99.4%' },
        { label: 'Codec', value: 'VP8/H.264' },
      ],
    },
  },
  {
    id: 'ai',
    icon: Brain,
    label: 'AI Diagnostics',
    sublabel: 'Gemini API',
    color: '#FF2A2A',
    glow: 'rgba(255,42,42,0.4)',
    x: '50%', y: '8%',
    detail: {
      title: 'AI Voice Symptom Diagnostics',
      latency: '1.2 – 3.8s',
      payload: 'JSON: { symptoms[], severity, duration, vitals }',
      security: 'PII-stripped before API call',
      description: 'Gemini API powered NLP pipeline. Patients describe symptoms in natural language. The engine extracts structured medical entities, cross-references ICD-10 codes, and surfaces differential diagnoses for the reviewing physician.',
      metrics: [
        { label: 'Accuracy', value: '92.3%' },
        { label: 'Avg. Tokens', value: '840' },
        { label: 'Model', value: 'gemini-flash' },
      ],
    },
  },
  {
    id: 'auth',
    icon: Shield,
    label: 'Auth Gateway',
    sublabel: 'Multi-Role',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.3)',
    x: '85%', y: '20%',
    detail: {
      title: 'Secure Multi-Role Authentication',
      latency: '< 50ms',
      payload: 'JWT RS256 · Refresh token rotation · Role claims',
      security: 'bcrypt hashing · CSRF protection · Rate limiting',
      description: 'Stateless JWT authentication with role-based access control across three user tiers: Patient, Doctor, and Admin. Implements refresh token rotation with 7-day sliding window and automatic revocation on suspicious activity.',
      metrics: [
        { label: 'Token TTL', value: '15 min' },
        { label: 'Roles', value: '3 tiers' },
        { label: 'Hash', value: 'bcrypt 12' },
      ],
    },
  },
  {
    id: 'db',
    icon: Database,
    label: 'PostgreSQL DB',
    sublabel: 'Encrypted',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    x: '15%', y: '72%',
    detail: {
      title: 'Encrypted PostgreSQL Patient Records',
      latency: '< 25ms',
      payload: 'AES-256 column encryption · JSONB health metadata',
      security: 'Row-level security · Audit logs · HIPAA-aligned',
      description: 'Patient records stored with column-level AES-256 encryption for PII fields. JSONB columns for flexible health metadata. EXPLAIN ANALYZE optimized queries with composite indexes for <25ms p99 read latency.',
      metrics: [
        { label: 'p99 Reads', value: '< 25ms' },
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Tables', value: '18' },
      ],
    },
  },
  {
    id: 'api',
    icon: Zap,
    label: 'REST API Core',
    sublabel: 'Node.js / Express',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    x: '50%', y: '52%',
    detail: {
      title: 'REST API Core — Node.js / Express',
      latency: '< 80ms',
      payload: 'JSON REST · Zod validation · Error boundaries',
      security: 'Helmet.js · CORS · Rate limiting · Input sanitization',
      description: 'Central API gateway handling all client-server communication. Zod schema validation on all inputs. Express middleware stack with Helmet security headers, CORS policies, and request-level rate limiting. Full async/await with structured error handling.',
      metrics: [
        { label: 'p95 Latency', value: '76ms' },
        { label: 'Endpoints', value: '34' },
        { label: 'Uptime', value: '99.8%' },
      ],
    },
  },
  {
    id: 'alerts',
    icon: Bell,
    label: 'Alert Bus',
    sublabel: 'Emergency',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.3)',
    x: '82%', y: '72%',
    detail: {
      title: 'Emergency Alert Bus',
      latency: '< 500ms',
      payload: 'WebSocket push · FCM notifications · SMS fallback',
      security: 'Signed payloads · Delivery receipts',
      description: 'Real-time emergency notification system. Triggers critical alerts for abnormal vital readings, appointment cancellations, and prescription refill deadlines. Cascades through WebSocket → FCM push → SMS within 500ms SLA.',
      metrics: [
        { label: 'Delivery SLA', value: '< 500ms' },
        { label: 'Channels', value: '3' },
        { label: 'Reliability', value: '99.9%' },
      ],
    },
  },
];

// Connections between nodes [from, to]
const CONNECTIONS = [
  ['webrtc', 'api'],
  ['ai', 'api'],
  ['auth', 'api'],
  ['api', 'db'],
  ['api', 'alerts'],
  ['ai', 'db'],
];

function NodeBall({ node, isActive, onClick }) {
  const Icon = node.icon;
  return (
    <motion.button
      onClick={() => onClick(node)}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 group cursor-pointer"
      style={{ left: node.x, top: node.y }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={node.label}
    >
      {/* Glow ring */}
      <div
        className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-0 group-hover:opacity-50'}`}
        style={{ background: node.glow, width: '56px', height: '56px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
      />
      {/* Icon circle */}
      <div
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${isActive ? 'scale-110' : 'scale-100'}`}
        style={{
          background: `${node.color}22`,
          borderColor: isActive ? node.color : `${node.color}66`,
          boxShadow: isActive ? `0 0 20px ${node.glow}` : 'none',
        }}
      >
        <Icon className="w-5 h-5" style={{ color: node.color }} />
        {/* Pulse ring when active */}
        {isActive && (
          <span
            className="absolute inset-0 rounded-2xl animate-ping opacity-30"
            style={{ background: node.color }}
          />
        )}
      </div>
      {/* Label */}
      <div className="text-center">
        <div
          className="text-[11px] font-bold leading-tight"
          style={{ color: isActive ? node.color : 'var(--tw-text-opacity)' }}
        >
          {node.label}
        </div>
        <div className="text-[9px] font-mono text-gray-500">{node.sublabel}</div>
      </div>
    </motion.button>
  );
}

export default function ArchitectureBlueprint() {
  const [activeNode, setActiveNode] = useState(null);

  const handleNodeClick = (node) => {
    setActiveNode(prev => prev?.id === node.id ? null : node);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse" />
          <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-semibold">
            [ 03.A // LIVE SYSTEM ARCHITECTURE ]
          </h4>
        </div>
        <span className="text-[10px] font-mono text-gray-600 hidden sm:inline">Click any node for telemetry</span>
      </div>

      {/* Blueprint Canvas */}
      <div className="relative w-full rounded-2xl border border-black/10 dark:border-white/10 bg-[#030303] overflow-hidden"
        style={{ height: '340px' }}>
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF2A2A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {CONNECTIONS.map(([fromId, toId]) => {
            const from = NODES.find(n => n.id === fromId);
            const to   = NODES.find(n => n.id === toId);
            const isHighlighted = activeNode?.id === fromId || activeNode?.id === toId;
            return (
              <line
                key={`${fromId}-${toId}`}
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={isHighlighted ? '#FF2A2A' : 'rgba(255,255,255,0.08)'}
                strokeWidth={isHighlighted ? 1.5 : 0.8}
                strokeDasharray={isHighlighted ? '0' : '4,6'}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {NODES.map(node => (
            <NodeBall
              key={node.id}
              node={node}
              isActive={activeNode?.id === node.id}
              onClick={handleNodeClick}
            />
          ))}
        </div>

        {/* Center label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center pointer-events-none" style={{ zIndex: 3 }}>
          <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">Healix — Automated Health Management System</div>
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="rounded-2xl border p-5 space-y-4"
              style={{ borderColor: `${activeNode.color}40`, background: `${activeNode.color}08` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[11px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{ color: activeNode.color, background: `${activeNode.color}22` }}
                    >
                      NODE: {activeNode.id.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500">LATENCY: {activeNode.detail.latency}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{activeNode.detail.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed mt-1 max-w-xl">
                    {activeNode.detail.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveNode(null)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {activeNode.detail.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center py-2.5 rounded-xl border text-center"
                    style={{ borderColor: `${activeNode.color}30`, background: `${activeNode.color}10` }}
                  >
                    <div className="text-base font-black" style={{ color: activeNode.color }}>{m.value}</div>
                    <div className="text-[10px] font-mono text-gray-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Technical details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Payload Schema</div>
                  <div className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-black/10 dark:bg-black/40 rounded-lg px-3 py-2">
                    {activeNode.detail.payload}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Security Layer</div>
                  <div className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-black/10 dark:bg-black/40 rounded-lg px-3 py-2">
                    {activeNode.detail.security}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
