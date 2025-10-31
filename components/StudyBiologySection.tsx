import Image from "next/image";
import Link from "next/link";
import "../styles/study-biology.css";

export default function StudyBiologySection() {
  return (
    <section className="study-biology-section">
      <div className="study-bio-text">
        <h2 className="study-bio-heading">Study Biology at William &amp; Mary</h2>
        <p className="study-bio-description">
          The Department of Biology offers students the opportunity to explore the living world. 
          Knowledge of biology is essential for addressing critical medical, environmental, and social challenges. 
          Our faculty and staff work closely with students in the classroom, in our research labs, and beyond — 
          creating a collaborative and supportive environment where you can thrive. 
          We offer undergraduate and graduate degrees that will prepare you for further education 
          and a variety of science-focused career paths.
        </p>

        <Link
          href="https://www.wm.edu/as/biology/faculty/"
          target="_blank"
          className="study-bio-btn"
        >
          MEET OUR FACULTY
        </Link>
      </div>

      <div className="study-bio-image">
        <Image
          src="/isc1.jpg"
          alt="Biology students working in the lab"
          fill
          className="bio-img"
          priority
        />
      </div>
    </section>
  );
}
