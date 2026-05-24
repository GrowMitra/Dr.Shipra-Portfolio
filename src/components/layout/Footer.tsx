// import { motion } from 'framer-motion';
// import {
//   Mail,
//   ExternalLink,
//   ArrowUpRight,
// } from 'lucide-react';

// import { NavItem } from '../../types';

// const navItems: NavItem[] = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Techniques', href: '#techniques' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Podcasts', href: '#podcasts' },
//   { label: 'Communication', href: '#communication' },
//   { label: 'Scientorship', href: '#scientorship' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Footer() {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 scientific-grid opacity-[0.03]" />

//       <div className="absolute left-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

//       <div className="absolute bottom-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

//       {/* CONTENT */}

//       <div className="relative mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
//           {/* LEFT SIDE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
//               Research Portfolio
//             </div>

//             {/* NAME */}

//             <h2 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
//               Dr.
//               <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
//                 {' '}
//                 Shipra
//               </span>
//             </h2>

//             {/* SHORT BIO */}

//             <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
//               Molecular Biologist &
//               Scientific Communicator focused
//               on genetic engineering,
//               translational research, and
//               empowering the next generation of
//               scientists through innovation,
//               mentorship, and impactful
//               scientific storytelling.
//             </p>

//             {/* CONTACT CARD */}

//             <motion.a
//               href="mailto:shipra@researchlab.com"
//               whileHover={{
//                 y: -2,
//               }}
//               className="group mt-10 flex max-w-md items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
//                   <Mail className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
//                     Email Address
//                   </p>

//                   <p className="mt-1 text-sm font-medium text-white">
//                     shipra@researchlab.com
//                   </p>
//                 </div>
//               </div>

//               <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:text-cyan-300" />
//             </motion.a>
//           </motion.div>

//           {/* RIGHT SIDE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.8,
//               delay: 0.1,
//             }}
//             className="flex flex-col justify-center"
//           >
//             <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
//               <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
//                 Quick Navigation
//               </p>

//               <h3 className="mb-8 text-3xl font-bold text-white">
//                 Explore Portfolio
//               </h3>

//               {/* NAVIGATION BOXES */}

//               <div className="grid grid-cols-2 gap-4">
//                 {navItems.map((item, index) => (
//                   <motion.a
//                     key={item.href}
//                     href={item.href}
//                     initial={{
//                       opacity: 0,
//                       y: 20,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: index * 0.05,
//                     }}
//                     whileHover={{
//                       y: -3,
//                       scale: 1.02,
//                     }}
//                     onClick={(e) => {
//                       e.preventDefault();

//                       scrollToSection(
//                         item.href
//                       );
//                     }}
//                     className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.03] to-blue-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                     <div className="relative flex items-center justify-between">
//                       <span>{item.label}</span>

//                       <ExternalLink className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* BOTTOM */}

//         <div className="mt-16 border-t border-white/10 pt-8">
//           <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
//             <p className="text-sm text-zinc-500">
//               © {new Date().getFullYear()} Dr.
//               Shipra. All rights reserved.
//             </p>

//             <p className="text-sm italic text-zinc-600">
//               “Science transforms curiosity into
//               discovery.”
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



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
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white text-slate-800">
      {/* PREMIUM SKY BLUE & LIQUID CYAN GRADIENT MESH ACCENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
      
      {/* Ambient Radial Mesh Lights */}
      <div className="absolute left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-sky-100/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-50/40 blur-[120px] pointer-events-none" />

      {/* CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start text-left">
          
          {/* LEFT SIDE: BRAND PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
              Research Portfolio
            </div>

            <h2 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-950 md:text-6xl">
              Dr.
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {' '}
                Shipra
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 font-medium">
              Molecular Biologist & Scientific Communicator focused on genetic engineering, translational research, and empowering the next generation of scientists through innovation, mentorship, and impactful scientific storytelling.
            </p>

            {/* QUICK CONTACT CONNECT MODULE */}
            <motion.a
              href="mailto:shipra@researchlab.com"
              whileHover={{ y: -2 }}
              className="group mt-8 flex max-w-md items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-[0_12px_30px_rgba(186,230,253,0.12)] transition-all duration-300 hover:border-sky-300 hover:shadow-[0_15px_45px_rgba(14,165,233,0.18)]"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shadow-inner">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900 truncate">
                    shipra@researchlab.com
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors duration-300 group-hover:text-sky-500 stroke-[2.5]" />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM QUICK NAVIGATION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full"
          >
            <div className="rounded-[40px] border border-sky-100 bg-sky-50/50 p-6 md:p-8 shadow-[0_15px_40px_rgba(186,230,253,0.1)] w-full">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                Quick Navigation
              </p>
              <h3 className="mb-6 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">
                Explore Portfolio
              </h3>

              {/* GRID INTERACTION PANEL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ y: -2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="group relative overflow-hidden rounded-xl border border-sky-100 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 shadow-sm transition-all duration-300 hover:border-sky-300 hover:text-sky-700 w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex items-center justify-between w-full">
                      <span>{item.label}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 text-sky-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 stroke-[2.5]" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER FOOTNOTES LOG Panel */}
        <div className="mt-16 border-t border-slate-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row w-full">
            <p className="text-xs font-bold tracking-wide text-slate-400">
              © {new Date().getFullYear()} Dr. Shipra. All rights reserved.
            </p>

            <p className="text-xs font-semibold italic text-slate-400 text-center sm:text-right">
              “Science transforms curiosity into discovery.”
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}