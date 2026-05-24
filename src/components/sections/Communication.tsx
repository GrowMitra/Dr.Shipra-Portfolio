// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   X,
//   ArrowUpRight,
//   MapPin,
//   Calendar,
// } from 'lucide-react';
// import img1 from '../images/communication_img/com_img1.png'
// import img2 from '../images/communication_img/com_img2.png'
// import img3 from '../images/communication_img/com_img3.png'
// import img4 from '../images/communication_img/com_img4.png'
// import img5 from '../images/communication_img/com_img5.png'
// import img6 from '../images/communication_img/com_img6.png'


// /* =========================================
//    EVENTS DATA
// ========================================= */

// const events = [
//   {
//     id: '1',
//     title: 'CRISPR World Congress',
//     location: 'Boston, USA',
//     date: 'April 2024',
//     description:
//       'An inspiring keynote session discussing the future of gene editing technologies, precision medicine, and next-generation CRISPR-based therapeutic systems.',
//     image:img1,
//     size: 'large',
//   },

//   {
//     id: '2',
//     title: 'Nobel Prize Symposium',
//     location: 'Stockholm, Sweden',
//     date: 'December 2023',
//     description:
//       'A prestigious international symposium focused on breakthrough discoveries in molecular biology and future biotechnology systems.',
//     image:img2,
//     size: 'small',
//   },

//   {
//     id: '3',
//     title: 'MIT Research Summit',
//     location: 'Cambridge, USA',
//     date: 'September 2023',
//     description:
//       'A collaborative summit featuring world-class researchers and healthcare innovators.',
//     image:img3,
//     size: 'medium',
//   },

//   {
//     id: '4',
//     title: 'Gene Therapy Workshop',
//     location: 'Geneva, Switzerland',
//     date: 'June 2023',
//     description:
//       'An advanced workshop focused on practical gene therapy techniques and biotechnology innovation.',
//     image:img4,
//     size: 'small',
//   },

//   {
//     id: '5',
//     title: 'World Economic Forum',
//     location: 'Davos, Switzerland',
//     date: 'January 2023',
//     description:
//       'A global leadership event discussing the future of healthcare innovation and biotechnology growth.',
//     image:img6,
//     size: 'large',
//   },

//   {
//     id: '6',
//     title: 'Cell & Molecular Conference',
//     location: 'Tokyo, Japan',
//     date: 'November 2022',
//     description:
//       'An international scientific conference presenting groundbreaking discoveries in cell biology.',
//     image:img5,
//     size: 'medium',
//   },
// ];

// /* =========================================
//    COMPONENT
// ========================================= */

// export default function Communication() {
//   const [selectedEvent, setSelectedEvent] =
//     useState<any>(null);

//   /* BODY SCROLL LOCK */

//   useEffect(() => {
//     if (selectedEvent) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [selectedEvent]);

//   return (
//     <>
//       <section
//         id="communication"
//         className="relative overflow-hidden bg-[#050816] py-32"
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
//               Global Events
//             </span>

//             <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
//               Because science matters 
//               <br />

//               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 to everyone !
//               </span>
//             </h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
//               Conferences, summits, workshops, and scientific
//               collaborations shaping the future of molecular
//               science and biotechnology innovation worldwide.
//             </p>
//           </motion.div>

//           {/* GRID */}

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 auto-rows-[260px]">
//             {events.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.08,
//                 }}
//                 onClick={() => setSelectedEvent(event)}
//                 className={`
//                   group relative cursor-pointer overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl
//                   transition-all duration-500 hover:border-cyan-400/20

//                   ${
//                     event.size === 'large'
//                       ? 'xl:col-span-8 md:col-span-2'
//                       : 'xl:col-span-4 md:col-span-1'
//                   }

//                   ${
//                     event.size === 'large'
//                       ? 'row-span-2'
//                       : 'row-span-1'
//                   }
//                 `}
//               >
//                 {/* IMAGE */}

//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />

//                 {/* OVERLAY */}

//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//                 {/* CONTENT */}

//                 <div className="absolute bottom-0 left-0 right-0 p-7">
//                   {/* <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-cyan-300">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="h-4 w-4" />
//                       {event.date}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <MapPin className="h-4 w-4" />
//                       {event.location}
//                     </div>
//                   </div> */}

//                   <h3
//                     className={`font-bold leading-tight text-white ${
//                       event.size === 'large'
//                         ? 'text-4xl'
//                         : 'text-2xl'
//                     }`}
//                   >
//                     {event.title}
//                   </h3>

//                   <div className="mt-5 flex items-center gap-3">
//                     <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.9)]" />

//                     <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
//                       View Event
//                     </p>
//                   </div>
//                 </div>

