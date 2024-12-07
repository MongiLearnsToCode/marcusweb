'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/marcusmabusela',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/marcusmabusela',
    icon: Twitter,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@marcusmabusela',
    icon: Youtube,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/marcusmabusela',
    icon: Linkedin,
  },
];

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Showreel', href: '/showreel' },
  { name: 'Press Kit', href: '/press-kit' },
  { name: 'Contact', href: '/contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-light tracking-widest">
              MARCUS MABUSELA
            </Link>
            <p className="text-white/70 text-sm">
              Producer, Actor, Podcaster and Speaker based in Johannesburg. A process-driven creative thriving in the passion of storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-3" />
                <a
                  href="mailto:marcus@metricproudctions.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  marcus@metricproudctions.com
                </a>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-3" />
                <a
                  href="tel:+27714905070"
                  className="hover:text-white transition-colors duration-200"
                >
                  +27 71 490 5070
                </a>
              </li>
              <li className="flex items-start text-white/70">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              {currentYear} Marcus Mabusela. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
