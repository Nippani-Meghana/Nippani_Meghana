import { motion } from 'motion/react';
import { experiences } from '../data';

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
          Research & <span className="text-pink-deep">Experience</span>
        </h2>
        <p className="font-sans text-ink-light mt-4 text-lg max-w-2xl">
          Exploring the theoretical bounds of cognition and translating biological mechanisms into computational frameworks.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 group"
          >
            {/* Left Column: Date & Title */}
            <div className="md:w-1/3 shrink-0 flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-light/70">
                {exp.period}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink leading-snug group-hover:text-green-deep transition-colors duration-300">
                {exp.title}
              </h3>
              {exp.focus && (
                <p className="font-sans text-pink-deep font-medium text-sm pt-2">
                  Focus: {exp.focus}
                </p>
              )}
            </div>
            
            {/* Right Column: Details */}
            <div className="md:w-2/3">
              <ul className="space-y-4 font-sans text-ink-light text-base leading-relaxed">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-ink-light/40 mt-0.5">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
