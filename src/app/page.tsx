import { Video, Globe, Bug } from "lucide-react";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const references = [
  {
    href: "https://github.com/moehabsas/quran-videos-generator/issues/new",
    text: "Report for Issues",
    Icon: Bug,
  },
  {
    href: "https://alquran.cloud",
    text: "Go to alquran.cloud →",
    Icon: Globe,
  },
] as const;

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-between gap-15 min-h-svh p-9 sm:p-15">
      {/* Header space - for future use */}
      <header />

      {/* Main content section */}
      <main className="flex flex-col justify-center max-sm:items-center gap-9">
        {/* Application logo */}
        <Image
          src="/images/logo.png"
          alt="Quran Videos Generator logo"
          className="dark:invert"
          width={180}
          height={180}
          priority
        />

        {/* Instructions list */}
        <ol className="list-inside list-decimal space-y-2 font-mono text-sm max-sm:text-center">
          <li>
            Click{" "}
            <code className="rounded bg-secondary/70 px-1 py-0.5 font-mono font-semibold">
              Generate
            </code>{" "}
            to get started.
          </li>
          <li>Access your videos in the dashboard.</li>
        </ol>

        {/* Actions buttons */}
        <div className="flex gap-4 max-sm:flex-col">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/new">
              <Video />
              Generate now
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full sm:min-w-35"
            asChild
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </main>

      {/* Footer with external links */}
      <footer className="flex flex-wrap items-center justify-center gap-4">
        {references.map(({ href, text, Icon }) => (
          <Button key={href} variant="link" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
              {text}
            </a>
          </Button>
        ))}
      </footer>
    </div>
  );
}
