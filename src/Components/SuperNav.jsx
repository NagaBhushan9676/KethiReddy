import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/kethireddy.png";

const SuperNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let timeoutId;
  
    const handleScroll = () => {
      clearTimeout(timeoutId);
  
      const shouldBeSticky = window.scrollY > 10;
  
      if (shouldBeSticky && !isSticky) {
        setIsAnimating(true);
      }
  
      timeoutId = setTimeout(() => {
        setIsSticky(shouldBeSticky);
        setIsAnimating(false);
      }, 100); // Reduced timeout to make it smoother
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isSticky]);
  

  return (
    
    <nav className={`navbar ${isSticky ? "sticky" : ""} ${isAnimating ? "animating" : ""}`}  ref={timeoutRef}>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
        <li className="link"><Link to='/'>Home</Link></li>
        <li className="link"> <Link to='/projects'>Projects</Link></li>
        <li className="link"> <Link to='/services'>Services</Link></li>
        <li className="link"><a href="#">Contact Us</a></li>
      </ul>
      {/* <div className="search">
        <input type="text" placeholder="Search" />
        <span><i className="ri-search-line"></i></span>
      </div> */}
      {/* <div className="login">
        <span><i className="ri-user-3-fill"></i></span>
        Log In
      </div> */}
      <button onClick={() => setIsDrawerOpen(true)} >
          <Menu size={32} className=" menu_button " />
        </button> 



      <div className={`fixed z-40 top-0 right-0  h-full w-64 bg-green-800 p-4 shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button onClick={() => setIsDrawerOpen(false)} className="mb-4 p-2 text-white">
          <X size={32} />
        </button>

        {/* Drawer Menu Items */}
        <ul className="space-y-4 text-white">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Projects</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Services</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Overlay (Backdrop) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-green opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
         
    </nav>
  );
};

export default SuperNav;




















// import React, { useEffect, useRef, useState } from "react";
// import logo from "../assets/kethireddy.png";

// const SuperNav = () => {
//   const navbarRef = useRef(null);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 10); // Adjust the threshold if needed

//       setTimeout(() => {
//         setIsSticky(window.scrollY);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <nav className={`navbar ${isSticky ? "sticky" : "nonSticky"}`} ref={navbarRef}>
//         <div className="nav__logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <ul className="nav__links">
//           <li className="link"><a href="#">Home</a></li>
//           <li className="link"><a href="#">Destinations</a></li>
//           <li className="link"><a href="#">Contact Us</a></li>
//           <li className="link"><a href="#">Blog</a></li>
//         </ul>
//         <div className="search">
//           <input type="text" placeholder="Search" />
//           <span><i className="ri-search-line"></i></span>
//         </div>
//         <div className="login">
//           <span><i className="ri-user-3-fill"></i></span>
//           Log In
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default SuperNav;
