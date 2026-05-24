// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Play,
//   X,
//   ArrowUpRight,
// } from 'lucide-react';

// /* =========================================
//    PODCAST DATA
// ========================================= */

// const podcasts = [
//   {
//     id: '1',

//     title: 'The Future of Gene Editing',

//     description:
//       'An in-depth discussion exploring how CRISPR technology is revolutionizing modern medicine, enabling precision therapies, and opening new possibilities in the treatment of genetic disorders and complex diseases. The conversation also highlights the future impact of biotechnology on global healthcare systems.',

//     image:
//       'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',

//     videoUrl:
//       'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1',
//   },

//   {
//     id: '2',

//     title: 'Revolutionizing Cancer Research',

//     description:
//       'A powerful interview focused on next-generation cancer research, advanced molecular diagnostics, and innovative therapeutic systems designed to improve survival rates and transform precision medicine worldwide through cutting-edge scientific discoveries.',

//     image:
//       'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',

//     videoUrl:
//       'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1',
//   },

//   {
//     id: '3',

//     title: 'Scientific Leadership & Innovation',

//     description:
//       'An inspiring conversation about leadership inside modern laboratories, mentoring young scientists, building collaborative research cultures, and driving innovation through interdisciplinary scientific exploration and future-focused biotechnology initiatives.',

//     image:
//       'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',

//     videoUrl:
//       'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1',
//   },

//   {
//     id: '4',

//     title: 'Future of Molecular Diagnostics',

//     description:
//       'Exploring how artificial intelligence, advanced diagnostics, and biotechnology are transforming healthcare systems globally by enabling faster disease detection, precision analysis, and smarter medical decision-making across modern research environments.',

//     image:
//       'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',

//     videoUrl:
//       'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1',
//   },
// ];

// /* =========================================
//    COMPONENT
// ========================================= */

// export default function Podcasts() {
//   const [selectedPodcast, setSelectedPodcast] =
//     useState<any>(null);

//   return (
//     <>
//       <section
//         id="podcasts"
//         className="relative overflow-hidden bg-[#050816] py-28"
//       >
//         {/* BACKGROUND */}

//         <div className="absolute inset-0 scientific-grid opacity-20" />

//         <div className="absolute left-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

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
//               Featured Podcasts
//             </span>

//             <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
//               All about this podcast
//               <br />

//               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 Scientist for fun
//               </span>
//             </h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
//               Insights, interviews, and research discussions
//               shaping the future of molecular science and
//               biotechnology innovation.
//             </p>
//           </motion.div>

//           {/* PODCAST LIST */}

//           <div className="space-y-24">
//             {podcasts.map((podcast, index) => {
//               const isReverse = index % 2 !== 0;

//               return (
//                 <motion.div
//                   key={podcast.id}
//                   initial={{ opacity: 0, y: 80 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}
//                   className={`grid items-center gap-12 lg:grid-cols-2 ${
//                     isReverse
//                       ? 'lg:[&>*:first-child]:order-2'
//                       : ''
//                   }`}
//                 >
//                   {/* VIDEO CARD */}

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.4 }}
//                     onClick={() =>
//                       setSelectedPodcast(podcast)
//                     }
//                     className="group relative cursor-pointer"
//                   >
//                     <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,255,255,0.06)] backdrop-blur-xl">
//                       {/* LANDSCAPE SIZE */}

//                       <div className="relative h-[260px] md:h-[320px] overflow-hidden">
//                         <img
//                           src={podcast.image}
//                           alt={podcast.title}
//                           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />

//                         {/* OVERLAY */}

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />

//                         {/* PLAY BUTTON */}

//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
//                             <Play className="ml-1 h-7 w-7 fill-white text-white" />
//                           </div>
//                         </div>

//                         {/* OPEN BUTTON */}

//                         <div className="absolute bottom-5 right-5">
//                           <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
//                             <ArrowUpRight className="h-5 w-5" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* CONTENT */}

