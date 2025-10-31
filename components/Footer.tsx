import Image from "next/image";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="wm-footer">
      {/* === Top Section === */}
      <div className="footer-top">
        {/* --- Left: College Info --- */}
        <div className="footer-left">
          <h2 className="college-title">COLLEGE OF ARTS & SCIENCES</h2>
          <div className="left-block">
            <Image
              src="/muscarelle-nighttime-expansion.jpg"
              alt="William & Mary Building"
              width={500}
              height={500}
              className="wm-square-img"
            />
            <div className="dept-info">
              <p className="dept-title">William & Mary</p>
              <p>
                Biology Department<br />
                P.O. Box 8795<br />
                Williamsburg, VA 23187{" "}
                (<a
                  href="https://www.wm.edu/about/visiting/campusmap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  map
                </a>)
              </p>
              <p>
                <a href="tel:7572215433" className="dept-phone">
                  757-221-5433
                </a>{" "}
                |{" "}
                <a
                  href="mailto:biology@wm.edu"
                  className="dept-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* --- Center: Resource Columns --- */}
        <div className="footer-center">
          <div className="footer-columns">
            <div>
              <h3>Resources for</h3>
              <ul>
                <li><a href="https://www.wm.edu/students/">Current Students</a></li>
                <li><a href="https://www.wm.edu/offices/it/forfacultyandstaff/">Faculty & Staff</a></li>
                <li><a href="https://www.wm.edu/parentsfamilies/">Parents & Families</a></li>
                <li><a href="https://www.wmalumni.com/">Alumni & Friends</a></li>
              </ul>
            </div>

            <div>
              <h3>Discover</h3>
              <ul>
                <li><a href="https://www.wm.edu/admission/">Admission & Aid</a></li>
                <li><a href="https://www.wm.edu/academics/">Academics</a></li>
                <li><a href="https://www.wm.edu/studentlife/">Student Life</a></li>
                <li><a href="https://www.wm.edu/research/">Research</a></li>
                <li><a href="https://www.wm.edu/about/">About</a></li>
                <li><a href="https://www.wm.edu/news/">News</a></li>
              </ul>
            </div>

            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="https://www.wm.edu/search/">Search W&M</a></li>
                <li><a href="https://www.wm.edu/a-z/">W&M A–Z</a></li>
                <li><a href="https://www.wm.edu/offices/career/employers/">Employers</a></li>
                <li><a href="https://www.wm.edu/offices/uhr/careers/">Careers at W&M</a></li>
                <li><a href="https://www.wm.edu/emergency/">Emergency</a></li>
                <li><a href="https://www.wm.edu/offices/compliance/reportconcerns/">Report Concerns</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Right: Follow Us --- */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <p className="links">
            <a href="https://www.wm.edu/news/index.php" target="_blank" rel="noopener noreferrer">News</a> |
            <a href="https://www.wm.edu/news/events/" target="_blank" rel="noopener noreferrer">Events</a> |
            <a href="https://www.wm.edu/news/newsletters/" target="_blank" rel="noopener noreferrer">Newsletter Sign-Up</a><br />
            <a href="https://www.wm.edu/social/" target="_blank" rel="noopener noreferrer">Social Media Directory</a>
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/williamandmary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com/wmnews" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/william_and_mary/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/school/william-and-mary/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/user/WilliamandMary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Section (Final William & Mary Layout) === */}
      <div className="footer-bottom">
        <div className="footer-left-block">
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 17"
          >
            <path d="M14.337 16.746l1.858-1.858L4.691 3.384l10.575-.045V.685H.134v15.132l2.699.044V5.242z" />
          </svg>
          <Image
            src="/wm_vertical_single_line.svg"
            alt="William & Mary Logo"
            width={120}
            height={60}
            className="wm-bottom-logo"
          />
          <div style={{ display: 'block' }}>
  <p style={{ display: 'block', margin: 0 }} className="wm-subtitle">
    The College of William & Mary
  </p>
  <p style={{ display: 'block', margin: 0 }} className="copyright">
    © 2025 William & Mary. All rights reserved.
  </p>
</div>


        </div>

        

        <div className="footer-right-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  
  <div className="top-links" style={{ marginBottom: '8px' }}>
    <a href="https://www.wm.edu/about/visiting/campusmap/">Campus & Parking Maps</a> |
    <a href="https://www.wm.edu/">All WM Institutions</a> |
    <a href="https://www.wm.edu/offices/uhr/careers/">Careers @ WM</a> |
    <a href="https://www.wm.edu/offices/career/employers/connect-with-students/oncampus-recruiting/">Hire WM Grads</a>
  </div>

  <div className="footer-links" style={{ marginBottom: '8px' }}>
    <a href="https://www.wm.edu/offices/studentsuccess/studentaccessibilityservices/">Accessibility Services</a> |
    <a href="https://www.wm.edu/offices/police/">Campus Safety</a> |
    <a href="https://www.wm.edu/offices/ce/equity/accessibility-at-wm/">Access & Community Impact</a> |
    <a href="https://www.wm.edu/offices/ce/compliance/nondiscrimination-notice/">EEO Statement</a> |
    <a href="https://www.wm.edu/offices/ce/">Ethics Point</a> |
    <a href="https://www.wm.edu/aboutthissite/privacy/">Privacy Notice</a> |
    {/* <a href="https://onenetwork.wm.edu/terms-of-use">Terms of Service</a> |
    <a href="https://www.wm.edu/offices/universityrelations/brandcenter/trademarksandlicensing/">Trademarks</a> */}
  </div>

</div>
      </div>
    </footer>
  );
}
