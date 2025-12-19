"use client";

/**
 * Page: Blog Post (Querystring)
 * Route: /blog/post?slug=...
 * File: app/blog/post/page.tsx
 */

import Link from "next/link";

type Post = {
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

const POSTS: Record<string, Post> = {
  "coverage-gaps-that-cost-real-money": {
    title: "Coverage gaps that cost real money",
    date: "2025-12-19",
    excerpt:
      "A quick framework for identifying gaps before they show up as denied claims.",
    body: [
      "Insurance problems rarely show up at purchase time. They show up during a claim—when words, exclusions, and coordination suddenly matter.",
      "If you want fewer surprises, start by mapping exposures, then confirm limits and underlying requirements across policies.",
      "When in doubt, simplify the structure and eliminate ambiguity. Complexity is fine—unexamined complexity is expensive.",
    ],
  },
  "why-umbrella-policies-fail": {
    title: "Why umbrella policies fail (and how to fix it)",
    date: "2025-12-19",
    excerpt:
      "Umbrella coverage is only as good as the underlying structure and coordination.",
    body: [
      "Umbrella policies don’t fix weak underlying coverage. They sit on top of it—and inherit its problems.",
      "Common failure points: missing underlying limits, inconsistent named insureds, exclusions that collide across policies, and misaligned exposure assumptions.",
      "Fix is structural: align underlying coverage first, then place umbrella/excess based on the true exposure map.",
    ],
  },
  "business-insurance-structure-not-just-quotes": {
    title: "Business insurance: structure, not just quotes",
    date: "2025-12-19",
    excerpt:
      "If you buy insurance like a commodity, you get commodity outcomes.",
    body: [
      "A quote is not a risk strategy. It’s a price on a set of assumptions—some of which may be wrong.",
      "Start with operations: contracts, locations, vehicles, payroll, and services delivered. Then structure coverage to match.",
      "Better structure reduces claim friction, closes gaps, and produces durable renewals.",
    ],
  },
};

function getSlugFromUrl(): string | null {
  const sp = new URLSearchParams(window.location.search);
  return sp.get("slug");
}

export default function BlogPostQueryPage() {
  const slug = getSlugFromUrl();
  const post = slug ? POSTS[slug] : null;

  if (!slug || !post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <p className="mt-4 text-gray-700">
          Missing or invalid <code className="font-semibold">slug</code>.
        </p>
        <div className="mt-6">
          <Link href="/blog" className="underline font-semibold">
            Back to Blog →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="mb-8">
        <div className="text-sm text-gray-500">{post.date}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-700">{post.excerpt}</p>
      </header>

      <article className="space-y-5 text-gray-800 leading-relaxed">
        {post.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-10">
        <Link href="/blog" className="underline font-semibold">
          Back to Blog →
        </Link>
      </div>
    </main>
  );
}
