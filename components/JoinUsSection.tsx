import Image from "next/image";
import Link from "next/link";
import "../styles/join-us.css";

export default function JoinUsSection() {
  return (
    <section className="join-us-section">
      <div className="join-us-container">
        {/* === Left Column (Text) === */}
        <div className="join-text">
          <h2 className="join-heading">Join Us in Shaping the Future</h2>
          <p className="join-description">
            The Department of Biology strives for excellence in basic and applied
            research and instruction in the broad, comprehensive field of biology.
            The department currently has 37 full-time faculty members, 90 graduate
            students in Integrative Biology and Plant Biology, and over 900
            undergraduates in Biology, Zoology, Plant Biology, and Physiology —
            including degree options in pre-vet, premed, allied health,
            pre-pharmacy, environmental biology, and conservation biology.
          </p>

          <Link
            href="https://www.wm.edu/biology/about/"
            target="_blank"
            className="join-btn"
          >
            ABOUT US
          </Link>
        </div>

        {/* === Right Column (Image) === */}
        <div className="join-image">
          <Image
            src="/carolina-chickadee.jpeg"
            alt="chicadee in hands"
            width={700}
            height={450}
            className="lab-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
