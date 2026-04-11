interface NavbarProps {
  creativeMode: boolean;
}

const Navbar = ({ creativeMode }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className={`font-heading font-bold text-lg transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          Eva L.P.S.
        </span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
