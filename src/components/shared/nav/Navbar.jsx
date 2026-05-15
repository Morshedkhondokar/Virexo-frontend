// Navbar.jsx (Parent - manages search state)
import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };
  
  const handleSearchChange = (value) => setSearchQuery(value);
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Navigate to search results: navigate(`/search?q=${searchQuery}`)
      closeSearch();
    }
  };

  return (
    <>
      <DesktopNavbar 
        links={navLinks}
        searchQuery={searchQuery}
        isSearchOpen={isSearchOpen}
        onSearchOpen={openSearch}
        onSearchClose={closeSearch}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onMenuToggle={toggleMobileMenu}
      />
      <MobileNavbar 
        links={navLinks}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
    </>
  );
};

export default Navbar;