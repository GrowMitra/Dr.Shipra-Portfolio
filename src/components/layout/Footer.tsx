import { motion } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Techniques', href: '#techniques' },
  { label: 'Projects', href: '#projects' },
  { label: 'Podcasts', href: '#podcasts' },
  { label: 'Communication', href: '#communication' },
  { label: 'Scientorship', href: '#scientorship' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* BACKGROUND */}

      <div className="absolute inset-0 scientific-grid opacity-[0.03]" />

      <div className="absolute left-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* CONTENT */}

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
              Research Portfolio
            </div>

            {/* NAME */}

            <h2 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
              Dr.
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                {' '}
                Shipra
              </span>
            </h2>

            {/* SHORT BIO */}

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Molecular Biologist &
              Scientific Communicator focused
              on genetic engineering,
              translational research, and
              empowering the next generation of
              scientists through innovation,
              mentorship, and impactful
              scientific storytelling.
            </p>

            {/* CONTACT CARD */}

            <motion.a
              href="mailto:shipra@researchlab.com"
              whileHover={{
                y: -2,
              }}
              className="group mt-10 flex max-w-md items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Email Address
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    shipra@researchlab.com
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:text-cyan-300" />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
                Quick Navigation
              </p>

              <h3 className="mb-8 text-3xl font-bold text-white">
                Explore Portfolio
              </h3>

              {/* NAVIGATION BOXES */}

              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    onClick={(e) => {
                      e.preventDefault();

                      scrollToSection(
                        item.href
                      );
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.03] to-blue-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-center justify-between">
                      <span>{item.label}</span>

                      <ExternalLink className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Dr.
              Shipra. All rights reserved.
            </p>

            <p className="text-sm italic text-zinc-600">
              “Science transforms curiosity into
              discovery.”
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}