import Image from "next/image";
import "../styles/biology-hero.css";

export default function BiologyHeroSection() {
  return (
    <section className="biology-hero">
      <div className="hero-image">
        <Image
          src="/v2_avocets.jpg"
          alt="Students working in biology lab"
          fill
          priority
          className="hero-img"
        />
      </div>

      <div className="hero-overlay-wrapper">
        <div className="hero-overlay">
          <h1 className="hero-title">DEPARTMENT OF BIOLOGY</h1>
        </div>
      </div>
    </section>
  );
}
