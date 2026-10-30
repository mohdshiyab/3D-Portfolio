import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Cpu, 
  Server, 
  RotateCw, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  HardDrive
} from 'lucide-react';
import { playClick, playSuccess } from '../../utils/soundEffects';

export default function DataEngineeringWidget() {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'sql' | 'cron'
  const [isRunning, setIsRunning] = useState(false);
  const [completedRun, setCompletedRun] = useState(false);
  const [logs, setLogs] = useState([
    'Stellapps dairy telemetry stream initialized [PID: 4092]',
    'Listening on socket /var/run/postgresql/.s.PGSQL.5432',
    'Cluster status: HEALTHY (PostgreSQL 16.2 on Linux x86_64)',
  ]);

  const runETLPipeline = () => {
    if (isRunning) return;
    playClick();
    setIsRunning(true);
    setCompletedRun(false);
    setLogs(['[STAGE 1/4] Polling milk collection telemetry IoT stream...']);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[STAGE 2/4] Parsing 12,450 batch records. Validating fat/SNF schema & constraints...',
      ]);
    }, 600);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[STAGE 3/4] Triggering Pentaho PDI transformation step. Calculating running dairy averages...',
      ]);
    }, 1300);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[STAGE 4/4] PostgreSQL \\copy bulk commit executed. 12,450 rows committed in 34.2ms.',
        '✓ Pipeline complete: 0 schema anomalies, 100% data consistency verified.',
      ]);
      setIsRunning(false);
      setCompletedRun(true);
      playSuccess();
    }, 2100);
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-xl overflow-hidden text-gray-900 dark:text-white relative group">
      {/* Top Terminal Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-black/50">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono font-semibold text-gray-600 dark:text-gray-400 pl-2">
            stellapps-data-engine :: pg_cluster_node_01
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>ONLINE</span>
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-black/5 dark:border-white/10 px-4 sm:px-6 bg-gray-50/40 dark:bg-white/[0.01]">
        {[
          { id: 'pipeline', label: 'ETL Pipeline Flow', icon: Database },
          { id: 'sql', label: 'SQL Query Plan', icon: Terminal },
          { id: 'cron', label: 'Linux Cron Automation', icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playClick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 cursor-pointer ${
                isActive
                  ? 'border-[#FF2A2A] text-[#FF2A2A]'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 space-y-4">
        {activeTab === 'pipeline' && (
          <div className="space-y-4">
            {/* Visual DAG Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <Cpu className="w-4 h-4 text-[#FF2A2A] mx-auto mb-1" />
                <span className="font-semibold block">IoT Ingestion</span>
                <span className="text-[10px] text-gray-500">Telemetry Stream</span>
              </div>
              <div className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <Database className="w-4 h-4 text-[#FF2A2A] mx-auto mb-1" />
                <span className="font-semibold block">PostgreSQL</span>
                <span className="text-[10px] text-gray-500">Staging Tables</span>
              </div>
              <div className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <HardDrive className="w-4 h-4 text-[#FF2A2A] mx-auto mb-1" />
                <span className="font-semibold block">Pentaho PDI</span>
                <span className="text-[10px] text-gray-500">ETL Transforms</span>
              </div>
              <div className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <ShieldCheck className="w-4 h-4 text-[#FF2A2A] mx-auto mb-1" />
                <span className="font-semibold block">Data Quality</span>
                <span className="text-[10px] text-gray-500">Auto Verification</span>
              </div>
            </div>

            {/* Terminal Log Console */}
            <div className="p-4 rounded-xl bg-gray-900 dark:bg-black font-mono text-xs text-gray-200 space-y-1.5 border border-white/10 min-h-[140px] shadow-inner select-none">
              <div className="text-[11px] text-gray-500 pb-1 border-b border-white/10 flex items-center justify-between">
                <span>TERMINAL LOG OUTPUT:</span>
                <span>BASED ON STELLAPPS DATA ENGINE</span>
              </div>
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start space-x-2 animate-in fade-in">
                  <span className="text-[#FF2A2A] shrink-0">$</span>
                  <span className={log.includes('✓') ? 'text-emerald-400 font-bold' : ''}>{log}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-light">
                Simulate production data pipeline execution used in dairy supply chain analytics.
              </div>
              <button
                onClick={runETLPipeline}
                disabled={isRunning}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] hover:bg-[#e02424] text-white text-xs font-mono font-semibold shadow-[0_0_15px_rgba(255,42,42,0.35)] transition-all cursor-pointer disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing Batch...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Execute Batch ETL Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'sql' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-gray-900 dark:bg-black text-gray-300 border border-white/10 space-y-2 overflow-x-auto">
              <div className="text-[#FF5555] font-semibold">// Optimized Aggregation Query with Index Scan</div>
              <pre className="text-gray-100 whitespace-pre-wrap leading-relaxed">
{`EXPLAIN ANALYZE
SELECT 
  center_id, 
  COUNT(farmer_id) AS total_collections,
  ROUND(AVG(fat_percentage)::numeric, 2) AS avg_fat,
  ROUND(SUM(volume_liters)::numeric, 2) AS total_volume
FROM dairy_telemetry_batch
WHERE recorded_at >= NOW() - INTERVAL '24 hours'
GROUP BY center_id
ORDER BY total_volume DESC;`}
              </pre>
              <div className="pt-2 border-t border-white/10 text-emerald-400">
                → Execution Time: 2.140 ms | Planning Time: 0.182 ms (B-Tree index hit)
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cron' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-gray-900 dark:bg-black text-gray-300 border border-white/10 space-y-2 overflow-x-auto">
              <div className="text-[#FF5555] font-semibold">// Configured Linux Cron Tasks (Stellapps Server)</div>
              <div className="space-y-1.5 text-gray-200">
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>0 2 * * * /opt/scripts/daily_dairy_rollup.sh</span>
                  <span className="text-emerald-400 font-bold">ACTIVE (Daily 02:00)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>*/15 * * * * /opt/pdi/run_sync_job.sh --mode=incremental</span>
                  <span className="text-emerald-400 font-bold">ACTIVE (Every 15m)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>0 4 * * 0 /opt/scripts/pg_vacuum_analyze.sh</span>
                  <span className="text-emerald-400 font-bold">ACTIVE (Weekly)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
