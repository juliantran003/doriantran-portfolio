// Imports
import NavButton from "./buttons/NavButton";
import nav from "../public/json/nav.json";

export default function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        {nav.map((button) => {
          return (
            <NavButton to={button.to} title={button.title} key={button.to} />
          );
        })}
      </nav>
    </div>
  );
}
