import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down';
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
