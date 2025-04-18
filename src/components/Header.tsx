import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className={`text-xl md:text-2xl font-bold transition-colors ${
              activeSection === 'home' ? 'text-primary' : 'text-gray-300'
            } glitch-text`}
            onClick={(e) => handleScroll(e, 'home')}
          >
            HB
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'about')}
            >
              About
            </a>
            <a 
              href="#experience" 
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === 'experience' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'experience')}
            >
              Experience
            </a>
            <a 
              href="#portfolio" 
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === 'portfolio' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'portfolio')}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === 'contact' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-4">
            <a
              href="#about"
              className={`block text-sm hover:text-primary transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'about')}
            >
              About
            </a>
            <a
              href="#experience"
              className={`block text-sm hover:text-primary transition-colors ${
                activeSection === 'experience' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'experience')}
            >
              Experience
            </a>
            <a
              href="#portfolio"
              className={`block text-sm hover:text-primary transition-colors ${
                activeSection === 'portfolio' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'portfolio')}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`block text-sm hover:text-primary transition-colors ${
                activeSection === 'contact' ? 'text-primary' : 'text-gray-300'
              }`}
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 