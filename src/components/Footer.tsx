import { motion } from 'motion/react';
import { Github, Linkedin, Mail, PenLine } from 'lucide-react';

export function Footer() {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/nippani-meghana/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Nippani-Meghana' },
    { name: 'Mail', icon: Mail, href: 'mailto:meghananippani@gmail.com' },
    { name: 'Substack', icon: PenLine, href: 'https://substack.com/@cloudsandcode' },
  ];

  return (
    <footer id="connect" className="relative z-10 bg-ink text-butter rounded-t-[3rem] mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-soft via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24 flex flex-col items-center justify-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-display text-5xl sm:text-7xl font-medium tracking-tight">
            Let's <span className="italic font-light text-pink-soft">connect.</span>
          </h2>
          <p className="font-sans text-butter/70 max-w-md mx-auto text-lg">
            Whether you have a quick question, a random thought, or just want to connect, reach out anytime.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-butter/20 hover:border-butter/60 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.name}
              >
                <Icon size={28} className="group-hover:text-green-soft transition-colors" />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono tracking-wide text-butter/60">
                  {social.name}
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>

      <div className="border-t border-butter/10 py-6 text-center">
        <p className="font-mono text-xs text-butter/40">
          © {new Date().getFullYear()} Meghana Nippani.
        </p>
      </div>
    </footer>
  );
}
