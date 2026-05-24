// import { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { ExternalLink, BookOpen, Tag, ArrowUpRight } from 'lucide-react';
// import { Project } from '../../types';

// const categories = ['All', 'Gene Therapy', 'Diagnostics', 'Cancer Research', 'Rare Diseases'];

// const projects: Project[] = [
//   {
//     id: '1',
//     title: 'CRISPR-based Gene Therapy for Sickle Cell Disease',
//     field: 'Gene Therapy',
//     summary: 'Developing novel CRISPR delivery systems for treating sickle cell anemia with improved safety profiles.',
//     methodologies: ['CRISPR-Cas9', 'Viral Vectors', 'Stem Cell Therapy'],
//     thumbnail: 'https://images.pexels.com/photos/5182442/pexels-photo-5182442.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2024,
//     category: 'Gene Therapy',
//   },
//   {
//     id: '2',
//     title: 'Rapid Diagnostic Platform for COVID-19 Variants',
//     field: 'Diagnostics',
//     summary: 'Created a point-of-care diagnostic tool capable of detecting and distinguishing COVID-19 variants within 15 minutes.',
//     methodologies: ['PCR', 'LAMP Analysis', 'Machine Learning'],
//     thumbnail: 'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2023,
//     category: 'Diagnostics',
//   },
//   {
//     id: '3',
//     title: 'Immunotherapy Enhancement for Solid Tumors',
//     field: 'Cancer Research',
//     summary: 'Researching novel approaches to enhance CAR-T cell therapy effectiveness against solid tumor cancers.',
//     methodologies: ['CAR-T', 'CRISPR', 'Immune Profiling'],
//     thumbnail: 'https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2023,
//     category: 'Cancer Research',
//   },
//   {
//     id: '4',
//     title: 'Gene Editing Solutions for Duchenne Muscular Dystrophy',
//     field: 'Rare Diseases',
//     summary: 'Developing gene editing approaches to correct mutations causing DMD, now in clinical trials.',
//     methodologies: ['CRISPR-Prime', 'AAV Delivery', 'Animal Models'],
//     thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2022,
//     category: 'Rare Diseases',
//   },
//   {
//     id: '5',
//     title: 'Precision Medicine Platform for Cancer Treatment',
//     field: 'Cancer Research',
//     summary: 'AI-driven platform analyzing tumor genetics to recommend personalized treatment protocols.',
//     methodologies: ['NGS', 'AI/ML', 'Biomarker Analysis'],
//     thumbnail: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2022,
//     category: 'Cancer Research',
//   },
//   {
//     id: '6',
//     title: 'CRISPR Safety Mechanisms and Off-target Detection',
//     field: 'Gene Therapy',
//     summary: 'Developing comprehensive safety systems for CRISPR gene editing with minimal off-target effects.',
//     methodologies: ['CRISPR-Safety', 'NGS', 'Bioinformatics'],
//     thumbnail: 'https://images.pexels.com/photos/5182445/pexels-photo-5182445.jpeg?auto=compress&cs=tinysrgb&w=800',
//     publicationLink: '#',
//     year: 2021,
//     category: 'Gene Therapy',
//   },
// ];

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [expandedProject, setExpandedProject] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: '-100px' });

//   const filteredProjects = projects.filter(
//     (project) => activeCategory === 'All' || project.category === activeCategory
//   );

//   return (
//     <section id="projects" className="relative py-32 overflow-hidden">
//       <div className="absolute inset-0 scientific-grid opacity-30" />
//       <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-3xl translate-x-1/2" />

//       <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6">
//             Projects
//           </span>
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="text-white">Research</span>{' '}
//             <span className="gradient-text">Portfolio</span>
//           </h2>
//           <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
//             Groundbreaking research projects advancing the frontiers of molecular biology and genetic medicine.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === category
//                   ? 'bg-accent-cyan text-primary'
//                   : 'glass text-zinc-400 hover:text-white hover:border-accent-cyan/30'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="relative rounded-2xl overflow-hidden glass hover:border-accent-cyan/30 transition-all h-full">
//                 <div className="relative aspect-[16/9] overflow-hidden">
//                   <img
//                     src={project.thumbnail}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

//                   <div className="absolute top-4 left-4 flex items-center gap-2">
//                     <span className="px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan text-xs font-medium backdrop-blur-sm">
//                       {project.category}
//                     </span>
//                     <span className="px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs font-medium backdrop-blur-sm">
//                       {project.year}
//                     </span>
//                   </div>

//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     className="absolute inset-0 flex items-center justify-center"
//                   >
//                     <div className="w-14 h-14 rounded-full glass flex items-center justify-center">
//                       <ArrowUpRight className="w-6 h-6 text-accent-cyan" />
//                     </div>
//                   </motion.div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-start justify-between gap-4 mb-4">
//                     <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
//                       {project.title}
//                     </h3>
//                   </div>

//                   <p className="text-zinc-500 text-sm mb-4">{project.field}</p>
//                   <p className="text-zinc-400 text-sm leading-relaxed mb-6">
//                     {project.summary}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.methodologies.slice(0, 3).map((method) => (
//                       <span
//                         key={method}
//                         className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-500 text-xs"
//                       >
//                         {method}
//                       </span>
//                     ))}
//                   </div>

