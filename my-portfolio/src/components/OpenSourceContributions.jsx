
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiGitPullRequest,
  FiGitMerge,
  FiCheckCircle,
  FiAlertCircle,
  FiChevronDown,
  FiZap,
  FiCode,
  FiCheck,
} from "react-icons/fi";

const GITHUB_USERNAME = "SimonGebru";

// Only contributions approved by you appear in the portfolio.

const APPROVED_CONTRIBUTIONS = [
  {
    owner: "hasadna",
    repo: "open-bus-map-search",
    prNumber: 1920,

    projectName: "Open Bus Map Search",
    category: "Performance Optimization",
    tags: ["React", "TypeScript", "TanStack Query", "Vitest"],

    summary:
      "Optimized the station stops page by reducing unnecessary API requests, keeping timeline data synchronized, and adding regression tests.",

    paragraphs: [
      "I contributed to Open Bus Map Search, an open-source project focused on public transportation data, by identifying and resolving a performance issue in the station stops page.",

      "The application was making unnecessary API requests whenever users changed the selected time, including requests for intermediate values while typing. I implemented a **500ms debounce** to ensure that data is fetched only after the user pauses their input, reducing redundant network requests while keeping the interface responsive.",

      "I also updated the data-fetching logic to keep the timeline visualization synchronized with the selected request time.",

      "To ensure the solution remained reliable, I added two regression tests using **Vitest and React Testing Library**, covering both stop data and scheduled versus actual stop times. I verified the improvement through Chrome DevTools and successfully ran the project's lint checks, unit tests, and production build.",
    ],

    reviewText:
      "The contribution was submitted through **Pull Request #1920**, received approval from a project maintainer, and passed the project's automated checks. This gave me hands-on experience contributing to an established open-source codebase, following contribution guidelines, writing regression tests, and collaborating with maintainers through code review.",

    mergedText:
      "The fix was approved by a project maintainer and successfully merged into the project's main branch through **Pull Request #1920**. This experience strengthened my ability to contribute to an established codebase, write regression tests, and collaborate with other developers through code review.",

    highlights: [
      {
        label: "Performance",
        value: "500ms debounce",
        icon: FiZap,
      },
      {
        label: "Testing",
        value: "2 regression tests",
        icon: FiCheckCircle,
      },
      {
        label: "Collaboration",
        value: "Maintainer approved",
        icon: FiGitPullRequest,
      },
    ],
  },

  {
    owner: "neomjs",
    repo: "neo",
    prNumber: 20157,

    projectName: "Neo.mjs",
    category: "Unit Testing",
    tags: ["JavaScript", "Playwright", "Unit Testing"],

    summary:
      "Added 13 Playwright unit tests for Neo.mjs's currency field, covering numeric parsing, rounding, formatting, edge cases, and default configuration. Established regression coverage for existing behavior without modifying production code.",

    paragraphs: [
      "I contributed to Neo.mjs, an open-source JavaScript framework, by adding 13 Playwright unit tests for its currency field.",

      "The tests cover numeric parsing, decimal rounding, currency formatting, edge cases, and default configuration. The goal was to establish reliable regression coverage for existing behavior without changing the production implementation.",

      "This contribution gave me practical experience understanding an established framework's codebase, working with its existing testing infrastructure, and writing tests that help prevent regressions.",
    ],

    reviewText:
      "The contribution was submitted through **Pull Request #20157**, linked to **Issue #19129**, and is awaiting review. It focuses entirely on test coverage rather than introducing new production functionality.",

    mergedText:
      "The contribution was successfully merged through **Pull Request #20157**, addressing **Issue #19129**. It adds regression coverage for the currency field without changing production code.",

    issueUrl: "https://github.com/neomjs/neo/issues/19129",

    highlights: [
      {
        label: "Test Coverage",
        value: "13 unit tests",
        icon: FiCheckCircle,
      },
      {
        label: "Framework",
        value: "Playwright",
        icon: FiCode,
      },
      {
        label: "Contribution",
        value: "Regression tests",
        icon: FiGitPullRequest,
      },
    ],
  },
];


