import { VideoIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="Quran Videos Generator logo"
          width={180}
          height={180}
          priority
        />

        <ol className={styles.instructions}>
          <li>
            Click <code>Generate</code> to get started.
          </li>
          <li>Wait a moment, and your video will appear.</li>
        </ol>

        <div className={styles.ctas}>
          <Link
            href="/new"
            className={styles.primary}
            aria-label="Generate a new video"
          >
            <VideoIcon size={20} />
            <span>Generate now</span>
          </Link>

          <Link
            href="/watch"
            className={styles.secondary}
            aria-label="Watch generated videos"
          >
            Watch Videos
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://alquran.cloud"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit alquran.cloud"
        >
          <GlobeIcon size={16} />
          <span>Go to alquran.cloud →</span>
        </a>
      </footer>
    </div>
  );
}
