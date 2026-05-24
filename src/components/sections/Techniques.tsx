// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ArrowUpRight, Plus } from 'lucide-react';
// import img1 from '../images/heroImg/img4.jpg'
// /* =========================================
//    DATA
// ========================================= */

// const techniques = [
//   {
//     id: '1',
//     title: 'CRISPR-Cas9 Gene Editing',
//     description:
//       'A revolutionary breakthrough in modern biotechnology enabling highly precise DNA modifications. This technique is transforming the future of medicine, genetic therapies, and advanced biological engineering worldwide.',

//     image: img1,
//   },

//   {
//     id: '2',
//     title: 'Single-Cell RNA Sequencing',
//     description:
//       'Advanced sequencing systems help scientists analyze cellular behavior with exceptional precision. It allows researchers to understand gene activity at an individual cell level for deeper biological insights.',

//     image:
//       'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1600&auto=format&fit=crop',
//   },

//   {
//     id: '3',
//     title: 'Cryo-Electron Microscopy',
//     description:
//       'This next-generation imaging technology captures molecular structures in near-native environments. Researchers use it to visualize proteins and biological systems with ultra-high resolution.',

//     image:
//       'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
//   },

//   {
//     id: '4',
//     title: 'Advanced Laboratory Process',
//     description:
//       'Modern scientific laboratories rely on sterile environments, automated systems, and advanced instrumentation to conduct accurate molecular diagnostics and experimental procedures safely.',

//     image:
//       'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop',
//   },

//   {
//     id: '5',
//     title: 'Molecular Diagnostics',
//     description:
//       'Advanced molecular diagnostics enable early disease detection with remarkable precision. These systems combine biotechnology and AI-powered analysis for accurate clinical research.',

//     image:
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
//   },

//   {
//     id: '6',
//     title: 'Precision Bioengineering',
//     description:
//       'Precision bioengineering integrates computational biology with genetic science to develop innovative therapeutic solutions and next-generation medical technologies.',

//     image:
//       'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop',
//   },
// ];

// /* =========================================
//    COMPONENT
// ========================================= */

// export default function Techniques() {
//   const [selectedImage, setSelectedImage] = useState<
//     string | null
//   >(null);

//   const [showAll, setShowAll] = useState(false);

//   const visibleTechniques = showAll
//     ? techniques
//     : techniques.slice(0, 4);

//   return (
//     <>
//       <section
//         id="techniques"
//         className="relative overflow-hidden bg-[#050816] py-32"
//       >
//         {/* BACKGROUND */}

//         <div className="absolute inset-0 scientific-grid opacity-20" />

//         <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

//         <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

//         {/* CONTAINER */}

//         <div className="relative mx-auto max-w-7xl px-6">
//           {/* HEADER */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="mb-24 text-center"
//           >
//             <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
//               Scientific Techniques
//             </span>

//             <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
//               Research &
//               <br />

//               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 Laboratory Innovation
//               </span>
//             </h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
//               Advanced molecular techniques and scientific
//               processes shaping the future of biotechnology
//               and modern medicine.
//             </p>
//           </motion.div>

//           {/* TECHNIQUES */}

//           <div className="space-y-32">
//             <AnimatePresence>
//               {visibleTechniques.map((technique, index) => {
//                 const isReverse = index % 2 !== 0;

//                 return (
//                   <motion.div
//                     key={technique.id}
//                     initial={{ opacity: 0, y: 80 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 40 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className={`grid items-center gap-14 lg:grid-cols-2 ${
//                       isReverse
//                         ? 'lg:[&>*:first-child]:order-2'
//                         : ''
//                     }`}
//                   >
//                     {/* IMAGE */}

//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.4 }}
//                       onClick={() =>
//                         setSelectedImage(technique.image)
//                       }
//                       className="group relative cursor-pointer"
//                     >
//                       <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-xl">
//                         <div className="relative aspect-[16/10] overflow-hidden">
//                           <img
//                             src={technique.image}
//                             alt={technique.title}
//                             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                           />

//                           {/* OVERLAY */}

//                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

//                           {/* BUTTON */}

//                           <div className="absolute bottom-6 right-6">
//                             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
//                               <ArrowUpRight className="h-6 w-6" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* CONTENT */}

//                     <div
//                       className={`${
//                         isReverse
//                           ? 'lg:pr-10'
//                           : 'lg:pl-10'
//                       }`}
//                     >
//                       <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.7 }}
//                       >
//                         <div className="mb-5 h-[1px] w-24 bg-gradient-to-r from-cyan-400 to-transparent" />

//                         <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
//                           {technique.title}
//                         </h3>

//                         <p className="mt-8 text-lg leading-relaxed text-zinc-400">
//                           {technique.description}
//                         </p>

//                         <div className="mt-10 flex items-center gap-4">
//                           <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

//                           <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
//                             Advanced Scientific Research
//                           </p>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>

