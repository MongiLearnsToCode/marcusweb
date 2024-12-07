'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className="nav-wrapper">
        <div className="nav-bar">
          <MotionDiv
            className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link href="/" className="text-2xl font-light tracking-widest text-white">
                  OAGENG
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-12">
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/portfolio">Portfolio</NavLink>
                  <NavLink href="/gallery">Gallery</NavLink>
                  <NavLink href="/showreel">Showreel</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open menu</span>
                  <div className="flex flex-col space-y-1.5">
                    <div className="nav-icon">
                      <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-white"
                      />
                    </div>
                    <div className="nav-icon">
                      <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 bg-white"
                      />
                    </div>
                    <div className="nav-icon">
                      <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-white"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-black"
                >
                  <div className="px-4 pt-2 pb-3 space-y-1">
                    <MobileNavLink href="/about">About</MobileNavLink>
                    <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
                    <MobileNavLink href="/gallery">Gallery</MobileNavLink>
                    <MobileNavLink href="/showreel">Showreel</MobileNavLink>
                    <MobileNavLink href="/contact">Contact</MobileNavLink>
                  </div>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

const MotionDiv = ({ className, ...props }) => (
  <motion.div className={className} {...props} />
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-base font-medium text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300"
  >
    {children}
  </Link>
);