const getPullRequestStatus = (pullRequest) => {
  if (pullRequest.merged_at) {
    return {
      label: "Merged",
      icon: FiGitMerge,
      className:
        "text-purple-300 bg-purple-500/10 border-purple-500/20",
    };
  }

  if (pullRequest.state === "open") {
    return {
      label: "Open",
      icon: FiGitPullRequest,
      className:
        "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    };
  }

  return {
    label: "Closed",
    icon: FiCheckCircle,
    className: "text-rose-300 bg-rose-500/10 border-rose-500/20",
  };
};


const ContributionCard = ({ contribution, index }) => {
  const [expanded, setExpanded] = useState(false);
  const StatusIcon = contribution.status.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative rounded-xl border border-slate-700/80 bg-slate-900/60 hover:border-sky-500/40 transition-colors duration-300 overflow-hidden"
    >
      <div className="p-6 sm:p-8 md:p-10">
        {/* Repository and status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-lg border border-slate-700 bg-slate-800/70">
              <FiGithub className="w-5 h-5 text-slate-300" />
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                Open Source Repository
              </p>
              <p className="text-sm text-slate-300 break-all">
                {contribution.repository}
              </p>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border ${contribution.status.className}`}
          >
            <StatusIcon className="w-3.5 h-3.5" />
            {contribution.status.label}
          </span>
        </div>

        {/* Category */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400">
            <FiZap className="w-3.5 h-3.5" />
            {contribution.category}
          </span>

          <span className="text-slate-700">/</span>

          <span className="text-xs text-slate-500">
            Pull Request #{contribution.number}
          </span>
        </div>

        {/* Project title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {contribution.projectName}
        </h3>

        {/* Summary */}
        <p className="text-slate-400 leading-relaxed max-w-3xl mb-7">
          {contribution.summary}
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-9">
          {contribution.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs text-slate-300 bg-slate-800/70 border border-slate-700/70 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Contribution highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {contribution.highlights.map((highlight) => {
            const HighlightIcon = highlight.icon;

            return (
              <div
                key={highlight.label}
                className="flex items-center gap-3 p-4 rounded-lg border border-slate-700/60 bg-[#020617]/40"
              >
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <HighlightIcon className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    {highlight.label}
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    {highlight.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand/collapse button */}
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          aria-controls={`contribution-details-${contribution.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
        >
          <FiCode className="w-4 h-4" />

          {expanded
            ? "Hide contribution details"
            : "Read full contribution"}

          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Expanded case study */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`contribution-details-${contribution.id}`}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-slate-700/70">
                <span className="inline-block mb-4 text-xs uppercase tracking-widest text-sky-400">
                  Contribution Breakdown
                </span>

                <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
                  What I worked on
                </h4>

                {/* Contribution description */}
                <div className="space-y-5 max-w-3xl">
                  {[
                    ...contribution.paragraphs,
                    contribution.status.label === "Merged"
                      ? contribution.mergedText
                      : contribution.reviewText,
                  ]
                    .filter(Boolean)
                    .map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-slate-400 leading-7"
                      >
                        {paragraph
                          .split(/(\*\*.*?\*\*)/g)
                          .map((part, j) =>
                            part.startsWith("**") &&
                            part.endsWith("**") ? (
                              <strong
                                key={j}
                                className="font-semibold text-slate-200"
                              >
                                {part.slice(2, -2)}
                              </strong>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                      </p>
                    ))}

                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    View Pull Request #{contribution.number}
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-8 text-sm text-slate-300">
                  <FiCheck className="w-4 h-4 text-sky-400" />
                  <span>
                    Tested and submitted through GitHub.
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pt-7 mt-9 border-t border-slate-700/70">
          {/* Date and PR title */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 min-w-0">
            <span>
              {new Date(contribution.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>

            <span className="text-slate-700">·</span>

            <span className="truncate max-w-[240px]">
              {contribution.title}
            </span>
          </div>

          {/* GitHub links */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-500 text-black text-sm font-medium rounded-lg hover:bg-sky-400 transition-colors"
            >
              View Pull Request
              <FiExternalLink className="w-4 h-4" />
            </a>

            {contribution.issueUrl && (
              <a
                href={contribution.issueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors"
              >
                View Issue
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};


const OpenSourceContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(false);

        const results = await Promise.all(
          APPROVED_CONTRIBUTIONS.map(async (contribution) => {
            const { owner, repo, prNumber } = contribution;

            const response = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}`,
              {
                signal: controller.signal,
                headers: {
                  Accept: "application/vnd.github+json",
                },
              }
            );

            if (!response.ok) {
              throw new Error(`GitHub API error: ${response.status}`);
            }

            const pullRequest = await response.json();

            if (
              pullRequest.user?.login?.toLowerCase() !==
              GITHUB_USERNAME.toLowerCase()
            ) {
              return null;
            }

            return {
              ...contribution,
              id: pullRequest.id,
              repository: `${owner}/${repo}`,
              title: pullRequest.title,
              number: pullRequest.number,
              url: pullRequest.html_url,
              createdAt: pullRequest.created_at,
              status: getPullRequestStatus(pullRequest),
            };
          })
        );

        if (!controller.signal.aborted) {
          setContributions(results.filter(Boolean));
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(
            "Failed to fetch open source contributions:",
            err
          );
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchContributions();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="open-source"
      className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/80 to-[#020617]/90 pointer-events-none" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_40%,rgba(56,189,248,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block mb-5 text-xs uppercase tracking-widest text-sky-400">
            Collaboration · Open Source · GitHub
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Open Source
            <br />
            Contributions.
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Building software isn't just about working on my own projects.
            I also contribute to existing codebases, collaborate with other
            developers, and work on improvements that benefit real users.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div
            className="flex items-center gap-3 text-slate-400"
            role="status"
          >
            <div className="w-5 h-5 rounded-full border-2 border-slate-700 border-t-sky-400 animate-spin" />
            <span>Loading contributions from GitHub...</span>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex items-center gap-3 p-6 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-400">
            <FiAlertCircle className="w-5 h-5 text-sky-400 shrink-0" />
            <p>
              Contributions couldn't be loaded right now. Please try
              again later.
            </p>
          </div>
        )}

        {/* Contribution cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 max-w-5xl">
            {contributions.map((contribution, index) => (
              <ContributionCard
                key={contribution.id}
                contribution={contribution}
                index={index}
              />
            ))}

            {contributions.length === 0 && (
              <p className="text-slate-400">
                No approved contributions are available yet.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenSourceContributions;

