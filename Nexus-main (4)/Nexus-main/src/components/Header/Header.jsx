import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Create Product", to: "/create-a-product" },
  { label: "Knowledge-Hub", to: "/knowledge-hub" },
  { label: "Estimation", to: "/estimation" },
];

export default function Header({ buttonLabel = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // lock body scroll when mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className=" font-montserrat fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <h1 className="text-3xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              Nexus
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="relative group text-black font-medium text-sm uppercase tracking-wider hover:text-gray-300 transition-all duration-300"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              {/* Add orbital dots for space theme */}
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Desktop button */}
        {/* <button className="cursor-pointer hidden md:flex items-center gap-2 px-6 py-2.5 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-white hover:bg-white hover:text-black transition-all duration-300 group">
          <span>{buttonLabel}</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button> */}

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none hover:bg-white/20 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Space Connect</h2>
                <p className="text-xs text-gray-400 -mt-1">SIH 2024</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="group flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-medium uppercase tracking-wider">
                  {link.label}
                </span>
                <svg
                  className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </nav>

          {/* Mobile Login Button */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 group">
              <span>{buttonLabel}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Footer info in mobile menu */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">Connecting the World</p>
            <p className="text-xs text-gray-500">Through Space Technology</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}
    </header>
  );
}
