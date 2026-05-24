

// import { useRef, useEffect, useState } from 'react';
// import {
//   motion,
//   useInView,
//   useSpring,
//   useTransform,
//   AnimatePresence,
// } from 'framer-motion';

// import {
//   Award,
//   BookOpen,
//   Microscope,
//   Users,
//   Calendar,
//   Play,
//   X,
// } from 'lucide-react';

// import aboutImg from '../images/heroImg/aboutImg.jpg';

// /* =========================================
//    STATS
// ========================================= */

// const stats = [
//   { label: 'Publications', value: 98, suffix: '+', icon: 'BookOpen' },
//   { label: 'Citations', value: 1200, suffix: '+', icon: 'Award' },
//   { label: 'Years Experience', value:5, suffix: '+', icon: 'Calendar' },
//   { label: 'PhD Students', value: 5, suffix: '', icon: 'Users' },
// ];

// /* =========================================
//    TIMELINE
// ========================================= */

// const timeline = [
//   {
//     year: 1999,
//     title: 'PhD in Molecular Biology',
//     description: 'MIT — Specialized in genetic engineering',
//   },
//   {
//     year: 2003,
//     title: 'Postdoctoral Fellow',
//     description: 'Stanford University — CRISPR research',
//   },
//   {
//     year: 2007,
//     title: 'Assistant Professor',
//     description: 'Harvard Medical School',
//   },
//   {
//     year: 2012,
//     title: 'Associate Professor',
//     description: 'Promoted with tenure',
//   },
//   {
//     year: 2018,
//     title: 'Full Professor',
//     description: 'Department Chair of Molecular Biology',
//   },
//   {
//     year: 2020,
//     title: 'Nobel Prize Nomination',
//     description: 'For contributions to CRISPR technology',
//   },
//   {
//     year: 2023,
//     title: 'Director of Research',
//     description: 'MIT Institute for Medical Engineering',
//   },
// ];

// /* =========================================
//    STORYTELLING MEDIA
// ========================================= */

// const storytellingMedia = [
//   {
//     type: 'video',
//     thumbnail:
//       'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1600&auto=format&fit=crop',

//     youtube:
//       'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1',
//   },

//   {
//     type: 'video',
//     thumbnail:
//       'https://plus.unsplash.com/premium_photo-1664195074951-fe91ec456eed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9kY2FzdCUyMHRodW1uYWlufGVufDB8fDB8fHww',

//     youtube:
//       'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1',
//   },

//   {
//     type: 'image',
//     image:
//       'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
//   },

//   {
//     type: 'image',
//     image:
//       'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJhaW4lMjBuZXJ2b3N8ZW58MHx8MHx8fDA%3D',
//   },
// ];

// /* =========================================
//    ANIMATED COUNTER
// ========================================= */

// function AnimatedCounter({
//   value,
//   suffix,
// }: {
//   value: number;
//   suffix?: string;
// }) {
//   const ref = useRef<HTMLSpanElement>(null);

//   const isInView = useInView(ref, {
//     once: true,
//   });

//   const spring = useSpring(0, {
//     mass: 0.8,
//     stiffness: 50,
//     damping: 15,
//   });

//   const display = useTransform(spring, (current) =>
//     Math.round(current)
//   );

//   useEffect(() => {
//     if (isInView) {
//       spring.set(value);
//     }
//   }, [isInView, spring, value]);

//   return (
//     <span ref={ref} className="tabular-nums">
//       <motion.span>{display}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// /* =========================================
//    MAIN COMPONENT
// ========================================= */

// export default function About() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const [selectedMedia, setSelectedMedia] = useState<any>(null);

//   /* ESC CLOSE */

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         setSelectedMedia(null);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () =>
//       window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   return (
//     <>
//       <section
//         id="about"
//         className="relative overflow-hidden bg-[#050816] py-32"
//       >
//         {/* BACKGROUND */}

//         <div className="absolute inset-0 scientific-grid opacity-20" />

