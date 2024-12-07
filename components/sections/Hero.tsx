'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/hero-image.webp"
          alt="Actor Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white/80 text-xl uppercase tracking-[0.2em] mb-4">Producer • Actor • Podcaster • Speaker</h2>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-6">
              Marcus Mabusela
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto italic">
              "A process-driven creative thriving in the passion of storytelling"
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/showreel"
              className="rounded-none border-2 border-white text-white px-8 py-4 text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Watch Showreel
            </a>
            <a
              href="/contact"
              className="rounded-none bg-white text-black px-8 py-4 text-lg tracking-wider uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
