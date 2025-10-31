import Image from "next/image";
import "../styles/impact-section.css";

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-inner">
        <div className="impact-left">
          <Image
            src="/grace-saunders.jpg"
            alt="Students conducting research"
            width={420}
            height={280}
            priority
          />
        </div>

        <div className="impact-center">
          <h2>Make an Impact!</h2>
          <p>
            Gifts to <strong>William &amp; Mary</strong> empower students,
            faculty, and research — shaping excellence for generations to come.
          </p>
        </div>

        <div className="impact-divider"></div>

        <div className="impact-right">
          <a
            href="https://giving.wm.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support Biology
          </a>
        </div>
      </div>
    </section>
  );
}
