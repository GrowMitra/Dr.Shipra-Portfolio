// import { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// import {
//   ExternalLink,
//   ArrowUpRight,
// } from 'lucide-react';

// import { Project } from '../../types';

// const categories = [
//   'All',
//   'Gene Therapy',
//   'Diagnostics',
//   'Cancer Research',
//   'Rare Diseases',
// ];

// const projects: Project[] = [
//   {
//     id: '1',
//     title:
//       'CRISPR-based Gene Therapy for Sickle Cell Disease',
//     field: 'Gene Therapy',
//     summary:
//       'Developing advanced CRISPR delivery systems for safer and more efficient treatment of sickle cell anemia.',
//     methodologies: [
//       'CRISPR-Cas9',
//       'Stem Cells',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/5182442/pexels-photo-5182442.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2024,
//     category: 'Gene Therapy',
//   },

//   {
//     id: '2',
//     title:
//       'Rapid Diagnostic Platform for COVID-19 Variants',
//     field: 'Diagnostics',
//     summary:
//       'Point-of-care diagnostic platform capable of detecting multiple COVID variants within minutes.',
//     methodologies: [
//       'PCR',
//       'Machine Learning',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2023,
//     category: 'Diagnostics',
//   },

//   {
//     id: '3',
//     title:
//       'Immunotherapy Enhancement for Solid Tumors',
//     field: 'Cancer Research',
//     summary:
//       'Enhancing CAR-T cell therapy effectiveness against resistant solid tumors.',
//     methodologies: [
//       'CAR-T',
//       'CRISPR',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2023,
//     category: 'Cancer Research',
//   },

//   {
//     id: '4',
//     title:
//       'Gene Editing for Duchenne Muscular Dystrophy',
//     field: 'Rare Diseases',
//     summary:
//       'Precision gene editing solutions targeting mutations causing DMD.',
//     methodologies: [
//       'Prime Editing',
//       'AAV Delivery',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2022,
//     category: 'Rare Diseases',
//   },

//   {
//     id: '5',
//     title:
//       'Precision Medicine Platform for Cancer Treatment',
//     field: 'Cancer Research',
//     summary:
//       'AI-driven platform analyzing tumor genetics for personalized treatments.',
//     methodologies: [
//       'AI/ML',
//       'NGS',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2022,
//     category: 'Cancer Research',
//   },

//   {
//     id: '6',
//     title:
//       'CRISPR Safety & Off-target Detection',
//     field: 'Gene Therapy',
//     summary:
//       'Building advanced safety systems for CRISPR editing with minimal off-target effects.',
//     methodologies: [
//       'Bioinformatics',
//       'NGS',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/5182445/pexels-photo-5182445.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2021,
//     category: 'Gene Therapy',
//   },

//   {
//     id: '7',
//     title:
//       'AI Powered Drug Discovery Research',
//     field: 'Diagnostics',
//     summary:
//       'Using AI models to accelerate molecular drug discovery and predictive analysis.',
//     methodologies: [
//       'AI',
//       'Deep Learning',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2021,
//     category: 'Diagnostics',
//   },

//   {
//     id: '8',
//     title:
//       'Genomic Biomarker Identification',
//     field: 'Cancer Research',
//     summary:
//       'Discovering biomarkers for early cancer diagnosis using genomic sequencing.',
//     methodologies: [
//       'Genomics',
//       'Biomarkers',
//     ],
//     thumbnail:
//       'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     publicationLink: '#',
//     year: 2020,
//     category: 'Cancer Research',
//   },
// ];

// export default function Projects() {
//   const [activeCategory, setActiveCategory] =
//     useState('All');

//   const [showAllProjects, setShowAllProjects] =
//     useState(false);

//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   const isInView = useInView(
//     containerRef,
//     {
//       once: true,
//       margin: '-100px',
//     }
//   );

//   const filteredProjects =
//     projects.filter(
//       (project) =>
//         activeCategory === 'All' ||
//         project.category === activeCategory
//     );

//   const visibleProjects = showAllProjects
//     ? filteredProjects
//     : filteredProjects.slice(0, 6);

