import { motion } from 'motion/react';
import { writings } from '../data';
import { ArrowUpRight } from 'lucide-react';

export function WritingSection() {
  return (
    <section id="writing" className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
          Essays & <span className="text-pink-deep">Writing</span>
        </h2>
        <p className="font-sans text-ink-light mt-4 text-lg max-w-2xl">
          Synthesizing research, documenting learning struggles, and exploring the philosophical implications of AGI.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 border-t border-ink/10 pt-12">
        {writings.map((writing, index) => {
          const isClickable = !!(writing as any).link;
          const Wrapper = isClickable ? motion.a : motion.div;
          
          return (
          // @ts-ignore
          <Wrapper
            key={writing.id}
            href={(writing as any).link}
            target={isClickable ? "_blank" : undefined}
            rel={isClickable ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group block relative flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isClickable ? 'cursor-pointer' : ''}`}
          >
            <div className="md:w-1/3 shrink-0 flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-light/70">
                {writing.platform}
              </span>
            </div>
            
            <div className="md:w-2/3 flex flex-col space-y-4">
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink leading-snug group-hover:text-green-deep transition-colors duration-300">
                {writing.title}
              </h3>
              <p className="font-sans text-ink-light text-base leading-relaxed">
                {writing.description}
              </p>
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
