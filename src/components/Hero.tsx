import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Name with decorative line */}
            <div className="relative">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-primary glitch-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                data-text="Hernâni Bento"
              >
                Hernâni Bento
              </motion.h1>
              <motion.div 
                className="w-32 h-1 bg-primary mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
              <motion.h2 
                className="text-2xl md:text-3xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                (Ethical) Hacker - Engineer - Security Researcher
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Exploring the frontiers of digital security and pushing the boundaries of what's possible in cybersecurity.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button onClick={() => scrollToSection('about')} className="cyber-button">
                About Me
              </button>
              <button onClick={() => scrollToSection('experience')} className="cyber-button">
                Experience
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="cyber-button">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="cyber-button">
                Contact
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
          />
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero; 