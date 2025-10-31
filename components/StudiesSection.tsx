import Image from "next/image";
import Link from "next/link";
import "../styles/studies.css";

export default function StudiesSection() {
  return (
    <section className="studies-section">

      {/* === Undergraduate Studies (Image Left) === */}
      <div className="study-block left-image">
        <div className="study-image">
          <Image
            src="/photo-for-screen-3.jpg"
            alt="Undergraduate Biology students working in greenhouse"
            fill
            className="study-img"
            priority
          />
        </div>

        <div className="study-text">
          <h2 className="study-heading">Undergraduate Studies</h2>
          <h3 className="study-subheading">Find Your Path</h3>
          <p className="study-description">
            Our students gain a deep and well-rounded understanding of the living
            world—from molecules to ecosystems. Building on this base knowledge,
            our students specialize in their degree options preparing them for
            careers in diverse fields including health and veterinary care,
            environmental and conservation biology, and plant biology. We&apos;re here
            to help you discover where biology can take you.
          </p>
          <Link
            href="https://www.wm.edu/as/biology/undergraduate/"
            target="_blank"
            className="study-btn"
          >
            START YOUR JOURNEY
          </Link>
        </div>
      </div>

      {/* === Graduate Studies (Image Right) === */}
      <div className="study-block right-image">
        <div className="study-image">
          <Image
            src="/bio-grad-picnic2017.jpg"
            alt="Graduate biology students in research field"
            fill
            className="study-img"
          />
        </div>

        <div className="study-text">
          <h2 className="study-heading">Graduate Studies</h2>
          <h3 className="study-subheading">Deepen Your Expertise</h3>
          <p className="study-description">
            We offer M.S. and Ph.D. degrees in both Integrative Biology and Plant
            Biology, with opportunities to conduct cutting-edge research across a
            broad range of fields. Our programs emphasize close mentorship,
            interdisciplinary collaboration, and strong professional support to
            help you grow as a scientist and scholar.
          </p>
          <Link
            href="https://www.wm.edu/as/biology/graduate/"
            target="_blank"
            className="study-btn"
          >
            COME STUDY WITH US
          </Link>
        </div>
      </div>

    </section>
  );
}
