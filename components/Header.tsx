"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* === Top Header === */}
      <header className="wm-header">
        <div className="wm-header-inner">
          <Image
            src="/wm_full_horizontal.svg"
            alt="William & Mary Logo"
            width={260}
            height={60}
            priority
          />

          {/* Menu Button */}
          <button
            className="wm-menu-btn"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="menu-text">W&M MENU</span>
            <div className="menu-icons">
              <Image
                src="/menu-mag.svg"
                alt="Menu and Search Icon"
                width={38}
                height={38}
                className="menu-mag"
                priority
              />
            </div>
          </button>
        </div>
      </header>

      {/* === Slide-out Navigation === */}
      <aside className={`side-nav ${menuOpen ? "open" : ""}`}>
        <div className="side-nav-left">
          <Image
            src="/wm-menu-banner.svg"
            alt="William & Mary Banner"
            width={260}
            height={600}
            className="side-banner"
          />
          <div className="resources-list">
            <h4>Resources For...</h4>
            <ul>
              <li>Current Students</li>
              <li>Faculty & Staff</li>
              <li>Parents & Families</li>
              <li>Alumni & Friends</li>
            </ul>
          </div>
        </div>

        <div className="side-nav-right">
          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>

          <nav className="side-links">
            <Link href="#">Arts & Sciences Biology</Link>
            <Link href="#">Biology Department</Link>
            <Link href="#">Program Overview</Link>
            <Link href="#">About</Link>
            <Link href="#">Undergraduate Program</Link>
            <Link href="#">Graduate Program</Link>
            <Link href="#">People</Link>
            <Link href="#">Research</Link>
            <Link href="#">For Current Students</Link>
            <Link href="#">Seminar</Link>
            <Link href="#">Campus Tour of Woody Species</Link>
            <Link href="#">News</Link>
            <Link href="#">Alumni & Friends</Link>
            <Link href="#">Support Biology</Link>
          </nav>

          <div className="side-bottom">
            <Image 
  src="/wm_horizontal_single_line_black.png"
  alt="W&M logo"
  width={200}
  height={60}
  priority
/>

          </div>
        </div>
      </aside>

      {/* === Dim Background Overlay === */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
