import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


interface Project {
    title: string;
    description: string;
    technologies: string[];
    details: {
        achievements: string[];
        skills: string[];
    };
}

interface HackingCardProps {
    project: Project;
    index: number;
    onClick: () => void;
    isSelected: boolean;
}

const projects = [
    {
        title: 'CTF & Competitions',
        description: 'Participation in CTFs and hacking competitions, including Top 5 in Portugal on TryHackMe in December 2020.',
        technologies: ['TryHackMe', 'HackTheBox', 'CTF', 'Competitions'],
        details: {
            achievements: [
                '🥇 Top 5 in Portugal on TryHackMe (December 2020)',
                'Active participation in HackTheBox',
                'Experience in various national and international CTFs'
            ],
            skills: ['Penetration Testing', 'Web Security', 'Network Security', 'Reverse Engineering']
        }
    },
    {
        title: 'Bug Bounty & Hacking',
        description: 'Participation in bug bounty programs and live hacking events, including Meta BountyCon in Madrid 2022.',
        technologies: ['Bug Bounty', 'Web Security', 'Penetration Testing'],
        details: {
            achievements: [
                'Participation in Meta BountyCon Madrid 2022',
                "Recognized as Young Talent of the Setúbal region in 2022, by 'O Setubalense'",
                'Vulnerability discovery in bug bounty programs',
                'Experience in live hacking events'
            ],
            skills: ['Web Security', 'API Security', 'Mobile Security', 'Social Engineering']
        }
    },
    {
        title: 'Python Development',
        description: 'Development of tools and scripts in Python for penetration testing automation and security analysis.',
        technologies: ['Python', 'Automation', 'Security Tools'],
        details: {
            achievements: [
                'Development of automation tools',
                'Security analysis scripts',
                'Custom frameworks for penetration testing'
            ],
            skills: ['Python', 'Automation', 'Security Tools', 'API Development']
        }
    }
];

const additionalCertifications = [
    {
        title: 'ICS Cybersecurity Specialization',
        issuer: 'Cybersecurity and Infrastructure Security Agency - United States',
        date: '2021',
        description: 'Specialized training in Industrial Control Systems (ICS) cybersecurity, including threats and practical security measures.',
        technologies: ['ICS Security', 'Industrial Control Systems', 'Critical Infrastructure'],
        link: '#'
    },
    {
        title: 'Introduction to Vulnerability Management',
        issuer: 'Security Blue Team',
        date: '2021',
        description: 'Comprehensive training in vulnerability management processes, tools, and best practices.',
        technologies: ['Vulnerability Management', 'Security Assessment', 'Risk Analysis'],
        link: '#'
    },
    {
        title: 'Certified Network Security Specialist',
        issuer: 'International CyberSecurity Institute - London, UK',
        date: '2020',
        description: 'Comprehensive certification in network security, covering fundamental concepts and practical applications.',
        technologies: ['Network Security', 'Security Fundamentals', 'Network Defense'],
        link: 'https://www.credential.net/4d1f3c0b-a30c-44ff-8221-394cfa436736#acc.rum73YLQ'
    },
    {
        title: 'Fundamentals of Ethical Hacking',
        issuer: 'Udemy - San Francisco, United States',
        date: '2020',
        description: 'Comprehensive training in ethical hacking fundamentals, including network security, encryption, VPNs, and attacker techniques.',
        technologies: ['Ethical Hacking', 'Network Security', 'Encryption', 'VPN'],
        link: 'https://www.udemy.com/certificate/UC-83a946b2-0c90-4c0a-b002-82399931a464/'
    },
    {
        title: 'NSE 1 & 2 Network Security Associate',
        issuer: 'Fortinet NSE Institute - California, United States',
        date: '2020',
        description: 'Network Security Associate certifications covering fundamental security concepts and Fortinet solutions.',
        technologies: ['Network Security', 'Fortinet', 'Security Fundamentals'],
        link: '#'
    }
];

const certifications = [
    {
        title: 'BSCP',
        issuer: 'PortSwigger',
        date: '2023',
        description: 'Burp Suite Certified Practitioner - Advanced web application security certification focusing on practical exploitation techniques, automated testing, and real-world scenarios. Demonstrates expertise in web security testing and vulnerability assessment using Burp Suite Professional.',
        technologies: ['Web Security', 'Burp Suite', 'Penetration Testing'],
        link: 'https://portswigger.net/web-security/e/c/c7da38b0b602aeb8'
    },
    {
        title: 'Certified Ethical Hacker Practical (CEH)',
        issuer: 'EC-Council',
        date: '2022',
        description: 'Certified Ethical Hacker - Certification in ethical hacking and offensive security',
        link: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Z/B6yUJPY/CQtMYO+2odX1IWgn4wC2ZXQrG689eLlcc='
    }
];

