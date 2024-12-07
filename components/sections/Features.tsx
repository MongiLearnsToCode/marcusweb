'use client';

import { motion } from 'framer-motion';
import { Mic, Theater, Film, Music, GraduationCap, Award } from 'lucide-react';

const skills = [
  {
    title: 'Film Production',
    description: 'Award-winning producer of "Zombie Date Night in Tlokweng" and "Verses at Work"',
    icon: Film,
  },
  {
    title: 'Theatre Performance',
    description: 'Accomplished stage actor with performances in "1001 Nights", "Ketekang", and "My Children, My Africa"',
    icon: Theater,
  },
  {
    title: 'Podcasting',
    description: 'Host and executive producer of "The Film Biz Show", featuring industry experts',
    icon: Mic,
  },
  {
    title: 'Brand Ambassador',
    description: 'Worked with major brands including Phillips, Betway, Discovery Insure, and Vodacom',
    icon: Award,
  },
  {
    title: 'Professional Training',
    description: 'Market Theatre Laboratory graduate, specializing in performance, theatre making, writing and voice',
    icon: GraduationCap,
  },
  {
    title: 'Industry Leadership',
    description: 'Member of IPO and SAGA, founder of Metric Productions',
    icon: Award,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Features = () => {
  return (
    <section className="py-24 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light uppercase tracking-wider mb-4">
            Skills & Training
          </h2>
          <div className="w-24 h-0.5 bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-white/80 mr-3" />
                <h3 className="text-xl font-light">{skill.title}</h3>
              </div>
              <p className="text-white/70">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
