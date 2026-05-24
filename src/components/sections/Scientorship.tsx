// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import {
//   Mail,
//   Linkedin,
//   Twitter,
//   GraduationCap,
//   Heart,
//   Users,
//   ArrowUpRight,
// } from 'lucide-react';
// import { TeamMember } from '../../types';
// import img1 from '../images/sciencetorship_img/Sciencetorship1.png'
// import img2 from '../images/sciencetorship_img/Sciencetorship2.png'
// import img3 from '../images/sciencetorship_img/Sciencetorship3.png'
// import img4 from '../images/sciencetorship_img/Sciencetorship4.png'
// import img5 from '../images/sciencetorship_img/Sciencetorship5.avif'


// /* =========================================
//    TEAM DATA
// ========================================= */

// const team: TeamMember[] = [
//   {
//     id: '1',
//     name: 'Amanda Liu',
//     role: 'BS Biotechnology',
//     bio: 'Leading advanced CRISPR therapeutic systems and precision gene editing programs focused on rare genetic disorders.',
//     expertise: ['CRISPR', 'Gene Therapy', 'Stem Cell Research'],
//     image:img1,
//     social: {
//       linkedin: 'https://linkedin.com',
//       twitter: 'https://twitter.com',
//       email: 'michael@research.edu',
//     },
//   },

//   {
//     id: '2',
//     name: 'Priscilla Jeyaraj',
//     role: 'PhD Medicine Candidate',
//     bio: 'Focused on next-generation molecular diagnostics and AI-assisted biomedical detection systems.',
//     expertise: ['Diagnostics', 'PCR', 'Microfluidics'],
//     image:img2,
//     social: {
//       linkedin: 'https://linkedin.com',
//       twitter: 'https://twitter.com',
//       email: 'sarah@research.edu',
//     },
//   },

//   {
//     id: '3',
//     name: 'Audrey Marcelyn',
//     role: 'BSc Biomedical Science',
//     bio: 'Researching immunotherapy systems and computational oncology for precision cancer treatment.',
//     expertise: ['Cancer Research', 'Immunotherapy', 'Flow Cytometry'],
//     image:img3,
//     social: {
//       linkedin: 'https://linkedin.com',
//       twitter: 'https://twitter.com',
//       email: 'james@research.edu',
//     },
//   },

//   {
//     id: '4',
//     name: 'Shreya Dadwal',
//     role: 'Third-year student at the University of Manchester,UK ',
//     bio: 'Building genomic intelligence systems using computational biology and bioinformatics pipelines.',
//     expertise: ['Bioinformatics', 'NGS Analysis', 'Python'],
//     image:img4,
//     social: {
//       linkedin: 'https://linkedin.com',
//       twitter: 'https://twitter.com',
//       email: 'aisha@research.edu',
//     },
//   },

//   {
//     id: '5',
//     name: 'Student outreach at the 4-H Camp, California, US',
//     role: '',
//     bio: 'Managing advanced laboratory systems, compliance frameworks, and biotechnology infrastructure.',
//     expertise: ['Lab Management', 'QC', 'Regulatory Affairs'],
//     image:img5,
//     social: {
//       linkedin: 'https://linkedin.com',
//       twitter: 'https://twitter.com',
//       email: 'ryan@research.edu',
//     },
//   },
// ];

// /* =========================================
//    COMPONENT
// ========================================= */

// export default function Scientorship() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useInView(containerRef, {
//     once: true,
//     margin: '-100px',
//   });

//   return (
//     <section
//       id="scientorship"
//       className="relative overflow-hidden bg-[#050816] py-32"
//     >
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 scientific-grid opacity-20" />

//       <div className="absolute left-[-250px] top-[-100px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="absolute bottom-[-250px] right-[-150px] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[140px]" />

//       {/* CONTAINER */}

//       <div
//         ref={containerRef}
//         className="relative mx-auto max-w-7xl px-6"
//       >
//         {/* HEADER */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-24 max-w-4xl text-center"
//         >
//           <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-md">
//             Research Team
//           </span>

//           <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
//             Building Future
//             <br />

//             <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//               Scientific Leaders
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
//             A multidisciplinary team of researchers, scientists,
//             and innovators advancing molecular biology,
//             computational medicine, and biotechnology systems.
//           </p>
//         </motion.div>

//         {/* PHILOSOPHY SECTION */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative mb-20 overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />

//           <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
//             <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
//               <GraduationCap className="h-12 w-12" />
//             </div>

//             <div className="flex-1">
//               <h3 className="text-3xl font-bold text-white md:text-4xl">
//                 Mentorship Philosophy
//               </h3>

