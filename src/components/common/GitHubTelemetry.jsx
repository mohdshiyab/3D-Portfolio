import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Github, GitCommit, Star, GitFork, Activity, RefreshCw, ExternalLink } from 'lucide-react';

const GITHUB_USERNAME = 'mohdshiyab';

// Fallback static data shown when API unavailable / rate-limited
const FALLBACK = {
  name: 'Mohammad Shiyabuddeen',
  public_repos: 12,
  followers: 28,
  following: 15,
  bio: 'Full-Stack Developer & Data Engineering Intern @ Stellapps',
};

const FALLBACK_REPOS = [
  { name: '3D-Portfolio',      description: 'Award-winning Lusion-inspired creative portfolio',  stargazers_count: 14, forks_count: 3,  language: 'JavaScript', html_url: 'https://github.com/mohdshiyab/3D-Portfolio',      updated_at: new Date().toISOString() },
  { name: 'Healix',            description: 'AI-powered automated health management system',      stargazers_count: 21, forks_count: 7,  language: 'TypeScript', html_url: 'https://github.com/mohdshiyab/Healix',            updated_at: new Date(Date.now() - 86400000).toISOString() },
  { name: 'ETL-Pipeline',      description: 'PostgreSQL batch data ingestion & Pentaho PDI workflows', stargazers_count: 8, forks_count: 2, language: 'Python', html_url: 'https://github.com/mohdshiyab', updated_at: new Date(Date.now() - 172800000).toISOString() },
];

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python:     '#3572A5',
  Solidity:   '#AA6746',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  default:    '#6e7681',
};

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 1)  return 'just now';
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

export default function GitHubTelemetry() {
  const [profile, setProfile]     = useState(null);
  const [repos, setRepos]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(false);
  const [lastFetch, setLastFetch] = useState(null);
  const [pulse, setPulse]         = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers: { Accept: 'application/vnd.github+json' } }),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { headers: { Accept: 'application/vnd.github+json' } }),
      ]);

      if (!profileRes.ok) throw new Error('rate-limited');

      const profileData = await profileRes.json();
      const reposData   = await reposRes.json();

      setProfile(profileData);
      setRepos(Array.isArray(reposData) ? reposData.slice(0, 4) : FALLBACK_REPOS);
    } catch {
      setProfile(FALLBACK);
      setRepos(FALLBACK_REPOS);
      setError(true);
    } finally {
      setLoading(false);
      setLastFetch(new Date());
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const stats = profile ? [
    { label: 'Repositories', value: profile.public_repos ?? 0, icon: <Github className="w-3.5 h-3.5" /> },
    { label: 'Followers',    value: profile.followers ?? 0,    icon: <Activity className="w-3.5 h-3.5" /> },
    { label: 'Following',    value: profile.following ?? 0,    icon: <Activity className="w-3.5 h-3.5" /> },
  ] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0b0b0b] overflow-hidden shadow-sm dark:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            <Github className="w-4 h-4 text-[#FF2A2A]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">Live GitHub Activity</div>
            <div className="text-[11px] font-mono text-gray-500">@{GITHUB_USERNAME} · {lastFetch ? `synced ${timeAgo(lastFetch.toISOString())}` : 'syncing…'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Live pulse */}
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${error ? 'bg-yellow-500' : 'bg-emerald-500'} ${pulse ? 'scale-150' : ''} transition-transform duration-300`} />
            <span className="text-[10px] font-mono text-gray-500">{error ? 'cached' : 'live'}</span>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-[#FF2A2A]/40 hover:text-[#FF2A2A] text-gray-500 transition-all"
            title="Refresh"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-[#FF2A2A]/40 hover:text-[#FF2A2A] text-gray-500 transition-all"
            title="Open GitHub"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {loading ? (
        // Skeleton
        <div className="p-5 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 rounded-xl bg-black/5 dark:bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="p-5 space-y-5">
          {/* Profile stats strip */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-center"
              >
                <div className="text-[#FF2A2A]">{s.icon}</div>
                <div className="text-lg font-black text-gray-900 dark:text-white leading-none">{s.value}</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Repo cards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GitCommit className="w-3.5 h-3.5 text-[#FF2A2A]" />
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Recent Repositories</span>
            </div>
            <div className="space-y-2">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center justify-between p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:border-[#FF2A2A]/40 hover:bg-[#FF2A2A]/5 transition-all group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-[#FF2A2A] transition-colors truncate">
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="flex items-center gap-1 shrink-0">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: LANG_COLORS[repo.language] ?? LANG_COLORS.default }}
                          />
                          <span className="text-[10px] font-mono text-gray-500">{repo.language}</span>
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <div className="text-[11px] text-gray-500 dark:text-gray-500 truncate mt-0.5">{repo.description}</div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 pl-3 shrink-0">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      <Star className="w-3 h-3" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      <GitFork className="w-3 h-3" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600 hidden sm:block">{timeAgo(repo.updated_at)}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 w-full rounded-xl border border-[#FF2A2A]/30 bg-[#FF2A2A]/5 text-[#FF2A2A] text-xs font-mono font-semibold hover:bg-[#FF2A2A]/15 hover:border-[#FF2A2A]/60 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View full profile on GitHub →</span>
          </a>
        </div>
      )}
    </motion.div>
  );
}