//                 {/* BUTTON */}

//                 <div className="absolute right-6 top-6">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
//                     <ArrowUpRight className="h-5 w-5" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           POPUP MODAL WITH WORKING SCROLL
//       ========================================= */}

// <AnimatePresence>
//   {selectedEvent && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md"

//       /* PAGE SCROLL BAND */
//       onWheel={(e) => e.stopPropagation()}
//       onTouchMove={(e) => e.stopPropagation()}
//     >
//       {/* SCROLLABLE LAYER */}

//       <div
//         className="
//           h-screen
//           w-screen
//           overflow-y-scroll
//           overflow-x-hidden
//           p-4 md:p-10
//         "

//         style={{
//           WebkitOverflowScrolling: 'touch',
//         }}
//       >
//         {/* MODAL */}

//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           transition={{ duration: 0.3 }}

//           onClick={(e) => e.stopPropagation()}

//           className="
//             relative
//             mx-auto
//             w-full
//             max-w-6xl
//             rounded-[40px]
//             border border-white/10
//             bg-[#0B1120]
//             overflow-hidden
//           "
//         >
//           {/* CLOSE BUTTON */}

//           <button
//             onClick={() => setSelectedEvent(null)}
//             className="
//               fixed
//               right-8
//               top-8
//               z-[999999]
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-full
//               bg-black/60
//               text-white
//               backdrop-blur-xl
//             "
//           >
//             <X className="h-5 w-5" />
//           </button>

//           {/* IMAGE */}

//           <div className="relative h-[320px] md:h-[650px]">
//             <img
//               src={selectedEvent.image}
//               alt={selectedEvent.title}
//               className="h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
//           </div>

//           {/* CONTENT */}

//           <div className="p-8 md:p-14">
//             <div className="flex flex-wrap items-center gap-6 text-sm text-cyan-300">
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 {selectedEvent.date}
//               </div>

//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4" />
//                 {selectedEvent.location}
//               </div>
//             </div>

//             <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
//               {selectedEvent.title}
//             </h2>

//             <div className="mt-8 h-[1px] bg-white/10 w-full" />

//             <p className="mt-10 text-lg leading-[2] text-zinc-400">
//               {selectedEvent.description}
//             </p>

//             {/* EXTRA CONTENT */}

//             <div className="mt-14 space-y-8">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div
//                   key={item}
//                   className="
//                     rounded-3xl
//                     border border-white/10
//                     bg-white/5
//                     p-8
//                   "
//                 >
//                   <h3 className="text-2xl font-semibold text-white">
//                     Research Discussion {item}
//                   </h3>

//                   <p className="mt-4 leading-[2] text-zinc-400">
//                     Scientists explored advanced molecular systems,
//                     precision medicine workflows, biotechnology
//                     innovation, AI-powered diagnostics and future
//                     healthcare transformation through scientific
//                     research ecosystems.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </>
//   );
// }







import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import img1 from '../images/communication_img/com_img1.png';
import img2 from '../images/communication_img/com_img2.png';
import img3 from '../images/communication_img/com_img3.png';
import img4 from '../images/communication_img/com_img4.png';
import img5 from '../images/communication_img/com_img5.png';
import img6 from '../images/communication_img/com_img6.png';

/* =========================================
   EVENTS DATA
========================================= */
const events = [
  {
    id: '1',
    title: 'CRISPR World Congress',
    location: 'Boston, USA',
    date: 'April 2024',
    description:
      'An inspiring keynote session discussing the future of gene editing technologies, precision medicine, and next-generation CRISPR-based therapeutic systems.',
    image: img1,
    size: 'large',
  },
  {
    id: '2',
    title: 'Nobel Prize Symposium',
    location: 'Stockholm, Sweden',
    date: 'December 2023',
    description:
      'A prestigious international symposium focused on breakthrough discoveries in molecular biology and future biotechnology systems.',
    image: img2,
    size: 'small',
  },
  {
    id: '3',
    title: 'MIT Research Summit',
    location: 'Cambridge, USA',
    date: 'September 2023',
    description:
      'A collaborative summit featuring world-class researchers and healthcare innovators.',
    image: img3,
    size: 'medium',
  },
  {
    id: '4',
    title: 'Gene Therapy Workshop',
    location: 'Geneva, Switzerland',
    date: 'June 2023',
    description:
      'An advanced workshop focused on practical gene therapy techniques and biotechnology innovation.',
    image: img4,
    size: 'small',
  },
  {
    id: '5',
    title: 'World Economic Forum',
    location: 'Davos, Switzerland',
    date: 'January 2023',
    description:
      'A global leadership event discussing the future of healthcare innovation and biotechnology growth.',
    image: img6,
    size: 'large',
  },
  {
    id: '6',
    title: 'Cell & Molecular Conference',
    location: 'Tokyo, Japan',
    date: 'November 2022',
    description:
      'An international scientific conference presenting groundbreaking discoveries in cell biology.',
    image: img5,
    size: 'medium',
  },
];