//               <p className="mt-5 max-w-4xl text-lg leading-[2] text-zinc-400">
//                 Every transformative discovery begins with
//                 curiosity, discipline, and mentorship. Our
//                 mission is to cultivate world-class scientific
//                 thinkers capable of redefining the future of
//                 molecular medicine and biotechnology innovation.
//               </p>

//               <div className="mt-6 flex items-center gap-3">
//                 <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.9)]" />

//                 <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
//                   Dr. Elena Chen
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* TEAM GRID */}

//         {/* TEAM GRID */}

// <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//   {team.map((member, index) => (
//     <motion.div
//       key={member.id}
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.08,
//       }}
//       className="
//         group relative overflow-hidden rounded-[30px]
//         border border-white/10
//         bg-white/[0.04]
//         backdrop-blur-xl
//         transition-all duration-500

//         hover:border-cyan-400/30
//         hover:-translate-y-2

//         shadow-[0_0_40px_rgba(0,0,0,0.35)]
//         hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
//       "
//     >
//       {/* LIGHT EFFECT */}

//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//       {/* IMAGE */}

//       <div className="relative h-[320px] overflow-hidden">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* OVERLAY */}

//         <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />

//         {/* SOCIAL ICONS */}

//         <div className="absolute right-5 top-5 flex flex-col gap-3">
//           <a
//             href={member.social.linkedin}
//             target="_blank"
//             className="
//               flex h-10 w-10 items-center justify-center
//               rounded-full border border-white/15
//               bg-black/40 text-white backdrop-blur-xl
//               transition-all duration-300

//               hover:scale-110
//               hover:border-cyan-300
//               hover:text-cyan-300
//               hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
//             "
//           >
//             <Linkedin className="h-4 w-4" />
//           </a>

// {/* X ICON */}

// <a
//   href={member.social.twitter}
//   target="_blank"
//   className="
//     flex h-10 w-10 items-center justify-center
//     rounded-full border border-white/15
//     bg-black/40 text-white backdrop-blur-xl
//     transition-all duration-300

//     hover:scale-110
//     hover:border-cyan-300
//     hover:text-cyan-300
//     hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
//   "
// >
//   <span className="text-[15px] font-bold">
//     𝕏
//   </span>
// </a>

//           <a
//             href={`mailto:${member.social.email}`}
//             className="
//               flex h-10 w-10 items-center justify-center
//               rounded-full border border-white/15
//               bg-black/40 text-white backdrop-blur-xl
//               transition-all duration-300

//               hover:scale-110
//               hover:border-cyan-300
//               hover:text-cyan-300
//               hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
//             "
//           >
//             <Mail className="h-4 w-4" />
//           </a>
//         </div>
//       </div>

//       {/* CONTENT */}

//       <div className="relative p-6">
//         <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
//           {member.name}
//         </h3>

//         <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300">
//           {member.role}
//         </p>

//         <p className="mt-4 leading-relaxed text-zinc-400 text-[15px]">
//           {member.bio}
//         </p>
//       </div>
//     </motion.div>
//   ))}
// </div>

//         {/* STATS */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-24 grid gap-6 md:grid-cols-3"
//         >
//           {[
//             {
//               icon: GraduationCap,
//               label: 'Researchers Mentored',
//               value: '45+',
//             },

//             {
//               icon: Users,
//               label: 'Active Team Members',
//               value: '24',
//             },

//             {
//               icon: Heart,
//               label: 'Global Collaborations',
//               value: '98+',
//             },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//               className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5" />

//               <div className="relative flex items-center gap-5">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
//                   <stat.icon className="h-8 w-8" />
//                 </div>

//                 <div>
//                   <div className="text-4xl font-bold text-white">
//                     {stat.value}
//                   </div>

//                   <p className="mt-1 text-zinc-400">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  GraduationCap,
  Heart,
  Users,
} from 'lucide-react';
import { TeamMember } from '../../types';
import img1 from '../images/sciencetorship_img/Sciencetorship1.png';
import img2 from '../images/sciencetorship_img/Sciencetorship2.png';
import img3 from '../images/sciencetorship_img/Sciencetorship3.png';
import img4 from '../images/sciencetorship_img/Sciencetorship4.png';
import img5 from '../images/sciencetorship_img/Sciencetorship5.avif';

