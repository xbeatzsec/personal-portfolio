import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/#about', label: 'About' },
        { path: '/#projects', label: 'Projects' },
        { path: '/#contact', label: 'Contact' },
        { path: '/blog', label: 'Blog' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-primary/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold text-primary glitch-text">
                        HBento
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="relative text-gray-300 hover:text-primary transition-colors"
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        layoutId="navbar-indicator"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button className="text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 