//                   {project.publicationLink && (
//                     <a
//                       href={project.publicationLink}
//                       className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium hover:gap-3 transition-all"
//                     >
//                       <BookOpen className="w-4 h-4" />
//                       View Publication
//                       <ExternalLink className="w-3.5 h-3.5" />
//                     </a>
//                   )}
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mt-16"
//         >
//           <button className="px-8 py-4 rounded-xl glass text-white font-medium hover:border-accent-cyan/30 transition-all inline-flex items-center gap-3 group">
//             View All Research
//             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

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
    title:
      'CRISPR-based Gene Therapy for Sickle Cell Disease',
    field: 'Gene Therapy',
    summary:
      'Developing advanced CRISPR delivery systems for safer and more efficient treatment of sickle cell anemia.',
    methodologies: [
      'CRISPR-Cas9',
      'Stem Cells',
    ],
    thumbnail:
      'https://images.pexels.com/photos/5182442/pexels-photo-5182442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2024,
    category: 'Gene Therapy',
  },

  {
    id: '2',
    title:
      'Rapid Diagnostic Platform for COVID-19 Variants',
    field: 'Diagnostics',
    summary:
      'Point-of-care diagnostic platform capable of detecting multiple COVID variants within minutes.',
    methodologies: [
      'PCR',
      'Machine Learning',
    ],
    thumbnail:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2023,
    category: 'Diagnostics',
  },

  {
    id: '3',
    title:
      'Immunotherapy Enhancement for Solid Tumors',
    field: 'Cancer Research',
    summary:
      'Enhancing CAR-T cell therapy effectiveness against resistant solid tumors.',
    methodologies: [
      'CAR-T',
      'CRISPR',
    ],
    thumbnail:
      'https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2023,
    category: 'Cancer Research',
  },

  {
    id: '4',
    title:
      'Gene Editing for Duchenne Muscular Dystrophy',
    field: 'Rare Diseases',
    summary:
      'Precision gene editing solutions targeting mutations causing DMD.',
    methodologies: [
      'Prime Editing',
      'AAV Delivery',
    ],
    thumbnail:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2022,
    category: 'Rare Diseases',
  },

  {
    id: '5',
    title:
      'Precision Medicine Platform for Cancer Treatment',
    field: 'Cancer Research',
    summary:
      'AI-driven platform analyzing tumor genetics for personalized treatments.',
    methodologies: [
      'AI/ML',
      'NGS',
    ],
    thumbnail:
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2022,
    category: 'Cancer Research',
  },

  {
    id: '6',
    title:
      'CRISPR Safety & Off-target Detection',
    field: 'Gene Therapy',
    summary:
      'Building advanced safety systems for CRISPR editing with minimal off-target effects.',
    methodologies: [
      'Bioinformatics',
      'NGS',
    ],
    thumbnail:
      'https://images.pexels.com/photos/5182445/pexels-photo-5182445.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2021,
    category: 'Gene Therapy',
  },

  {
    id: '7',
    title:
      'AI Powered Drug Discovery Research',
    field: 'Diagnostics',
    summary:
      'Using AI models to accelerate molecular drug discovery and predictive analysis.',
    methodologies: [
      'AI',
      'Deep Learning',
    ],
    thumbnail:
      'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2021,
    category: 'Diagnostics',
  },

  {
    id: '8',
    title:
      'Genomic Biomarker Identification',
    field: 'Cancer Research',
    summary:
      'Discovering biomarkers for early cancer diagnosis using genomic sequencing.',
    methodologies: [
      'Genomics',
      'Biomarkers',
    ],
    thumbnail:
      'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicationLink: '#',
    year: 2020,
    category: 'Cancer Research',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const [showAllProjects, setShowAllProjects] =
    useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const isInView = useInView(
    containerRef,
    {
      once: true,
      margin: '-100px',
    }
  );

  const filteredProjects =
    projects.filter(
      (project) =>
        activeCategory === 'All' ||
        project.category === activeCategory
    );

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 scientific-grid opacity-[0.03]" />

      <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* CONTENT */}

      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* HEADER */}

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
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
            Research Projects
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
            Selected
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              {' '}
              Works.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A curated collection of
            biomedical and molecular biology
            research projects focused on
            innovation and scientific impact.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}

        <motion.div
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
            duration: 0.6,
            delay: 0.1,
          }}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(
                  category
                );

                setShowAllProjects(
                  false
                );
              }}
              className={`rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-cyan-400/30 bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                  : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map(
            (project, index) => (
              <motion.div
                key={project.id}
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
                  duration: 0.5,
                  delay:
                    index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
              >
                {/* IMAGE */}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={
                      project.thumbnail
                    }
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-cyan-400/20 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-xl">
                      {
                        project.category
                      }
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {project.year}
                  </p>

                  <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {project.summary}
                  </p>

                  {/* TAGS */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.methodologies
                      .slice(0, 2)
                      .map(
                        (method) => (
                          <span
                            key={
                              method
                            }
                            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-400"
                          >
                            {method}
                          </span>
                        )
                      )}
                  </div>

                  {/* FOOTER */}

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <a
                      href={
                        project.publicationLink
                      }
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:gap-3"
                    >
                      View Project

                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* GLOW */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* VIEW MORE BUTTON */}

        {filteredProjects.length > 6 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() =>
                setShowAllProjects(
                  !showAllProjects
                )
              }
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              {showAllProjects
                ? 'Show Less'
                : 'View More Projects'}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}