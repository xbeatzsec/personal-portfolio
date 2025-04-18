import { motion } from 'framer-motion';

const skills = [
  'Penetration Testing',
  'Web Security',
  'Network Security',
  'Python Development',
  'CTF Player',
  'Bug Bounty Hunting'
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center glitch-text"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base px-4 max-w-3xl mx-auto"
        >
          I am Hernâni, a 24-year-old Penetration Tester passionate about making a real difference in the world. 
          My journey in cybersecurity is driven by motivation, integrity, respect, and teamwork. 
          I believe in continuous learning and pushing the boundaries of what's possible in security research and in life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card text-center"
            >
              <span className="text-primary text-sm md:text-base">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 