//         <div className="absolute top-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

//         <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

//         {/* CONTAINER */}

//         <div
//           ref={containerRef}
//           className="relative mx-auto max-w-7xl px-6"
//         >
//           {/* HEADER */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="mb-24 text-center"
//           >
//             <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
//               About Researcher
//             </span>

//             <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
//               Pioneering the Future of
//               <br />

//               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 Molecular Science
//               </span>
//             </h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
//               Dedicated to advancing molecular biology through
//               precision research, innovation, and scientific
//               mentorship across global institutions.
//             </p>
//           </motion.div>

//           {/* MAIN SECTION */}

//           <div className="mb-28 grid items-center gap-20 lg:grid-cols-2">
//             {/* IMAGE */}

//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="relative"
//             >
//               <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-2xl">
//                 <img
//                   src={aboutImg}
//                   alt="Scientist portrait"
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

//                 <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
//                   <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">
//                     Lead Scientist
//                   </p>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-2xl">
//                     <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
//                       Neuroscientist
//                     </p>

//                     <h3 className="mt-3 text-3xl font-semibold text-white">
//                       Shipra Goswami
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* CONTENT */}

//             <div className="space-y-10">
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <h3 className="mb-8 text-4xl font-bold text-white">
//                   Biography
//                 </h3>

//                 <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
//                   <p>
//                     Dr. Shipra is a globally recognized
//                     molecular biologist whose groundbreaking
//                     research in CRISPR-based therapies has
//                     transformed the future of genetic medicine.
//                   </p>

//                   <p>
//                     With more than 150 peer-reviewed
//                     publications and 12,000+ citations, her
//                     work continues to influence modern
//                     molecular diagnostics and precision
//                     therapeutics worldwide.
//                   </p>

//                   <p>
//                     Her laboratory develops advanced
//                     gene-editing technologies focused on
//                     cancer treatment, rare genetic disorders,
//                     and next-generation therapeutic systems.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* INFO CARDS */}

//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="grid grid-cols-2 gap-5"
//               >
//                 {[
//                   ['Research Focus', 'Gene Editing'],
//                   ['Specialization', 'CRISPR Technology'],
//                   ['Institution', 'MIT Research'],
//                   ['Department', 'Molecular Biology'],
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
//                   >
//                     <p className="mb-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
//                       {item[0]}
//                     </p>

//                     <p className="font-medium text-white">
//                       {item[1]}
//                     </p>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* STATS */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="mb-28 grid grid-cols-2 gap-6 md:grid-cols-4"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/20"
//               >
//                 <div className="mb-5 flex justify-center">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
//                     {stat.icon === 'BookOpen' && (
//                       <BookOpen className="h-6 w-6" />
//                     )}

//                     {stat.icon === 'Award' && (
//                       <Award className="h-6 w-6" />
//                     )}

//                     {stat.icon === 'Calendar' && (
//                       <Calendar className="h-6 w-6" />
//                     )}

//                     {stat.icon === 'Users' && (
//                       <Users className="h-6 w-6" />
//                     )}
//                   </div>
//                 </div>

//                 <div className="mb-3 text-5xl font-bold text-white">
//                   <AnimatedCounter
//                     value={stat.value}
//                     suffix={stat.suffix}
//                   />
//                 </div>

//                 <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* TIMELINE + STORYTELLING */}

//           <div className="grid gap-16 lg:grid-cols-2">
//             {/* TIMELINE */}

//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="mb-10 text-3xl font-bold text-white">
//                 Career Timeline
//               </h3>

//               <div className="relative border-l border-white/10 pl-8">
//                 {timeline.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="relative pb-10"
//                   >
//                     <div className="absolute -left-[38px] top-2 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(0,255,255,0.8)]" />

//                     <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
//                       <span className="text-sm font-semibold text-cyan-300">
//                         {item.year}
//                       </span>

//                       <h4 className="mt-2 text-xl font-semibold text-white">
//                         {item.title}
//                       </h4>

