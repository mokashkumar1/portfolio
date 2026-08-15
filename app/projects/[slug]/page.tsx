import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const supportedSlug = "muet-cs-results-portal";

export function generateStaticParams() {
  return [{ slug: supportedSlug }];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== supportedSlug) notFound();
  const project = portfolioData.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-noise">
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-20">
        <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to selected projects
        </Link>

        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="section-kicker">Project case study</p>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{project.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" className="h-4 w-4" /> Source code</a>
            <a className="button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live application <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </header>

        <div className="case-study-copy">
          <section>
            <h2>Problem</h2>
            <p>{project.problem}</p>
            <p>Result sheets are difficult to search and compare. Students need a quick way to find semester history, while coordinators need a repeatable workflow for reviewing and publishing updates.</p>
          </section>

          <section>
            <h2>What I built</h2>
            <p>{project.contribution}</p>
            <ul>
              <li>A CSV compiler that validates records and generates a browser-readable data bundle.</li>
              <li>Roll-number lookup, semester history, batch statistics, and deterministic dense rankings.</li>
              <li>Build scripts for department pages, ranking pages, and the sitemap.</li>
              <li>An authenticated coordinator flow with optional OCR assistance and a review step before saving.</li>
            </ul>
          </section>

          <section>
            <h2>Core decisions</h2>
            <ul>
              <li>The public search experience stays static and client-side, so it can run without a database.</li>
              <li>Equal CGPAs rounded to two decimal places receive the same dense rank.</li>
              <li>The compiler rejects GPAs outside 0-4 and duplicate student records within a batch.</li>
              <li>The public repository uses synthetic demonstration data and is not an official academic record.</li>
            </ul>
          </section>

          <section>
            <h2>Testing</h2>
            <p>Focused tests cover grade boundaries, published-semester GPA behavior, dense ranking, batch statistics, CSV compilation, invalid values, duplicates, request validation, and authentication helpers.</p>
          </section>

          <section>
            <h2>Limitations</h2>
            <ul>
              <li>OCR output can be wrong and must be reviewed before publication.</li>
              <li>GitHub-backed CSV writes suit this demonstration workflow, not a general transactional system.</li>
              <li>The simple CSV parser does not support quoted fields containing commas.</li>
              <li>Adopters must define their own privacy, retention, authorization, and audit requirements.</li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
