import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Master in Cybersecurity',
    institution: 'University of Lisbon',
    date: '2022 - Present',
    description: 'Focus on offensive security, malware analysis, and reverse engineering',
    achievements: [
      'Development of malware analysis tools',
      'Research in advanced reverse engineering techniques',
      'Participation in offensive security projects'
    ]
  },
  {
    degree: 'Bachelor in Computer Engineering',
    institution: 'University of Lisbon',
    date: '2018 - 2022',
    description: 'Specialization in information security and networks',
    achievements: [
      'Final project in network security',
      'Participation in CTF competitions',
      'Development of security tools'
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