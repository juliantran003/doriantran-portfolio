// Imports
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavButton({ to, title, onClick, style }) {
  // Router
  const router = useRouter();

  return (
    <Link href={to} passHref>
      <button
        className={`nav-button ${router.pathname === to && "nav-selected"}`}
        onClick={onClick}
        content={title}
      >
        {title}
      </button>
    </Link>
  );
}