//                   <div
//                     className={`${
//                       isReverse
//                         ? 'lg:pr-8'
//                         : 'lg:pl-8'
//                     }`}
//                   >
//                     <motion.div
//                       initial={{ opacity: 0, x: 40 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.7 }}
//                     >
//                       <div className="mb-5 h-[1px] w-24 bg-gradient-to-r from-cyan-400 to-transparent" />

//                       <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
//                         {podcast.title}
//                       </h3>

//                       <p className="mt-6 text-base leading-relaxed text-zinc-400">
//                         {podcast.description}
//                       </p>

//                       <div className="mt-8 flex items-center gap-4">
//                         <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

//                         <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
//                           Watch Interview
//                         </p>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* VIDEO MODAL */}

//   <AnimatePresence>
//   {selectedPodcast && (
//     <div 
//       className="fixed inset-0 flex items-center justify-center p-4 md:p-10"
//       style={{ zIndex: 999999, isolation: 'isolate' }}
//     >
      
//       {/* BACKGROUND OVERLAY */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setSelectedPodcast(null)}
//         className="absolute inset-0 bg-black/95 backdrop-blur-md"
//         style={{ zIndex: -1, pointerEvents: 'auto' }}
//       />

//       {/* VIDEO WRAPPER CARD */}
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="relative w-full max-w-5xl overflow-hidden rounded-[16px] md:rounded-[24px] border border-white/10 bg-black shadow-2xl"
//         style={{ zIndex: 2, pointerEvents: 'auto' }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* CLOSE BUTTON */}
//         <button
//           onClick={() => setSelectedPodcast(null)}
//           className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 transition-transform hover:scale-110"
//           style={{ zIndex: 99 }}
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {/* SECURE IFRAME CONTAINER */}
//         <div className="aspect-video w-full relative" style={{ pointerEvents: 'auto' }}>
//           <iframe
//             /* HACK: mute=1 hata diya, autoplay=1 rakha aur allow me "autoplay" ko explicitly add kiya */
//             src={`${selectedPodcast.videoUrl.split('?')[0]}?autoplay=1&controls=1&rel=0&modestbranding=1`}
//             title={selectedPodcast.title}
//             className="h-full w-full absolute inset-0 border-0"
            
//             // YEH LINE MAGIC HAI: allow="autoplay" browser ko bolta hai ki humne list me click kiya tha, toh permission mili hui hai
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'auto', 
//               position: 'absolute', 
//               zIndex: 10,
//               width: '100%',
//               height: '100%'
//             }}
//           />
//         </div>
//       </motion.div>

//     </div>
//   )}
// </AnimatePresence>
//     </>
//   );
// }





import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';

/* =========================================
   PODCAST DATA
========================================= */
const podcasts = [
  {
    id: '1',
    title: 'The Future of Gene Editing',
    description:
      'An in-depth discussion exploring how CRISPR technology is revolutionizing modern medicine, enabling precision therapies, and opening new possibilities in the treatment of genetic disorders and complex diseases. The conversation also highlights the future impact of biotechnology on global healthcare systems.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1',
  },
  {
    id: '2',
    title: 'Revolutionizing Cancer Research',
    description:
      'A powerful interview focused on next-generation cancer research, advanced molecular diagnostics, and innovative therapeutic systems designed to improve survival rates and transform precision medicine worldwide through cutting-edge scientific discoveries.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1',
  },
  {
    id: '3',
    title: 'Scientific Leadership & Innovation',
    description:
      'An inspiring conversation about leadership inside modern laboratories, mentoring young scientists, building collaborative research cultures, and driving innovation through interdisciplinary scientific exploration and future-focused biotechnology initiatives.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/_1wSKuoAzUw?autoplay=1',
  },
  {
    id: '4',
    title: 'Future of Molecular Diagnostics',
    description:
      'Exploring how artificial intelligence, advanced diagnostics, and biotechnology are transforming healthcare systems globally by enabling faster disease detection, precision analysis, and smarter medical decision-making across modern research environments.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/uT5a1oYCPng?autoplay=1',
  },
];