/* =========================================
   TEAM DATA
========================================= */
const team: TeamMember[] = [
  {
    id: '1',
    name: 'Amanda Liu',
    role: 'BS Biotechnology',
    bio: 'Leading advanced CRISPR therapeutic systems and precision gene editing programs focused on rare genetic disorders.',
    expertise: ['CRISPR', 'Gene Therapy', 'Stem Cell Research'],
    image: img1,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'michael@research.edu',
    },
  },
  {
    id: '2',
    name: 'Priscilla Jeyaraj',
    role: 'PhD Medicine Candidate',
    bio: 'Focused on next-generation molecular diagnostics and AI-assisted biomedical detection systems.',
    expertise: ['Diagnostics', 'PCR', 'Microfluidics'],
    image: img2,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'sarah@research.edu',
    },
  },
  {
    id: '3',
    name: 'Audrey Marcelyn',
    role: 'BSc Biomedical Science',
    bio: 'Researching immunotherapy systems and computational oncology for precision cancer treatment.',
    expertise: ['Cancer Research', 'Immunotherapy', 'Flow Cytometry'],
    image: img3,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'james@research.edu',
    },
  },
  {
    id: '4',
    name: 'Shreya Dadwal',
    role: 'Third-year student at the University of Manchester, UK',
    bio: 'Building genomic intelligence systems using computational biology and bioinformatics pipelines.',
    expertise: ['Bioinformatics', 'NGS Analysis', 'Python'],
    image: img4,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'aisha@research.edu',
    },
  },
  {
    id: '5',
    name: 'Student Outreach Team',
    role: '4-H Camp, California, US',
    bio: 'Managing advanced laboratory systems, compliance frameworks, and biotechnology infrastructure.',
    expertise: ['Lab Management', 'QC', 'Regulatory Affairs'],
    image: img5,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'ryan@research.edu',
    },
  },
];

/* =========================================
   COMPONENT
========================================= */
export default function Scientorship() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="scientorship"
      className="relative overflow-hidden bg-white py-32 text-slate-800 border-t border-slate-100"
    >
      {/* PURE LIGHT MATRIX MESH BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
      
      {/* Ambient Soft Sky Blue Aura Blurs */}
      <div className="absolute left-[-150px] top-[-50px] h-[600px] w-[600px] rounded-full bg-sky-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-50/50 blur-[120px] pointer-events-none" />

      {/* CONTAINER */}
      <div ref={containerRef} className="relative mx-auto max-w-7xl px-6 z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
            Research Team
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Building Future
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Scientific Leaders
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 font-medium">
            A multidisciplinary team of researchers, scientists, and innovators advancing molecular biology, computational medicine, and biotechnology systems.
          </p>
        </motion.div>

        {/* PHILOSOPHY SECTION (Elevated Sky Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-24 overflow-hidden rounded-[40px] border border-sky-100 bg-white p-8 shadow-[0_15px_40px_rgba(186,230,253,0.15)] md:p-14"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shadow-inner">
              <GraduationCap className="h-8 w-8 stroke-[2.5]" />
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                Mentorship Philosophy
              </h3>

              <p className="mt-4 max-w-4xl text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                Every transformative discovery begins with curiosity, discipline, and mentorship. Our mission is to cultivate world-class scientific thinkers capable of redefining the future of molecular medicine and biotechnology innovation.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.6)]" />
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Dr. Elena Chen
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[40px] border border-sky-100 bg-white p-3 shadow-[0_15px_40px_rgba(186,230,253,0.12)] transition-all duration-500 hover:border-sky-300 hover:shadow-[0_25px_50px_rgba(14,165,233,0.18)]"
            >
              {/* PROFILE IMAGE VIEWPORT — 100% CLEAR VISIBILITY */}
              <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-slate-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* REMOVED BLACKISH/SLATE OVERLAY MASK COMPLETELY */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* SOCIAL FLOATING CONTROL FLOATS WITH LIGHT MODE STYLING */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 shadow-md transition-all duration-300 hover:scale-105 hover:bg-sky-50"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-slate-800 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50"
                  >
                    <span className="text-xs font-bold">𝕏</span>
                  </a>

                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 shadow-md transition-all duration-300 hover:scale-105 hover:bg-sky-50"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* CARD DETAILS WRAP — PREMIUM SKY BLUE FLOATING BASE BOX */}
              <div className="mt-4 p-5 rounded-[28px] bg-sky-50/90 border border-sky-100/40 transition-colors group-hover:bg-white text-left">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                  {member.name}
                </h3>

                <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                  {member.role || 'Research Affiliate'}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METADATA STATISTICS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: GraduationCap,
              label: 'Researchers Mentored',
              value: '45+',
            },
            {
              icon: Users,
              label: 'Active Team Members',
              value: '24',
            },
            {
              icon: Heart,
              label: 'Global Collaborations',
              value: '98+',
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="relative overflow-hidden rounded-[24px] border border-sky-100 bg-white p-6 shadow-[0_12px_30px_rgba(186,230,253,0.1)] backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

              <div className="relative flex items-center gap-5 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shadow-inner">
                  <stat.icon className="h-5 w-5 stroke-[2.5]" />
                </div>

                <div>
                  <div className="text-2xl font-extrabold tracking-tight text-slate-950">
                    {stat.value}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}