//                       <p className="mt-2 text-sm leading-relaxed text-zinc-400">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* STORYTELLING */}

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-10">
//                 <h3 className="text-3xl font-bold text-white">
//                   Storytelling Gallery
//                 </h3>
//               </div>

//               {/* VIDEO BANNERS */}

//               <div className="space-y-6">
//                 {storytellingMedia
//                   .filter((item) => item.type === 'video')
//                   .map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       onClick={() => setSelectedMedia(item)}
//                       className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/10"
//                     >
//                       <div className="relative h-[240px] w-full overflow-hidden">
//                         <img
//                           src={item.thumbnail}
//                           alt=""
//                           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />

//                         <div className="absolute inset-0 bg-black/30" />

//                         {/* PLAY BUTTON */}

//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
//                             <Play className="ml-1 h-8 w-8 fill-white text-white" />
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//               </div>

//               {/* IMAGE CARDS */}

//               <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 {storytellingMedia
//                   .filter((item) => item.type === 'image')
//                   .map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       onClick={() => setSelectedMedia(item)}
//                       className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10"
//                     >
//                       <div className="relative h-[240px] overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt=""
//                           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />

//                         <div className="absolute inset-0 bg-black/20" />
//                       </div>
//                     </motion.div>
//                   ))}
//               </div>

//               {/* RESEARCH BOX */}

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
//               >
//                 <div className="flex items-start gap-5">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
//                     <Microscope className="h-7 w-7" />
//                   </div>

//                   <div>
//                     <p className="text-xl font-semibold text-white">
//                       Research Interests
//                     </p>

//                     <p className="mt-3 text-sm leading-relaxed text-zinc-400">
//                       CRISPR Gene Editing, Molecular
//                       Diagnostics, Precision Medicine, Rare
//                       Disease Therapeutics, and
//                       Bioengineering.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* MODAL / POPUP */}

//       <AnimatePresence>
//         {selectedMedia && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedMedia(null)}
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-black"
//             >
//               {/* CLOSE */}

//               <button
//                 onClick={() => setSelectedMedia(null)}
//                 className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xl"
//               >
//                 <X className="h-5 w-5" />
//               </button>

//               {/* VIDEO */}

//           {selectedMedia.type === 'video' ? (
//   <div className="rounded-[28px] bg-black overflow-hidden">
//     <iframe
//       width="100%"
//       height="700"
//       src={selectedMedia.youtube}
//       title="YouTube video player"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowFullScreen
//       className="w-full"
//       style={{
//         border: 'none',
//         pointerEvents: 'auto',
//       }}
//     />
//   </div>
// ) : (
//   <div className="overflow-hidden rounded-[28px]">
//     <img
//       src={selectedMedia.image}
//       alt=""
//       className="w-full object-cover"
//     />
//   </div>
// )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }





