//           {/* VIEW MORE BUTTON */}

//           {!showAll && (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="mt-24 flex justify-center"
//             >
//               <button
//                 onClick={() => setShowAll(true)}
//                 className="group relative overflow-hidden rounded-full border border-cyan-400/20 bg-white/[0.03] px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
//               >
//                 <span className="relative flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]">
//                   <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

//                   View More
//                 </span>
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* IMAGE MODAL */}

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-black"
//             >
//               {/* CLOSE */}

//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90"
//               >
//                 <X className="h-5 w-5" />
//               </button>

//               {/* IMAGE */}

//               <img
//                 src={selectedImage}
//                 alt="preview"
//                 className="max-h-[90vh] w-full object-cover"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ArrowUpRight, Dna, Atom, Sparkles } from 'lucide-react';
import img1 from '../images/heroImg/img4.jpg';

const techniques = [
  { id: '1', title: 'CRISPR-Cas9 Gene Editing', description: 'A revolutionary breakthrough in modern biotechnology enabling highly precise DNA modifications. This technique is transforming the future of medicine, genetic therapies, and advanced biological engineering worldwide.', image: img1 },
  { id: '2', title: 'Single-Cell RNA Sequencing', description: 'Advanced sequencing systems help scientists analyze cellular behavior with exceptional precision. It allows researchers to understand gene activity at an individual cell level for deeper biological insights.', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1600&auto=format&fit=crop' },
  { id: '3', title: 'Cryo-Electron Microscopy', description: 'This next-generation imaging technology captures molecular structures in near-native environments. Researchers use it to visualize proteins and biological systems with ultra-high resolution.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop' },
  { id: '4', title: 'Advanced Laboratory Process', description: 'Modern scientific laboratories rely on sterile environments, automated systems, and advanced instrumentation to conduct accurate molecular diagnostics and experimental procedures safely.', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop' },
];

export default function Techniques() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Dynamic Scroll Parallax for Background Elements
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section 
        ref={targetRef}
        id="techniques" 
        className="relative overflow-hidden bg-white py-32 text-slate-800 border-t border-slate-100"
      >
        {/* PREMIUM LIGHT MATRIX MESH BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
        
        {/* INTERACTIVE PARALLAX BLUR ORBS */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute right-[-80px] top-[15%] h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-[130px] pointer-events-none" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute left-[-80px] bottom-[20%] h-[500px] w-[500px] rounded-full bg-cyan-50/50 blur-[120px] pointer-events-none" 
        />

        {/* FLOATING KINETIC BIO-PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <motion.div 
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[5%] opacity-15 text-sky-500"
          >
            <Dna className="w-10 h-10" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[60%] right-[6%] opacity-15 text-cyan-500"
          >
            <Atom className="w-9 h-9" />
          </motion.div>
          <motion.div 
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[45%] left-[48%] text-sky-400"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mb-28 text-center relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
              Scientific Techniques
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Research &<br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Laboratory Innovation</span>
            </h2>
          </motion.div>

          {/* METHODOLOGY LIST */}
          <div className="space-y-36 relative z-10">
            {techniques.map((technique, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <div key={technique.id} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${isReverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  
                  {/* INTERACTIVE MEDIA FRAME */}
                  <motion.div 
                    initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -6 }} 
                    onClick={() => setSelectedImage(technique.image)} 
                    className="group relative cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-[40px] border border-sky-100 bg-white p-3 shadow-[0_15px_45px_rgba(186,230,253,0.12)] transition-all duration-500 group-hover:border-sky-300 group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-slate-50">
                        <img src={technique.image} alt={technique.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute bottom-5 right-5 z-10">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white/95 text-sky-600 shadow-md transition-transform duration-300 group-hover:scale-105">
                            <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* DATA METADATA SIDE */}
                  <div className={isReverse ? 'lg:pr-6' : 'lg:pl-6'}>
                    <motion.div
                      initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-left"
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-sky-500 to-cyan-300" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700 bg-sky-50 rounded-full px-3 py-1 border border-sky-100 shadow-inner">
                          Methodology 0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">{technique.title}</h3>
                      <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 font-medium">{technique.description}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPUP FULLVIEW CANVAS MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 backdrop-blur-md bg-sky-100/10" style={{ isolation: 'isolate' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-slate-900/15 backdrop-blur-sm" style={{ zIndex: -1 }} />
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-sky-200 bg-white p-2.5 shadow-2xl shadow-sky-100" style={{ zIndex: 2 }}>
              <button onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-md hover:text-sky-500 transition-colors"><X className="h-4.5 w-4.5 stroke-[2.5]" /></button>
              <div className="overflow-hidden rounded-2xl max-h-[80vh] bg-slate-50"><img src={selectedImage} alt="Laboratory Method Detailed Zoom" className="w-full h-full object-contain mx-auto rounded-xl" /></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}