const HackingCard = ({ project, index, onClick, isSelected }: HackingCardProps) => {
    const [hackingText, setHackingText] = useState(project.title);
    const [isHovered, setIsHovered] = useState(false);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isHovered) {
            interval = setInterval(() => {
                setHackingText((prev: string) => {
                    const randomIndex = Math.floor(Math.random() * project.title.length);
                    const randomChar = characters[Math.floor(Math.random() * characters.length)];
                    return prev.split('').map((char: string, i: number) => 
                        i === randomIndex ? randomChar : char
                    ).join('');
                });
            }, 50);
        } else {
            setHackingText(project.title);
        }
        return () => clearInterval(interval);
    }, [isHovered, project.title]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="cyber-card cursor-pointer relative overflow-hidden"
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 bg-primary/5"
                animate={{
                    opacity: isHovered ? [0, 0.1, 0] : 0,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: isHovered ? [
                        "linear-gradient(45deg, transparent 0%, transparent 45%, rgba(0,255,0,0.1) 50%, transparent 55%, transparent 100%)",
                        "linear-gradient(45deg, transparent 0%, transparent 45%, rgba(0,255,0,0.2) 50%, transparent 55%, transparent 100%)",
                        "linear-gradient(45deg, transparent 0%, transparent 45%, rgba(0,255,0,0.1) 50%, transparent 55%, transparent 100%)"
                    ] : "none",
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary font-mono">
                {hackingText}
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
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
            <div className="mt-auto">
                <motion.span 
                    className="text-primary text-sm md:text-base"
                    animate={{
                        opacity: isHovered ? [1, 0.5, 1] : 1,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {isSelected ? 'Close Details' : 'View Details'}
                </motion.span>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [selectedCert, setSelectedCert] = useState<number | null>(null);
    const [showAdditionalCerts, setShowAdditionalCerts] = useState(false);

    return (
        <section id="portfolio" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                {/* Projects */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center glitch-text"
                >
                    Projects & Achievements
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {projects.map((project, index) => (
                        <HackingCard
                            key={project.title}
                            project={project}
                            index={index}
                            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                            isSelected={selectedProject === index}
                        />
                    ))}
                </div>

                {/* Certifications */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center glitch-text"
                >
                    Certifications
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="cyber-card cursor-pointer"
                            onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl md:text-2xl font-bold text-primary">{cert.title}</h3>
                                <span className="text-sm text-gray-400">{cert.date}</span>
                            </div>
                            <p className="text-gray-300 mb-2 text-sm md:text-base">{cert.issuer}</p>
                            <p className="text-gray-400 mb-4 text-sm">{cert.description}</p>
                            <div className="mt-auto">
                                <span className="text-primary text-sm md:text-base">
                                    {selectedCert === index ? 'Close Details' : 'View Details'}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Additional Certifications Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: certifications.length * 0.2 }}
                        viewport={{ once: true }}
                        className="cyber-card cursor-pointer group"
                        onClick={() => setShowAdditionalCerts(true)}
                    >
                        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                            <div className="w-16 h-16 mb-4 text-primary group-hover:scale-110 transition-transform duration-200">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Additional Certifications</h3>
                            <p className="text-gray-400 text-sm">View more certifications and training courses</p>
                        </div>
                    </motion.div>
                </div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative bg-black/90 border border-primary p-6 md:p-8 rounded-lg max-w-2xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 text-primary hover:text-primary/80"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary glitch-text">
                                    {projects[selectedProject].title}
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-primary">Achievements</h4>
                                        <ul className="space-y-2">
                                            {projects[selectedProject].details.achievements.map((achievement, i) => (
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

                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-primary">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {projects[selectedProject].technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-primary">Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {projects[selectedProject].details.skills.map((skill, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Certification Modal */}
                <AnimatePresence>
                    {selectedCert !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative bg-black/90 border border-primary p-6 md:p-8 rounded-lg max-w-2xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 text-primary hover:text-primary/80"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary glitch-text">
                                    {certifications[selectedCert].title}
                                </h3>
                                <p className="text-xl text-gray-300 mb-4">{certifications[selectedCert].issuer}</p>
                                <p className="text-gray-400 mb-6">{certifications[selectedCert].description}</p>
                                <a
                                    href={certifications[selectedCert].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-button inline-block"
                                >
                                    View Certificate
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Additional Certifications Modal */}
                <AnimatePresence>
                    {showAdditionalCerts && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setShowAdditionalCerts(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative bg-black/90 border border-primary p-6 md:p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setShowAdditionalCerts(false)}
                                    className="absolute top-4 right-4 text-primary hover:text-primary/80"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary glitch-text">
                                    Additional Certifications & Training
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {additionalCertifications.map((cert, index) => (
                                        <motion.div
                                            key={cert.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="cyber-card"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <h4 className="text-xl font-bold text-primary">{cert.title}</h4>
                                                <span className="text-sm text-gray-400">{cert.date}</span>
                                            </div>
                                            <p className="text-gray-300 mb-2 text-sm">{cert.issuer}</p>
                                            <p className="text-gray-400 mb-4 text-sm">{cert.description}</p>
                                            {cert.technologies && cert.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {cert.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            {cert.link && cert.link !== '#' && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-sm hover:text-primary/80 transition-colors"
                                                >
                                                    View Certificate →
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects; 