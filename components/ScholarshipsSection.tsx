import Image from "next/image";
import Link from "next/link";
import "../styles/scholarships.css";

export default function ScholarshipsSection() {
  return (
    <section className="scholarships-section">
      {/* === Left Full Image === */}
      <div className="scholarship-image">
        <Image
          src="/graves-2-women.jpg"
          alt="Student researching plant biology"
          fill
          className="scholar-img"
          priority
        />
      </div>

      {/* === Right Content === */}
      <div className="scholarship-text">
        <h2 className="scholarship-heading">Scholarships</h2>
        <h3 className="scholarship-subheading">Opportunities for Support</h3>
        <p className="scholarship-description">
          Explore scholarship opportunities designed to support your academic
          journey in Biology. Whether you&apos;re an incoming student, a current
          undergraduate, or preparing for graduate studies, you&apos;ll find a range
          of scholarships tailored to your goals.
        </p>

        <Link
          href="https://www.wm.edu/as/biology/undergraduate/scholarships/"
          target="_blank"
          className="scholarship-btn"
        >
          VIEW SCHOLARSHIPS
        </Link>
      </div>
    </section>
  );
}
