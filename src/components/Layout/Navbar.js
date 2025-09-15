
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import { FaLaptopCode, FaMobileAlt, FaSearch, FaCode, FaPaintBrush, FaBullhorn, FaChartLine } from 'react-icons/fa';

// // Dummy image URLs (light & dark)
// const logoLight = 'https://dummyimage.com/160x40/4f46e5/ffffff&text=Forex+Trading';
// const logoDark = 'https://dummyimage.com/160x40/f1f5f9/4f46e5&text=Forex+Trading';

// export default function Header() {
//   const [isDark, setIsDark] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [subDropdownOpen, setSubDropdownOpen] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     if (document.documentElement.classList.contains('dark')) {
//       setIsDark(true);
//     }
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//         setSubDropdownOpen(null);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle('dark');
//     setIsDark(!isDark);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] shadow-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src={isDark ? logoDark : logoLight}
//             alt="Forex"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8 items-center font-semibold text-sm text-[var(--text-color)]">
//           <Link to="/" className="hover:text-[var(--accent)] transition">HOME</Link>
//           <Link to="/about" className="hover:text-[var(--accent)] transition">ABOUT US</Link>

//           {/* Dropdown */}
//           <div ref={dropdownRef} className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center hover:text-[var(--accent)] transition"
//             >
//               SERVICES <span className="ml-1">▾</span>
//             </button>
//             {dropdownOpen && (
//               <div className="absolute left-0 mt-2 bg-[var(--bg)] shadow-lg rounded-md w-64 py-2 animate-fadeIn z-50">
//                 {/* Web Development with sub-dropdown */}
//                 <div
//                   className="relative group"
//                   onMouseEnter={() => setSubDropdownOpen('web')}
//                   onMouseLeave={() => setSubDropdownOpen(null)}
//                 >
//                   <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
//                     <FaLaptopCode /> Web Development ▸
//                   </div>
//                   {subDropdownOpen === 'web' && (
//                     <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
//                       <Link to="/services/web/frontend" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaCode /> Frontend Development</Link>
//                       <Link to="/services/web/backend" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaLaptopCode /> Backend Development</Link>
//                       <Link to="/services/web/uiux" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaPaintBrush /> UI/UX Design</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* App Development with sub-dropdown */}
//                 <div
//                   className="relative group"
//                   onMouseEnter={() => setSubDropdownOpen('app')}
//                   onMouseLeave={() => setSubDropdownOpen(null)}
//                 >
//                   <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
//                     <FaMobileAlt /> App Development ▸
//                   </div>
//                   {subDropdownOpen === 'app' && (
//                     <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
//                       <Link to="/services/app/android" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> Android Apps</Link>
//                       <Link to="/services/app/ios" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> iOS Apps</Link>
//                       <Link to="/services/app/hybrid" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> Hybrid Apps</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* SEO Marketing with sub-dropdown */}
//                 <div
//                   className="relative group"
//                   onMouseEnter={() => setSubDropdownOpen('seo')}
//                   onMouseLeave={() => setSubDropdownOpen(null)}
//                 >
//                   <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
//                     <FaSearch /> SEO Marketing ▸
//                   </div>
//                   {subDropdownOpen === 'seo' && (
//                     <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
//                       <Link to="/services/seo/local" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaBullhorn /> Local SEO</Link>
//                       <Link to="/services/seo/global" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaChartLine /> Global SEO</Link>
//                       <Link to="/services/seo/technical" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaSearch /> Technical SEO</Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link to="/learning" className="hover:text-[var(--accent)] transition">LEARNING</Link>
//           <Link to="/career" className="hover:text-[var(--accent)] transition">CAREER</Link>
//           <Link to="/contact" className="hover:text-[var(--accent)] transition">CONTACT US</Link>
//         </nav>

//         {/* Theme Toggle & Mobile Menu Button */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition"
//           >
//             {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
//           </button>
//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//             {menuOpen ? (
//               <XMarkIcon className="h-6 w-6 text-[var(--text-color)]" />
//             ) : (
//               <Bars3Icon className="h-6 w-6 text-[var(--text-color)]" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[var(--bg)] shadow-md px-6 py-4 space-y-4 font-semibold text-sm text-[var(--text-color)] animate-slideDown">
//           <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
//           <details>
//             <summary className="cursor-pointer">SERVICES</summary>
//             <div className="ml-4 space-y-2 mt-2">
//               <details>
//                 <summary className="cursor-pointer"><FaLaptopCode className="inline mr-2" /> Web Development</summary>
//                 <div className="ml-4 mt-2 space-y-1">
//                   <Link to="/services/web/frontend" onClick={() => setMenuOpen(false)}>Frontend Development</Link>
//                   <Link to="/services/web/backend" onClick={() => setMenuOpen(false)}>Backend Development</Link>
//                   <Link to="/services/web/uiux" onClick={() => setMenuOpen(false)}>UI/UX Design</Link>
//                 </div>
//               </details>
//               <details>
//                 <summary className="cursor-pointer"><FaMobileAlt className="inline mr-2" /> App Development</summary>
//                 <div className="ml-4 mt-2 space-y-1">
//                   <Link to="/services/app/android" onClick={() => setMenuOpen(false)}>Android Apps</Link>
//                   <Link to="/services/app/ios" onClick={() => setMenuOpen(false)}>iOS Apps</Link>
//                   <Link to="/services/app/hybrid" onClick={() => setMenuOpen(false)}>Hybrid Apps</Link>
//                 </div>
//               </details>
//               <details>
//                 <summary className="cursor-pointer"><FaSearch className="inline mr-2" /> SEO Marketing</summary>
//                 <div className="ml-4 mt-2 space-y-1">
//                   <Link to="/services/seo/local" onClick={() => setMenuOpen(false)}>Local SEO</Link>
//                   <Link to="/services/seo/global" onClick={() => setMenuOpen(false)}>Global SEO</Link>
//                   <Link to="/services/seo/technical" onClick={() => setMenuOpen(false)}>Technical SEO</Link>
//                 </div>
//               </details>
//             </div>
//           </details>
//           <Link to="/learning" onClick={() => setMenuOpen(false)}>LEARNING</Link>
//           <Link to="/career" onClick={() => setMenuOpen(false)}>CAREER</Link>
//           <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
//         </div>
//       )}
//     </header>
//   );
// }


