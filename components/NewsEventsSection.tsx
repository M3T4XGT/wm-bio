import Image from "next/image";
import Link from "next/link";
import "../styles/news-events.css";

export default function NewsEventsSection() {
  return (
    <section className="wm-news-events">
      <div className="wm-container">
        {/* === News Column === */}
        <div className="news-column">
          <div className="section-header">
            <h2 className="section-title">News</h2>
            <Link
              href="https://www.wm.edu/news/index.php"
              target="_blank"
              className="view-all-btn"
            >
              ALL NEWS
            </Link>
          </div>

          <div className="news-grid">
            {/* --- News 1 --- */}
            <div className="news-card">
              <Image
                src="/owl-story-cover-photo.jpg"
                alt="On the prowl for owls"
                width={300}
                height={200}
                className="news-img"
              />
              <div className="news-text">
                <Link
                  href="https://www.wm.edu/news/stories/2025/on-the-prowl-for-owls.php"
                  target="_blank"
                  className="news-link"
                >
                  On the prowl for owls
                </Link>
                <p>
                  William & Mary researchers investigate how the barred owl is
                  adapting to urbanization.
                </p>
                <span className="date">Oct 28</span>
              </div>
            </div>

            {/* --- News 2 --- */}
            <div className="news-card">
              <Image
                src="/zac-elmore.png"
                alt="Biology Seminar Series"
                width={300}
                height={200}
                className="news-img"
              />
              <div className="news-text">
                <Link
                  href="https://www.wm.edu/news/stories/2025/biology-seminar-zac-elmore.php"
                  target="_blank"
                  className="news-link"
                >
                  Biology Seminar Series welcomes back Dr. Zac Elmore for
                  Homecoming Weekend
                </Link>
                <p>
                  The Department hosts a special seminar on engineered enzymes in
                  gene therapy and transplantation.
                </p>
                <span className="date">Oct 16</span>
              </div>
            </div>

            {/* --- News 3 --- */}
            <div className="news-card">
              <Image
                src="/student-scope.jpg"
                alt="Student research spotlight"
                width={300}
                height={200}
                className="news-img"
              />
              <div className="news-text">
                <Link
                  href="https://www.wm.edu/news/stories/2025/blast-off-wm-stem-program.php"
                  target="_blank"
                  className="news-link"
                >
                  BLAST off: W&M launches passion for STEM in Virginia high school students
                </Link>
                <p>
                  Ninth and tenth grade students sampled a variety of hands-on STEM activities during their four-day stay.
                </p>
                <span className="date">Oct 10</span>
              </div>
            </div>

            {/* --- News 4 --- */}
            <div className="news-card">
              <Image
                src="/original.jpeg"
                alt="Bats research"
                width={300}
                height={200}
                className="news-img"
              />
              <div className="news-text">
                <Link
                  href="https://www.wm.edu/news/stories/2025/not-so-spooky-bats-beneficial.php"
                  target="_blank"
                  className="news-link"
                >
                  Not so spooky: Bats are beneficial – and they’re in trouble
                </Link>
                <p>
                  A W&M visiting professor and undergraduate researchers are actively aiding bat conservation efforts.
                </p>
                <span className="date">Sep 28</span>
              </div>
            </div>
          </div>
        </div>

        {/* === Events Column === */}
        <div className="events-column">
          <div className="section-header">
            <h2 className="section-title">Events</h2>
            <Link
              href="https://www.wm.edu/events/index.php"
              target="_blank"
              className="view-all-btn"
            >
              VIEW ALL
            </Link>
          </div>

          <ul className="event-list">
            <li>
              <Link
                href="https://www.wm.edu/biology/events/advising"
                target="_blank"
                className="event-link"
              >
                Advising Period
              </Link>
              <p>Monday, October 20 – Friday, October 31</p>
            </li>
            <li>
              <Link
                href="https://www.wm.edu/registration/spring2026"
                target="_blank"
                className="event-link"
              >
                Spring 2026 Registration Begins for Continuing Students
              </Link>
              <p>Monday, November 3</p>
            </li>
            <li>
              <Link
                href="https://www.wm.edu/events/electionday"
                target="_blank"
                className="event-link"
              >
                Election Day (Offices Closed, No Classes)
              </Link>
              <p>Tuesday, November 4</p>
            </li>
          </ul>

          {/* === Embedded YouTube Videos with Descriptions === */}
          <div className="video-wrapper">
            {/* --- Video 1 --- */}
            <div className="video-item">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/LCnbHP_83nM"
                  title="William & Mary Research Video 1"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-desc">
                Professors Jonathan Allen and Matthias Leu lead students to
                Washington to study fear responses in tidal species.
              </p>
            </div>

            {/* --- Video 2 --- */}
            <div className="video-item">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/6K6FNz-JNFU"
                  title="William & Mary Research Video 2"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-desc">
                Understanding bird behavior and sound response drives new
                technologies and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
