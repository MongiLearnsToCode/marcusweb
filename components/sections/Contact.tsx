'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Calendar } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white/80 text-xl uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Let's Create Something Amazing
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Whether you need captivating visuals, compelling motion graphics, or a complete brand identity, 
            I'm here to transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-white/80" />
              </div>
              <div>
                <h3 className="text-lg font-light uppercase tracking-wider mb-1">Email</h3>
                <p className="text-white/80">marcus@metricproductions.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-white/80" />
              </div>
              <div>
                <h3 className="text-lg font-light uppercase tracking-wider mb-1">Phone</h3>
                <p className="text-white/80">+27 71 490 5070</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-white/80" />
              </div>
              <div>
                <h3 className="text-lg font-light uppercase tracking-wider mb-1">Location</h3>
                <p className="text-white/80">Johannesburg, South Africa</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <h3 className="text-lg font-light uppercase tracking-wider mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="border-2 border-white p-3 hover:bg-white hover:text-black transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="border-2 border-white p-3 hover:bg-white hover:text-black transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#schedule" 
                   className="border-2 border-white p-3 hover:bg-white hover:text-black transition-all duration-300">
                  <Calendar className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 border-2 border-white/20 p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider font-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 focus:border-white focus:outline-none text-white transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider font-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 focus:border-white focus:outline-none text-white transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="project-type" className="block text-sm uppercase tracking-wider font-light mb-2">
                Project Type
              </label>
              <select
                id="project-type"
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 focus:border-white focus:outline-none text-white transition-all duration-300"
              >
                <option value="" className="bg-black">Select project type</option>
                <option value="motion-graphics" className="bg-black">Motion Graphics</option>
                <option value="brand-identity" className="bg-black">Brand Identity</option>
                <option value="video-production" className="bg-black">Video Production</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider font-light mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 focus:border-white focus:outline-none text-white transition-all duration-300"
                placeholder="Tell me about your project goals, timeline, and any specific requirements"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 text-lg uppercase tracking-wider hover:bg-black hover:text-white border-2 border-white transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
