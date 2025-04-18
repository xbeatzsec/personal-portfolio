import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor degree in Computer Science and Engineering',
    institution: 'Insituto Piaget',
    date: '2021 - 2023',
    description: 'Comprehensive program in Computer Science and Engineering, focusing on software development, algorithms, data structures, and system architecture. Emphasis on practical application through hands-on projects and research in software engineering.',
    achievements: [
      'Developed full-stack applications using modern web technologies',
      'Implemented complex algorithms and data structures for efficient problem-solving',
      'Led software development projects focusing on clean architecture and best practices',
      'Participated in programming competitions and hackathons',
      'Created and maintained robust database systems and APIs',
      'Ended with a final project in Software Engineering and Security with 18/20'
    ]
  },
  {
    degree: 'Associate Degree in Cyber Security, Computer Networks and Information Systems',
    institution: 'Instituto Piaget',
    date: '2019 - 2021',
    description: 'Specialized program in information security and network systems, providing foundational knowledge in cybersecurity principles, network architecture, and system administration with a focus on practical security implementations.',
    achievements: [
      'Developed and implemented network security solutions for enterprise environments',
      'Participated in multiple Capture The Flag (CTF) competitions',
      'Designed and implemented secure network architectures for various use cases',
      'Conducted vulnerability assessments and penetration testing exercises',
      'Learnd about Cryptography, Network Security, and Information Systems',
      'Ethical Hacking and Cybersecurity Fundamentals'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center glitch-text"
        >
          Academic Background
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="cyber-card"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-primary">{edu.degree}</h3>
                <span className="text-sm text-gray-400">{edu.date}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{edu.institution}</p>
              <p className="text-gray-400 mb-4 text-sm">{edu.description}</p>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-primary">Achievements</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <span className="mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 