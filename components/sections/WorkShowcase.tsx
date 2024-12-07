'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const performances = [
  {
    title: 'Zombie Date Night in Tlokweng',
    role: 'Producer',
    category: 'Short Film',
    year: '2023',
    venue: 'Durban Film Mart NEFTI',
    image: '/performances/zombie-date-night-3.webp',
    awards: 'Best Film and Audience Choice Award'
  },
  {
    title: 'Verses at Work',
    role: 'Co-Producer',
    category: 'Film',
    year: '2016-2017',
    venue: 'International Film Festivals',
    image: '/performances/verses-at-work.png',
    awards: 'Brazil International Film Festival Winner, NYC Hip-hop Film Festival Winner'
  },
  {
    title: 'Connection to Home',
    role: 'Writer & Performer',
    category: 'One-man Show',
    year: '2016',
    venue: 'Goree Island International Arts Festival',
    image: '/performances/connection-to-home.jpg',
    awards: 'Best Production Award'
  },
  {
    title: 'The Film Biz Show',
    role: 'Host & Executive Producer',
    category: 'Podcast',
    year: '2023',
    venue: 'Metric Productions',
    image: '/performances/the-film-biz-show.jpg',
  },
];

export const WorkShowcase = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <section id="performances" className="py-24 bg-white" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light uppercase tracking-wider text-gray-900 mb-4">
            Notable Works
          </h2>
          <div className="w-24 h-0.5 bg-black/20 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of notable works across various mediums
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {performances.map((performance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={performance.image}
                  alt={performance.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-white/80">
                    {performance.category} • {performance.year}
                  </p>
                  <h3 className="text-2xl font-light">{performance.title}</h3>
                  <p className="text-white/90">{performance.role}</p>
                  <p className="text-sm text-white/70">{performance.venue}</p>
                  {performance.awards && (
                    <p className="text-sm text-white/70">{performance.awards}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};