/* =========================================
   COMPONENT
========================================= */
export default function Podcasts() {
  const [selectedPodcast, setSelectedPodcast] = useState<any>(null);

  /* ESC KEY TO CLOSE IFRAME POPUP */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPodcast(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section
        id="podcasts"
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-32 text-slate-800 border-t border-slate-100"
      >
        {/* PREMIUM SKY BLUE & LIQUID CYAN GRADIENT MESH ACCENTS */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        {/* Ambient Blurred Background Spheres */}
        <div className="absolute left-[-120px] top-[10%] h-[600px] w-[600px] rounded-full bg-sky-200/40 blur-[130px]" />
        <div className="absolute right-[-120px] bottom-[15%] h-[600px] w-[600px] rounded-full bg-cyan-100/50 blur-[140px]" />

        {/* CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-6 z-10">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-28 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur-sm">
              Featured Podcasts
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              All about this podcast
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Scientist for fun
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 font-medium">
              Insights, interviews, and research discussions shaping the future of molecular science and biotechnology innovation.
            </p>
          </motion.div>

          {/* PODCAST LIST ARRAY */}
          <div className="space-y-32">
            {podcasts.map((podcast, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <motion.div
                  key={podcast.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    isReverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* PLAYABLE VIDEO CONTAINER */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setSelectedPodcast(podcast)}
                    className="group relative cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-[40px] border border-sky-100/80 bg-white/80 p-3 shadow-[0_20px_50px_rgba(186,230,253,0.15)] transition-all duration-500 group-hover:border-cyan-200 group-hover:shadow-[0_30px_60px_rgba(6,182,212,0.18)] backdrop-blur-md">
                      
                      <div className="relative h-[240px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-[30px]">
                        <img
                          src={podcast.image}
                          alt={podcast.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />

                        {/* TEXTURE BLUR GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-sky-950/5 to-transparent opacity-50" />

                        {/* PULSING PLAY BUTTON MIDDLE */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <div className="absolute h-20 w-20 rounded-full bg-sky-400 opacity-60 animate-ping group-hover:opacity-80"/>
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-600 shadow-xl transition-all duration-300 group-hover:scale-110">
                              <Play className="ml-1 h-7 w-7 fill-current" />
                            </div>
                          </div>
                        </div>

                        {/* TOP-RIGHT LAUNCH REDIRECT CORNER */}
                        <div className="absolute bottom-6 right-6">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/90 text-sky-600 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                            <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  {/* DATA DISCLOSURE SIDE */}
                  <div className={`${isReverse ? 'lg:pr-6' : 'lg:pl-6'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isReverse ? 25 : -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {/* Decorative Line Tag */}
                      <div className="mb-6 flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-sky-500 via-cyan-400 to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700 bg-sky-50 rounded-full px-3 py-1 border border-sky-100 shadow-inner">
                          Episode 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                        {podcast.title}
                      </h3>

                      <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                        {podcast.description}
                      </p>

                      <div className="mt-8 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-600 border border-sky-100 shadow-sm animate-pulse">
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 group-hover:text-sky-700 transition-colors">
                          Watch Interview Session
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM LIGHT POPUP IFRAME PANEL */}
      <AnimatePresence>
        {selectedPodcast && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 md:p-10"
            style={{ zIndex: 999999, isolation: 'isolate' }}
          >
            {/* BACKDROP GRID DISMISS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPodcast(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
              style={{ zIndex: -1, pointerEvents: 'auto' }}
            />

            {/* LIGHT MODAL FRAME WRAP */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-sky-100 bg-white p-3 shadow-2xl shadow-slate-950/20"
              style={{ zIndex: 2, pointerEvents: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE ACTION CONTROL */}
              <button
                onClick={() => setSelectedPodcast(null)}
                className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white shadow-md transition-colors hover:bg-slate-950"
                style={{ zIndex: 99 }}
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* VIDEO ASPECT FRAME CONTAINER */}
              <div className="aspect-video w-full relative overflow-hidden rounded-xl bg-black" style={{ pointerEvents: 'auto' }}>
                <iframe
                  src={`${selectedPodcast.videoUrl.split('?')[0]}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                  title={selectedPodcast.title}
                  className="h-full w-full absolute inset-0 border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    pointerEvents: 'auto',
                    position: 'absolute',
                    zIndex: 10,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}