/* =========================================
   COMPONENT
========================================= */
export default function Communication() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);

  return (
    <>
      <section
        id="communication"
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-32 text-slate-800 border-t border-slate-100"
      >
        {/* PREMIUM SKY BLUE & LIQUID CYAN GRADIENT MESH ACCENTS */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute left-[-150px] top-[10%] h-[600px] w-[600px] rounded-full bg-sky-200/40 blur-[130px]" />
        <div className="absolute right-[-150px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-cyan-100/50 blur-[140px]" />

        {/* CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-6 z-10">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur-sm">
              Global Events
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Because science matters 
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                to everyone !
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 font-medium">
              Conferences, summits, workshops, and scientific collaborations shaping the future of molecular science and biotechnology innovation worldwide.
            </p>
          </motion.div>

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-12 auto-rows-[280px]">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                onClick={() => setSelectedEvent(event)}
                className={`
                  group relative cursor-pointer overflow-hidden rounded-[40px] border border-sky-100/80 bg-white p-2.5
                  shadow-[0_15px_40px_rgba(186,230,253,0.12)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_25px_60px_rgba(6,182,212,0.18)] hover:-translate-y-1

                  ${
                    event.size === 'large'
                      ? 'xl:col-span-8 md:col-span-2'
                      : 'xl:col-span-4 md:col-span-1'
                  }

                  ${
                    event.size === 'large'
                      ? 'row-span-2'
                      : 'row-span-1'
                  }
                `}
              >
                {/* INTERACTIVE IMAGE WRAPPER */}
                <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* HIGH-READABILITY GRADIENT OVERLAY (LIGHT DESIGN OPTIMIZED) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* FLOATING ACTION ARROW */}
                  <div className="absolute right-5 top-5 z-20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/90 text-sky-600 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent">
                      <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* BENTO TEXT BLOCK */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <h3
                      className={`font-extrabold tracking-tight text-white leading-tight ${
                        event.size === 'large'
                          ? 'text-3xl md:text-4xl'
                          : 'text-2xl'
                      }`}
                    >
                      {event.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                        View Event Logistics
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          POPUP MODAL WITH WORKING SCROLL (LIGHT THEME)
      ========================================= */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-slate-950/70 backdrop-blur-md flex items-center justify-center"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* SCROLLABLE WRAPPER LAYER */}
            <div
              className="h-screen w-screen overflow-y-auto overflow-x-hidden p-4 md:p-10"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* MODAL MAIN CANVAS */}
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative mx-auto w-full max-w-5xl rounded-[40px] border border-sky-100 bg-white overflow-hidden shadow-2xl shadow-slate-950/20"
              >
                {/* PERSISTENT CLOSE BUTTON CONTROL */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute right-6 top-6 z-[99999] flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white transition-colors hover:bg-slate-950 shadow-lg"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* MODAL IMAGE VIEW HERO */}
                <div className="relative h-[280px] md:h-[500px] w-full bg-slate-100">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* MODAL METADATA CONTENT PANEL */}
                <div className="p-6 md:p-12 text-slate-800">
                  <div className="flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-wider text-sky-700">
                    <div className="flex items-center gap-2 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100/60 shadow-sm">
                      <Calendar className="h-4 w-4 text-sky-500" />
                      {selectedEvent.date}
                    </div>

                    <div className="flex items-center gap-2 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100/60 shadow-sm">
                      <MapPin className="h-4 w-4 text-sky-500" />
                      {selectedEvent.location}
                    </div>
                  </div>

                  <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                    {selectedEvent.title}
                  </h2>

                  <div className="mt-6 h-[1px] bg-slate-100 w-full" />

                  <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                    {selectedEvent.description}
                  </p>

                  {/* EXTENDED SCIENTIFIC PANELS */}
                  <div className="mt-12 space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-slate-100 bg-sky-50/20 p-6 md:p-8 hover:border-sky-200/60 transition-colors shadow-sm"
                      >
                        <h3 className="text-xl font-bold tracking-tight text-slate-950">
                          Research Discussion Module — 0{item}
                        </h3>

                        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-500 font-medium">
                          Scientists explored advanced molecular systems, precision medicine workflows, biotechnology innovation, AI-powered diagnostics, and future healthcare transformation through scientific research ecosystems.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}