//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden py-32"
//     >
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 bg-[#050816]" />

//       <div className="absolute inset-0 scientific-grid opacity-[0.03]" />

//       <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

//       {/* CONTENT */}

//       <div
//         ref={containerRef}
//         className="relative mx-auto max-w-7xl px-6"
//       >
//         {/* HEADER */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-16 max-w-4xl text-center"
//         >
//           <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
//             Research Projects
//           </div>

//           <h2 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
//             Selected
//             <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
//               {' '}
//               Works.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
//             A curated collection of
//             biomedical and molecular biology
//             research projects focused on
//             innovation and scientific impact.
//           </p>
//         </motion.div>

//         {/* FILTER BUTTONS */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//             delay: 0.1,
//           }}
//           className="mb-14 flex flex-wrap items-center justify-center gap-3"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setActiveCategory(
//                   category
//                 );

//                 setShowAllProjects(
//                   false
//                 );
//               }}
//               className={`rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'border-cyan-400/30 bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.2)]'
//                   : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* PROJECT GRID */}

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {visibleProjects.map(
//             (project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay:
//                     index * 0.08,
//                 }}
//                 whileHover={{
//                   y: -6,
//                 }}
//                 className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
//               >
//                 {/* IMAGE */}

//                 <div className="relative aspect-[16/10] overflow-hidden">
//                   <img
//                     src={
//                       project.thumbnail
//                     }
//                     alt={project.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

//                   {/* CATEGORY */}

//                   <div className="absolute left-4 top-4">
//                     <span className="rounded-full border border-cyan-400/20 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-xl">
//                       {
//                         project.category
//                       }
//                     </span>
//                   </div>
//                 </div>

//                 {/* CONTENT */}

//                 <div className="p-5">
//                   <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
//                     {project.year}
//                   </p>

//                   <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
//                     {project.title}
//                   </h3>

//                   <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
//                     {project.summary}
//                   </p>

//                   {/* TAGS */}

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {project.methodologies
//                       .slice(0, 2)
//                       .map(
//                         (method) => (
//                           <span
//                             key={
//                               method
//                             }
//                             className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-400"
//                           >
//                             {method}
//                           </span>
//                         )
//                       )}
//                   </div>

//                   {/* FOOTER */}

//                   <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
//                     <a
//                       href={
//                         project.publicationLink
//                       }
//                       className="group/link inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:gap-3"
//                     >
//                       View Project

//                       <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//                     </a>

//                     <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
//                       <ArrowUpRight className="h-4 w-4" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* GLOW */}

//                 <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                   <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
//                 </div>
//               </motion.div>
//             )
//           )}
//         </div>

//         {/* VIEW MORE BUTTON */}

//         {filteredProjects.length > 6 && (
//           <div className="mt-14 flex justify-center">
//             <button
//               onClick={() =>
//                 setShowAllProjects(
//                   !showAllProjects
//                 )
//               }
//               className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
//             >
//               {showAllProjects
//                 ? 'Show Less'
//                 : 'View More Projects'}

//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }











import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

const categories = [
  'All',
  'Gene Therapy',
  'Diagnostics',
  'Cancer Research',
  'Rare Diseases',
];

const projects: Project[] = [
  {
    id: '1',
    title: 'CRISPR-based Gene Therapy for Sickle Cell Disease',
    field: 'Gene Therapy',
    summary:
      'Developing advanced CRISPR delivery systems for safer and more efficient treatment of sickle cell anemia.',
    methodologies: ['CRISPR-Cas9', 'Stem Cells'],
    thumbnail:
      'https://images.pexels.com/photos/5182442/pexels-photo-5182442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2024,
    category: 'Gene Therapy',
  },
  {
    id: '2',
    title: 'Rapid Diagnostic Platform for COVID-19 Variants',
    field: 'Diagnostics',
    summary:
      'Point-of-care diagnostic platform capable of detecting multiple COVID variants within minutes.',
    methodologies: ['PCR', 'Machine Learning'],
    thumbnail:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2023,
    category: 'Diagnostics',
  },
  {
    id: '3',
    title: 'Immunotherapy Enhancement for Solid Tumors',
    field: 'Cancer Research',
    summary:
      'Enhancing CAR-T cell therapy effectiveness against resistant solid tumors.',
    methodologies: ['CAR-T', 'CRISPR'],
    thumbnail:
      'https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2023,
    category: 'Cancer Research',
  },
  {
    id: '4',
    title: 'Gene Editing for Duchenne Muscular Dystrophy',
    field: 'Rare Diseases',
    summary:
      'Precision gene editing solutions targeting mutations causing DMD.',
    methodologies: ['Prime Editing', 'AAV Delivery'],
    thumbnail:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2022,
    category: 'Rare Diseases',
  },
  {
    id: '5',
    title: 'Precision Medicine Platform for Cancer Treatment',
    field: 'Cancer Research',
    summary:
      'AI-driven platform analyzing tumor genetics for personalized treatments.',
    methodologies: ['AI/ML', 'NGS'],
    thumbnail:
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2022,
    category: 'Cancer Research',
  },
  {
    id: '6',
    title: 'CRISPR Safety & Off-target Detection',
    field: 'Gene Therapy',
    summary:
      'Building advanced safety systems for CRISPR editing with minimal off-target effects.',
    methodologies: ['Bioinformatics', 'NGS'],
    thumbnail:
      'https://images.pexels.com/photos/5182445/pexels-photo-5182445.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2021,
    category: 'Gene Therapy',
  },
  {
    id: '7',
    title: 'AI Powered Drug Discovery Research',
    field: 'Diagnostics',
    summary:
      'Using AI models to accelerate molecular drug discovery and predictive analysis.',
    methodologies: ['AI', 'Deep Learning'],
    thumbnail:
      'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2021,
    category: 'Diagnostics',
  },
  {
    id: '8',
    title: 'Genomic Biomarker Identification',
    field: 'Cancer Research',
    summary:
      'Discovering biomarkers for early cancer diagnosis using genomic sequencing.',
    methodologies: ['Genomics', 'Biomarkers'],
    thumbnail:
      'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2020,
    category: 'Cancer Research',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-32 text-slate-800 border-t border-slate-100"
    >
      {/* PURE LIGHT MATRIX MESH BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
      
      {/* Ambient Soft Sky Blue Aura Blurs */}
      <div className="absolute right-[-100px] top-[10%] h-[600px] w-[600px] rounded-full bg-sky-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-cyan-50/50 blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="relative mx-auto max-w-7xl px-6 z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
            Research Projects
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Selected
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {' '}
              Works.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
            A curated collection of biomedical and molecular biology research projects focused on innovation and scientific impact.
          </p>
        </motion.div>

        {/* FILTER BUTTONS (Translucent Sky Pill Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAllProjects(false);
              }}
              className={`rounded-2xl border px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? 'border-sky-300 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_10px_25px_rgba(14,165,233,0.2)]'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[40px] border border-sky-100 bg-white p-3 shadow-[0_15px_40px_rgba(186,230,253,0.15)] transition-all duration-500 hover:border-sky-300 hover:shadow-[0_25px_50px_rgba(14,165,233,0.18)]"
            >
              {/* IMAGE CONTAINER — 100% CLEAR VISIBILITY */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-slate-50">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* NO BLACK/SLATE TINT GRADIENT COATINGS AT ALL */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* CATEGORY TAG CONTAINER */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="rounded-full border border-sky-100 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-sky-800 shadow-md backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT SIDE — PREMIUM SKY BLUE FLOATING BASE BOX */}
              <div className="mt-4 p-5 rounded-[28px] bg-sky-50/90 border border-sky-100/40 transition-colors group-hover:bg-white text-left">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Project Dataset — {project.year}
                </p>

                <h3 className="line-clamp-2 text-xl font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500 font-medium">
                  {project.summary}
                </p>

                {/* METHODOLOGIES TAGS */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.methodologies.slice(0, 2).map((method) => (
                    <span
                      key={method}
                      className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-sky-700 border border-sky-100"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                {/* FOOTER ACTION PANEL */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-5">
                  <a
                    href={project.publicationLink}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 transition-all duration-300 hover:text-cyan-600"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
                  </a>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-100 bg-white text-sky-600 shadow-sm transition-transform group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {filteredProjects.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-sky-200 bg-white px-8 py-4 shadow-[0_12px_30px_rgba(186,230,253,0.25)] transition-all duration-300 hover:border-sky-400 hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 group-hover:text-sky-800 transition-colors relative z-10">
                {showAllProjects ? 'Show Less Works' : 'View More Projects'}
              </span>
              <ArrowUpRight className="h-4 w-4 text-sky-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5] relative z-10" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}