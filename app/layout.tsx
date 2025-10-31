import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/impact-section.css";
import "../styles/news-events.css";
import "../styles/join-us.css";
import "../styles/scholarships.css"
import "../styles/studies.css"
import "../styles/study-biology.css"
import "../styles/biology-hero.css"
import "../styles/header.css"

import Footer from "../components/Footer";
import ImpactSection from "../components/ImpactSection";
import NewsEventsSection from "../components/NewsEventsSection";
import JoinUsSection from "@/components/JoinUsSection";
import ScholarshipsSection from "@/components/ScholarshipsSection";
import StudiesSection from "@/components/StudiesSection";
import StudyBiologySection from "@/components/StudyBiologySection";
import BiologyHeroSection from "@/components/BiologyHeroSection";
import Header from "@/components/Header";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-K5dG1bqHkKTqDGHx4mRvQbH5b6nFGxUeG5QwnFrpoF2XJ4b+Lv0ZKsyK4N+wFClsgzX0a7Xjv2g+AMY7dYBv3A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="bg-[#115740] text-[#D0D3D4] overflow-x-hidden overflow-y-auto">
        {/* === Full scrollable page === */}
        <main>
          {children}
          <Header/>
          <BiologyHeroSection/>
          <StudyBiologySection/>
          <StudiesSection/>
          <ScholarshipsSection/>
          <JoinUsSection/>
           <NewsEventsSection />
          <ImpactSection />
          <Footer />
        </main>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
