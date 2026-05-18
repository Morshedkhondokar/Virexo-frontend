import { Link } from "react-router";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import Logo from "../Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiYoutube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="w-full bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Left: Logo + Tagline */}
          <div className="flex items-center gap-6">
            <Logo size="small" showText={true} className="text-white" />
            <span className="hidden sm:block w-px h-6 bg-white/20" />
            <span className="text-sm text-white/50">
              Premium Tech Store
            </span>
          </div>

          {/* Right: Navigation */}
          <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          
          {/* Left: Copyright + Legal */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <span>Copyright © {currentYear} Virexo. All rights reserved</span>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;