import { useRef, useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion';

import {
  Award,
  BookOpen,
  Microscope,
  Users,
  Calendar,
  Play,
  X,
  GraduationCap,
} from 'lucide-react';

import aboutImg from '../images/heroImg/aboutImg.jpg';

/* =========================================
   STATS DATA
========================================= */
const stats = [
  { label: 'Publications', value: 98, suffix: '+', icon: 'BookOpen' },
  { label: 'Citations', value: 1200, suffix: '+', icon: 'Award' },
  { label: 'Years Experience', value: 5, suffix: '+', icon: 'Calendar' },
  { label: 'PhD Students', value: 5, suffix: '', icon: 'Users' },
];

/* =========================================
   TIMELINE DATA
========================================= */
const timeline = [
  { year: 1999, title: 'PhD in Molecular Biology', description: 'MIT — Specialized in genetic engineering' },
  { year: 2003, title: 'Postdoctoral Fellow', description: 'Stanford University — CRISPR research' },
  { year: 2007, title: 'Assistant Professor', description: 'Harvard Medical School' },
  { year: 2012, title: 'Associate Professor', description: 'Promoted with tenure' },
  { year: 2018, title: 'Full Professor', description: 'Department Chair of Molecular Biology' },
  { year: 2020, title: 'Nobel Prize Nomination', description: 'For contributions to CRISPR technology' },
  { year: 2023, title: 'Director of Research', description: 'MIT Institute for Medical Engineering' },
];

/* =========================================
   STORYTELLING MEDIA
========================================= */
const storytellingMedia = [
  { type: 'video', thumbnail: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1600&auto=format&fit=crop', youtube: 'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1' },
  { type: 'video', thumbnail: 'https://plus.unsplash.com/premium_photo-1664195074951-fe91ec456eed?w=900&auto=format&fit=crop&q=60', youtube: 'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1' },
  { type: 'image', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop' },
  { type: 'image', image: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?w=900&auto=format&fit=crop&q=60' },
];

/* =========================================
   ANIMATED COUNTER
========================================= */
function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { mass: 0.8, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => { if (isInView) spring.set(value); }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedMedia(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Light theme configuration with grid pattern and ambient glow */}
      <section id="about" className="relative overflow-hidden bg-white text-slate-800 border-t border-slate-100 py-32">
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
        
        {/* Ambient glowing blurs in sky blue and cyan */}
        <div className="absolute top-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-50/40 blur-[120px] pointer-events-none" />

        <div ref={containerRef} className="relative mx-auto max-w-7xl px-6 z-10">
          
          {/* HEADER SECTION */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 text-center">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700 shadow-sm">
              About Researcher
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Pioneering the Future of<br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Molecular Science</span>
            </h2>
          </motion.div>

          {/* MAIN PROFILE ROW */}
          <div className="mb-28 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] relative z-10 max-w-6xl mx-auto">
            
            {/* PORTRAIT CONTAINER */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-[32px] border border-sky-100 bg-white p-2.5 shadow-[0_15px_40px_rgba(186,230,253,0.12)] transition-all duration-500 hover:border-sky-300">
                <div className="h-full w-full overflow-hidden rounded-[22px] relative bg-slate-50">
                  <img
                    src={aboutImg}
                    alt="Dr. Shipra Goswami Executive portrait"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* BIOGRAPHY STATEMENT */}
            <div className="space-y-6 text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-[2px] w-8 bg-sky-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Lead Investigator</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl lg:text-4xl">Dr. Shipra Goswami</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mt-1">Molecular Biologist & Neuroscientist</p>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 font-medium">
                  <p>Dr. Shipra is a globally recognized molecular biologist whose groundbreaking research in CRISPR-based therapies has transformed the future of genetic medicine.</p>
                  <p>With more than <strong className="text-slate-950 font-bold">150 peer-reviewed publications</strong> and <strong className="text-slate-950 font-bold">12,000+ citations</strong>, her work continues to influence modern diagnostics and medicine worldwide.</p>
                </div>
              </motion.div>

              {/* METADATA BADGES */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {[
                  ['Research Focus', 'Gene Editing'], ['Specialization', 'CRISPR Tech'], ['Institution', 'MIT Research'], ['Department', 'Molecular Bio']
                ].map((item, index) => (
                  <div key={index} className="rounded-xl border border-sky-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{item[0]}</p>
                    <p className="text-xs font-bold text-slate-800 mt-0.5">{item[1]}</p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* STATS COUNTER SECTION */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-28 grid grid-cols-2 gap-5 md:grid-cols-4 relative z-10">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group rounded-3xl border border-sky-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(186,230,253,0.1)] transition-all duration-300 hover:border-sky-300 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shadow-inner">
                    {stat.icon === 'BookOpen' && <BookOpen className="h-5 w-5" />}
                    {stat.icon === 'Award' && <Award className="h-5 w-5" />}
                    {stat.icon === 'Calendar' && <Calendar className="h-5 w-5" />}
                    {stat.icon === 'Users' && <Users className="h-5 w-5" />}
                  </div>
                </div>
                <div className="mb-1 text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* TIMELINE + STORYTELLING GALLERY */}
          <div className="grid gap-20 lg:grid-cols-[1fr,0.9fr] relative z-10">
            
            {/* TIMELINE SECTION */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-10 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl text-left">Career Timeline</h3>
              <div className="relative border-l-[2px] border-sky-100 pl-8 ml-3 space-y-10">
                {timeline.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="relative">
                    <div className="absolute -left-[43px] top-1.5 h-5 w-5 rounded-full border-2 border-white bg-sky-500 shadow-sm" />
                    
                    {/* Sky blue interaction card with light background */}
                    <div className="rounded-2xl border border-sky-100 bg-sky-50/90 p-5 shadow-sm transition-colors hover:bg-white border-sky-100/60 text-left">
                      <span className="text-xs font-bold text-sky-600 bg-white px-2.5 py-1 rounded-full border border-sky-100 shadow-inner">{item.year}</span>
                      <h4 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* GALLERY MATRIX — Clean layout without dark shadows */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-10 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl text-left">Storytelling Gallery</h3>
              
              {/* VIDEO GRID CARDS */}
              <div className="space-y-5">
                {storytellingMedia.filter((item) => item.type === 'video').map((item, index) => (
                  <div key={index} onClick={() => setSelectedMedia(item)} className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-sky-100 bg-white p-2 shadow-sm transition-all hover:border-sky-300">
                    <div className="relative h-[200px] w-full overflow-hidden rounded-[18px] bg-slate-50">
                      <img src={item.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                      
                      {/* Clean overlay effect without dark tint */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky-100 text-sky-600 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:text-sky-500">
                          <Play className="ml-0.5 h-6 w-6 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* IMAGE THUMBNAILS GRID */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                {storytellingMedia.filter((item) => item.type === 'image').map((item, index) => (
                  <div key={index} onClick={() => setSelectedMedia(item)} className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-sky-100 bg-white p-2 shadow-sm transition-all hover:border-sky-300">
                    <div className="relative h-[140px] overflow-hidden rounded-[18px] bg-slate-50">
                      <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* RESEARCH INTERESTS CARD */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/90 p-6 md:p-8 border-sky-100/60 shadow-inner text-left">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 border border-sky-100 shadow-sm"><Microscope className="h-5 w-5 stroke-[2.5]" /></div>
                  <div>
                    <p className="text-lg font-extrabold text-slate-950">Research Interests</p>
                    <p className="mt-1 text-sm text-slate-500 font-semibold leading-relaxed">CRISPR Gene Editing, Molecular Diagnostics, Precision Medicine, Rare Disease Therapeutics, and Bioengineering.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* POPUP MODAL WRAPPER — Light Glass Theme */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 md:p-8" style={{ isolation: 'isolate' }}>
            {/* Ultra clean translucent backdrop blur instead of slate tint */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMedia(null)} className="fixed inset-0 bg-sky-100/20 backdrop-blur-md" style={{ zIndex: -1 }} />
            
            {/* Modal content layer */}
            <motion.div initial={{ scale: 0.98, opacity: 0, y: 15 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.98, opacity: 0, y: 15 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-sky-200 bg-white p-2.5 shadow-2xl shadow-sky-100/80" style={{ zIndex: 2 }}>
              
              {/* White close button accent */}
              <button onClick={() => setSelectedMedia(null)} className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-md hover:text-sky-500 hover:border-sky-300 transition-all duration-300">
                <X className="h-4.5 w-4.5 stroke-[2.5]" />
              </button>
              
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-50 shadow-inner">
                  <iframe width="100%" height="100%" src={selectedMedia.youtube} title="YouTube player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none w-full h-full" />
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl max-h-[75vh] bg-sky-50/20 flex items-center justify-center">
                  <img src={selectedMedia.image} alt="Expanded presentation detailed layout view" className="w-full h-full object-contain mx-auto rounded-xl shadow-inner" />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}