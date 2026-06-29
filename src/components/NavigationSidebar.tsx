import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'connect', label: 'Connect' },
];

export function NavigationSidebar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const radius = 140; // The radius of our navigation arc

  return (
    <motion.nav 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:block h-[400px] w-[200px]"
    >
      <div className="relative w-full h-full">
        {navItems.map(({ id, label }, index) => {
          // 5 items, spanning from -90 degrees (-PI/2) to +90 degrees (PI/2)
          // index 0 -> -PI/2 (top)
          // index 2 -> 0 (middle)
          // index 4 -> PI/2 (bottom)
          const angle = (index - 2) * (Math.PI / 4); 
          
          const yOffset = Math.sin(angle) * radius;
          const xOffset = Math.cos(angle) * radius;
          
          // Right offset so it scoops inward to the left (max right margin at middle, 0 at ends)
          const rightOffset = xOffset;

          return (
            <a
              key={id}
              href={`#${id}`}
              className="absolute group flex items-center gap-4 text-sm font-sans font-medium"
              style={{
                top: '50%',
                right: `${rightOffset}px`,
                transform: `translateY(calc(-50% + ${yOffset}px))`,
              }}
              aria-label={`Navigate to ${label}`}
            >
              <span 
                className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                  activeSection === id ? 'text-green-deep opacity-100 translate-x-0' : 'text-ink-light'
                }`}
              >
                {label}
              </span>
              <div className="relative flex items-center justify-center shrink-0">
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === id ? 'bg-green-deep scale-125' : 'bg-ink-light/30 group-hover:bg-ink-light/60'
                  }`}
                />
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 w-2 h-2 rounded-full bg-green-deep blur-[4px] opacity-60"
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
