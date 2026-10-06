import Link from "next/link";
import styles from "./version-switch.module.css";

type Version = "v1" | "v2" | "v3" | "v4";

const versions: { id: Version; label: string; href: string }[] = [
  { id: "v1", label: "01", href: "/" },
  { id: "v2", label: "02", href: "/v2" },
  { id: "v3", label: "03", href: "/v3" },
  { id: "v4", label: "04", href: "/v4" },
];

export default function VersionSwitch({ current }: { current: Version }) {
  return (
    <nav className={styles.switch} aria-label="Landing page versions">
      <span className={styles.title}>VIEW<br />VERSIONS</span>
      {versions.map((version) => version.id === current ? (
        <span className={`${styles.version} ${styles.active}`} aria-current="page" key={version.id}>{version.label}</span>
      ) : (
        <Link className={styles.version} href={version.href} aria-label={`View landing page version ${version.label}`} key={version.id}>{version.label}</Link>
      ))}
    </nav>
  );
}
