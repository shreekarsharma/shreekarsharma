const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Shreekar Sharma
        </a>

        {/* Simple Horizontal Nav */}
        <nav className="flex gap-6 text-md font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
