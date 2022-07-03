// Imports
import Meta from "../components/Meta";
import work from "../public/json/work.json";
import LinkButton from "../components/buttons/LinkButton";
import Link from "next/link";

export default function Work() {
  return (
    <div>
      <Meta
        title="Dorian Tran - Work"
        description="A presentation of my portfolio as a sound rcordist & sound mixer/engineer"
      />
      <div className="page-container work">
        {work.map((work) => {
          return (
            <div className="work-list-container" key={work.title}>
              <div className="left">
                <h1>{work.title}</h1>
                <h2>{work.client}</h2>
                <p>{work.description}</p>
              </div>
              <div className="right">
                <h3>{work.date}</h3>
                <a
                  href={work.url}
                  target="_blank"
                  className="link-button"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
