// Imports
import Link from "next/link";

export default function LinkButton({ to, title, onClick }) {
  return (
    <Link href={to} passHref>
      <button className="link-button" onClick={onClick} content={title}>
        {title}
      </button>
    </Link>
  );
}
