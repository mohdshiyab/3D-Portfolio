import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";

import { ArchitectureDiagram } from "@/components/sub/architecture-diagram";
import { CASE_STUDIES } from "@/constants";

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} | Case Study`,
    description: study.tagline,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
    return null;
  }

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#b49bff] transition mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            🏥 {study.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
            {study.tagline}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={study.liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Live Demo
            </Link>
            <Link
              href={study.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-lg border border-[#2A0E61] px-4 py-2 text-sm text-white hover:bg-[#7042f81a] transition"
            >
              <RxGithubLogo className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-[#2A0E61] shadow-lg mb-12">
          <Image
            src={study.heroImage}
            alt={study.title}
            width={1400}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Overview</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {study.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12 rounded-xl border border-[#2A0E61] bg-[#7042f81a] p-5 sm:p-7">
          <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white mb-4">
            <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#b49bff]" />
            The Problem
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {study.problems.map((problem) => (
              <li
                key={problem}
                className="text-sm sm:text-base text-gray-300 flex items-start gap-2"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b49bff] shrink-0" />
                {problem}
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section className="mb-12 rounded-xl border border-[#2A0E61] bg-[#0ea5e91a] p-5 sm:p-7">
          <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white mb-3">
            <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
            Our Solution
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {study.solution}
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            System Architecture
          </h2>
          <ArchitectureDiagram steps={study.architecture} />
        </section>

        {/* My Contributions */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            My Contributions
          </h2>
          <p className="text-sm text-gray-400 mb-4">As a Full Stack Developer, I contributed to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {study.contributions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg border border-[#2A0E61] bg-[#03001480] p-3"
              >
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#b49bff] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Technical Challenges
          </h2>
          <div className="flex flex-col gap-4">
            {study.challenges.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-5 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {index + 1}. {item.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-gray-300">{item.challenge}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-gray-300">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-3 sm:p-4 text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(study.techStack).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-[#2A0E61] bg-[#0300145e] p-4"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(items as readonly string[]).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#7042f866] bg-[#7042f81a] px-3 py-1 text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition */}
        <section className="mb-12 rounded-xl border border-[#7042f866] bg-gradient-to-r from-[#7042f81a] to-[#0ea5e91a] p-5 sm:p-7 text-center">
          <h2 className="flex items-center justify-center gap-2 text-lg sm:text-xl font-bold text-white mb-2">
            <TrophyIcon className="h-5 w-5 text-[#b49bff]" />
            Startup Recognition
          </h2>
          <p className="text-sm sm:text-base text-gray-300">{study.recognition}</p>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {study.results.map((result) => (
              <div
                key={result}
                className="flex items-start gap-2 rounded-lg border border-[#2A0E61] bg-[#03001480] p-3"
              >
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Lessons Learned
          </h2>
          <ul className="flex flex-col gap-2">
            {study.lessons.map((lesson) => (
              <li
                key={lesson}
                className="text-sm sm:text-base text-gray-300 flex items-start gap-2"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b49bff] shrink-0" />
                {lesson}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-400 text-center max-w-xl">
            Curious to see it in action, or want to look at the code?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={study.liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Live Demo
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 rounded-lg border border-[#2A0E61] px-4 py-2 text-sm text-white hover:bg-[#7042f81a] transition"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
