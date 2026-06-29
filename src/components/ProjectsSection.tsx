import { motion } from 'motion/react';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
          Selected <span className="text-green-deep">Projects</span>
        </h2>
        <p className="font-sans text-ink-light mt-4 text-lg max-w-2xl">
          From deterministic math to stochastic models, mapping the irregularity of biological spike trains.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => {
          const isClickable = !!(project as any).link;
          const Wrapper = isClickable ? motion.a : motion.div;
          
          return (
          // @ts-ignore
          <Wrapper
            key={project.id}
            href={(project as any).link}
            target={isClickable ? "_blank" : undefined}
            rel={isClickable ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`group relative flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isClickable ? 'cursor-pointer' : ''}`}
          >
            <div className="md:w-1/3 shrink-0 flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-light/70">
                {project.date}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink leading-snug group-hover:text-green-deep transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-sans text-pink-deep font-medium text-sm pt-2">
                {project.category}
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <p className="font-sans text-ink-light text-lg leading-relaxed">
                {project.description}
              </p>
              
              {project.bullets.length > 0 && (
                <ul className="space-y-4 font-sans text-ink-light text-base leading-relaxed">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-ink-light/40 mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-ink/5 text-ink-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {isClickable && (
              <div className="absolute right-0 top-0 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block">
                <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink-light">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            )}
          </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
