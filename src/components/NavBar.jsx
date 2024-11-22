import React, { useState, useEffect } from "react";
import { Menubar } from 'primereact/menubar';
import "./Navbar.css";
import MenuDrawer from './MenuDrawer.jsx';
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);    

  const start = (
    <img
      alt="logo"
      src="https://qualitycorn.com/wp-content/uploads/2024/10/Quality-Corn.svg"
      height="100"
      className="mr-2"
    />
  );

  const end = (
    <div className="flex items-center gap-2 ml-auto w-300px">
          <MenuDrawer />
    </div>
  );

  return (
    <div className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}>
      <Menubar start={start} end={end} />
    </div>
  );
}
