import { motion } from 'motion/react';
import { profile } from '../data';

export function HeroSection() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-ink max-w-4xl">
          Hi, I'm <span className="relative inline-block z-0">
            <span className="relative z-10">{profile.name.split(' ')[0]}</span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="absolute bottom-1.5 left-0 h-3 sm:h-4 bg-pink-soft/80 -z-10 -rotate-1 origin-left rounded-sm"
            />
          </span>.<br />
          <span className="text-ink-light block mt-4">
            CSE undergrad. <br />
            Brains, code, and the occasional essay.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl font-sans text-ink-light max-w-3xl leading-relaxed pt-6">
          Right now, my focus is directed toward computational neuroscience and data science. I spend my time replicating papers and building biophysical and stochastic neuron models to understand neural dynamics and biological noise. This page serves as a live archive of what I'm learning, building, and thinking about along the way.
        </p>

        <div className="flex flex-wrap gap-4 pt-10">
          <a 
            href="#projects"
            className="px-6 py-3 bg-ink text-butter rounded-lg font-medium hover:bg-ink-light transition-colors duration-200"
          >
            View Research
          </a>
          <a 
            href="#writing"
            className="px-6 py-3 border border-ink/20 rounded-lg font-medium hover:bg-white/50 transition-colors duration-200"
          >
            Read Essays
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-6 sm:left-12 flex items-center gap-3 text-ink-light/60 font-medium text-sm"
      >
        <div className="w-px h-12 bg-ink-light/20" />
        <span className="writing-vertical-lr tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
