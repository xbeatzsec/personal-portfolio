import { motion } from 'framer-motion';

const experiences = [
  {
    company: "SIBS",
    position: "Offensive Security Engineer",
    period: "November 2024- Now",
    description: "Member of the Offensive Security team, responsible for identifying vulnerabilities in critical payment systems and financial infrastructure. Conducting security analysis, and mitigation recommendations.",
    achievements: [
      "Development of custom tools for process automation",
      "Vulnerability analysis of critical systems",
      "Vulnerability Scanning",
      "Detailed documentation of vulnerabilities and mitigation recommendations",
      "Participation in Red Team exercises"
    ],
    technologies: ["Python", "Tenable", "Bash", "Metasploit", "Burp Suite", "Nmap", "OWASP ZAP", "Custom Tools"]
  },
  {
    company: "Siemens",
    position: "Penetration Tester Trainee",
    period: "November 2023 - November 2024",
    description: "Developed a solid foundation in ethical hacking and web application security through extensive hands-on experience and active participation in Capture the Flag (CTF) challenges. Gained practical expertise in identifying, analyzing, and mitigating vulnerabilities across diverse environments, enhancing both problem-solving skills and proficiency in cybersecurity tools and methodologies.",
    achievements: [
      "Active participation in CTF competitions and security challenges",
      "Identification and exploitation of vulnerabilities in web applications",
      "Development of scripts for security testing automation",
      "Analysis and documentation of vulnerabilities in various environments",
      "Application of penetration testing methodologies in critical systems"
    ],
    technologies: ["Python", "Metasploit", "Burp Suite", "Nmap", "OWASP Top 10", "Custom Tools", "Pentesting Tools", "Pentesting Methodologies"]
  },
  {
    company: "EDP (Energias de Portugal)",
    position: "Internship at EDP",
    period: "March 2021 - August 2021",
    description: "Internship in the Security and IT Risk Management department, focusing on security operations, offensive testing, and vulnerability management in critical infrastructure of the energy sector.",
    achievements: [
      "Operations in the Security Operations Center (SOC)",
      "Management and analysis of vulnerabilities in critical systems",
      "Firewall administration and configuration",
      "Development of security scripts and tools",
      "Preparation of technical reports and recommendations"
    ],
    technologies: ["Tenable", "Firewalls",  "Vulnerability Scanners", "Python", "Bash"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center glitch-text"
        >
          Professional Experience
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="cyber-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{exp.position}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 