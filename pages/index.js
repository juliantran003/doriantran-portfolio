// Imports
import Meta from "../components/Meta";
import Image from "next/image";
import profile from "../public/profile.jpg";
import LinkButton from "../components/buttons/LinkButton";

export default function Home() {
  return (
    <div>
      <Meta
        title="Dorian Tran - Sound Recordist"
        description="Sound Recordist based in London with full kit."
      />
      <div className="page-container home">
        <h1 className="home-title">
          Dorian Tran <span>London-based Sound Recordist</span>
        </h1>
        <div className="home-image" data-aos="fade-in">
          <Image src={profile} layout="fill" objectFit="cover" alt={profile} />
        </div>

        <LinkButton to="/work" title="Discover my work" />
      </div>
    </div>
  );
}
