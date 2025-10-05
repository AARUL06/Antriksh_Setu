function Footer() {
  return (
    <footer className="font-montserrat bg-[#ffffff] bg-cover bg-center bg-blend-overlay text-white">
      <div className="bg-[url('/images/footer-bkg.png')] text-dark">
        <div className="max-w-7xl mx-auto px-6 text-[#000] py-12 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12">
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 mx-auto">
            <img
              src="src/assets/images/Nexus.png"
              alt="Logo"
              className="h-34 "
            />
            <p className="text-md">
              Revolutionizing global connectivity through Low Earth Orbit satellite technology. 
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#fff] border-white hover:bg-teal-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#fff] border-white hover:bg-teal-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#000] text-center py-4 text-md">
        © 2025 Nexus. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