'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaCode, FaPaintBrush, FaBullhorn, FaChartLine } from 'react-icons/fa';

// Dummy image URLs (light & dark)
const logoLight = 'https://dummyimage.com/160x40/4f46e5/ffffff&text=Forex+Trading';
const logoDark = 'https://dummyimage.com/160x40/f1f5f9/4f46e5&text=Forex+Trading';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation(); // 👈 to detect route change

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setSubDropdownOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 👇 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Forex"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center font-semibold text-sm text-[var(--text-color)]">
          <Link to="/" className="hover:text-[var(--accent)] transition">HOME</Link>
          <Link to="/about" className="hover:text-[var(--accent)] transition">ABOUT US</Link>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-[var(--accent)] transition"
            >
              SERVICES <span className="ml-1">▾</span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-[var(--bg)] shadow-lg rounded-md w-64 py-2 animate-fadeIn z-50">
                {/* Web Development with sub-dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setSubDropdownOpen('web')}
                  onMouseLeave={() => setSubDropdownOpen(null)}
                >
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
                    <FaLaptopCode /> Web Development ▸
                  </div>
                  {subDropdownOpen === 'web' && (
                    <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
                      <Link to="/services/web/frontend" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaCode /> Frontend Development</Link>
                      <Link to="/services/web/backend" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaLaptopCode /> Backend Development</Link>
                      <Link to="/services/web/uiux" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaPaintBrush /> UI/UX Design</Link>
                    </div>
                  )}
                </div>

                {/* App Development with sub-dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setSubDropdownOpen('app')}
                  onMouseLeave={() => setSubDropdownOpen(null)}
                >
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
                    <FaMobileAlt /> App Development ▸
                  </div>
                  {subDropdownOpen === 'app' && (
                    <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
                      <Link to="/services/app/android" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> Android Apps</Link>
                      <Link to="/services/app/ios" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> iOS Apps</Link>
                      <Link to="/services/app/hybrid" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaMobileAlt /> Hybrid Apps</Link>
                    </div>
                  )}
                </div>

                {/* SEO Marketing with sub-dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setSubDropdownOpen('seo')}
                  onMouseLeave={() => setSubDropdownOpen(null)}
                >
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)] cursor-pointer">
                    <FaSearch /> SEO Marketing ▸
                  </div>
                  {subDropdownOpen === 'seo' && (
                    <div className="absolute top-0 left-full bg-[var(--bg)] shadow-lg rounded-md w-56 py-2">
                      <Link to="/services/seo/local" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaBullhorn /> Local SEO</Link>
                      <Link to="/services/seo/global" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaChartLine /> Global SEO</Link>
                      <Link to="/services/seo/technical" className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]"><FaSearch /> Technical SEO</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/learning" className="hover:text-[var(--accent)] transition">LEARNING</Link>
          <Link to="/career" className="hover:text-[var(--accent)] transition">CAREER</Link>
          <Link to="/contact" className="hover:text-[var(--accent)] transition">CONTACT US</Link>
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-[var(--text-color)]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[var(--text-color)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg)] shadow-md px-6 py-4 space-y-4 font-semibold text-sm text-[var(--text-color)] animate-slideDown">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <details>
            <summary className="cursor-pointer">SERVICES</summary>
            <div className="ml-4 space-y-2 mt-2">
              <details>
                <summary className="cursor-pointer"><FaLaptopCode className="inline mr-2" /> Web Development</summary>
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/services/web/frontend" onClick={() => setMenuOpen(false)}>Frontend Development</Link>
                  <Link to="/services/web/backend" onClick={() => setMenuOpen(false)}>Backend Development</Link>
                  <Link to="/services/web/uiux" onClick={() => setMenuOpen(false)}>UI/UX Design</Link>
                </div>
              </details>
              <details>
                <summary className="cursor-pointer"><FaMobileAlt className="inline mr-2" /> App Development</summary>
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/services/app/android" onClick={() => setMenuOpen(false)}>Android Apps</Link>
                  <Link to="/services/app/ios" onClick={() => setMenuOpen(false)}>iOS Apps</Link>
                  <Link to="/services/app/hybrid" onClick={() => setMenuOpen(false)}>Hybrid Apps</Link>
                </div>
              </details>
              <details>
                <summary className="cursor-pointer"><FaSearch className="inline mr-2" /> SEO Marketing</summary>
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/services/seo/local" onClick={() => setMenuOpen(false)}>Local SEO</Link>
                  <Link to="/services/seo/global" onClick={() => setMenuOpen(false)}>Global SEO</Link>
                  <Link to="/services/seo/technical" onClick={() => setMenuOpen(false)}>Technical SEO</Link>
                </div>
              </details>
            </div>
          </details>
          <Link to="/learning" onClick={() => setMenuOpen(false)}>LEARNING</Link>
          <Link to="/career" onClick={() => setMenuOpen(false)}>CAREER</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </div>
      )}
    </header>
  );
}
