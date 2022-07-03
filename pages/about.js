// Import
import Meta from "../components/Meta";
import Image from "next/image";
import profile from "../public/profile.jpg";

export default function About() {
  return (
    <div>
      <Meta
        title="Dorian Tran - About"
        description="I’m a freelance location sound recordist specialising in artistic, corporate, commercial and documentary film production based in London. 

My knowledge and skills came first through a number of years producing music alongside studying film at King’s College London. Later I took part in NFTS’s Location Recording course in 2019.

Since, I have worked in partnership with names such as Nike, The Face, Doc Martens alongside small to medium sized film productions. 

Whether in studio or on location, I have worked in a variety of environments that offer an array of challenges in order for me to capture the best sound possible in any given circumstances. 

My skillset also applies to post-production work when it comes to audio restoration, enhancement or correction. 

Through my years of music-making, I tend to sound mixing as well which can simplify the process for production houses as I can take on the audio side entirely. 

As of late, I have started collaborating with visual artists to write sound pieces for installations and exhibitions. 

I seek to explore collaboration in any form and to pursue working with sound in any capacity."
      />
      <main className="page-container about">
        {/* <p>
          I’m a freelance location sound recordist specialising in artistic,
          corporate, commercial and documentary film production based in London.
        </p>
        <div className="about-image">
          <Image src={profile} layout="fill" objectFit="cover" />
        </div> */}
        <p>
          I’m a freelance location sound recordist specialising in artistic,
          corporate, commercial and documentary film production based in London.
          <br />
          <br />
          My knowledge and skills came first through a number of years producing
          music alongside studying film at King’s College London. Later I took
          part in NFTS’s Location Recording course in 2019. <br />
          Since, I have worked in partnership with names such as Nike, The Face,
          Doc Martens alongside small to medium sized film productions. Whether
          in studio or on location, I have worked in a variety of environments
          that offer an array of challenges in order for me to capture the best
          sound possible in any given circumstances. <br />
          My skillset also applies to post-production work when it comes to
          audio restoration, enhancement or correction. <br />
          Through my years of music-making, I tend to sound mixing as well which
          can simplify the process for production houses as I can take on the
          audio side entirely. <br />
          <br />
          As of late, I have started collaborating with visual artists to write
          sound pieces for installations and exhibitions. <br /> I seek to
          explore collaboration in any form and to pursue working with sound in
          any capacity.
        </p>
      </main>
    </div>
  );
}
