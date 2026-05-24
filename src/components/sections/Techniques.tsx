import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Plus } from 'lucide-react';
import img1 from '../images/heroImg/img4.jpg'
/* =========================================
   DATA
========================================= */

const techniques = [
  {
    id: '1',
    title: 'CRISPR-Cas9 Gene Editing',
    description:
      'A revolutionary breakthrough in modern biotechnology enabling highly precise DNA modifications. This technique is transforming the future of medicine, genetic therapies, and advanced biological engineering worldwide.',

    image: img1,
  },

  {
    id: '2',
    title: 'Single-Cell RNA Sequencing',
    description:
      'Advanced sequencing systems help scientists analyze cellular behavior with exceptional precision. It allows researchers to understand gene activity at an individual cell level for deeper biological insights.',

    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: '3',
    title: 'Cryo-Electron Microscopy',
    description:
      'This next-generation imaging technology captures molecular structures in near-native environments. Researchers use it to visualize proteins and biological systems with ultra-high resolution.',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: '4',
    title: 'Advanced Laboratory Process',
    description:
      'Modern scientific laboratories rely on sterile environments, automated systems, and advanced instrumentation to conduct accurate molecular diagnostics and experimental procedures safely.',

    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: '5',
    title: 'Molecular Diagnostics',
    description:
      'Advanced molecular diagnostics enable early disease detection with remarkable precision. These systems combine biotechnology and AI-powered analysis for accurate clinical research.',

    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: '6',
    title: 'Precision Bioengineering',
    description:
      'Precision bioengineering integrates computational biology with genetic science to develop innovative therapeutic solutions and next-generation medical technologies.',

    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop',
  },
];

/* =========================================
   COMPONENT
========================================= */

export default function Techniques() {
  const [selectedImage, setSelectedImage] = useState<
    string | null
  >(null);

  const [showAll, setShowAll] = useState(false);

  const visibleTechniques = showAll
    ? techniques
    : techniques.slice(0, 4);

  return (
    <>
      <section
        id="techniques"
        className="relative overflow-hidden bg-[#050816] py-32"
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 scientific-grid opacity-20" />

        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* CONTAINER */}

        <div className="relative mx-auto max-w-7xl px-6">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-24 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
              Scientific Techniques
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Research &
              <br />

              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Laboratory Innovation
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Advanced molecular techniques and scientific
              processes shaping the future of biotechnology
              and modern medicine.
            </p>
          </motion.div>

          {/* TECHNIQUES */}

          <div className="space-y-32">
            <AnimatePresence>
              {visibleTechniques.map((technique, index) => {
                const isReverse = index % 2 !== 0;

                return (
                  <motion.div
                    key={technique.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`grid items-center gap-14 lg:grid-cols-2 ${
                      isReverse
                        ? 'lg:[&>*:first-child]:order-2'
                        : ''
                    }`}
                  >
                    {/* IMAGE */}

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      onClick={() =>
                        setSelectedImage(technique.image)
                      }
                      className="group relative cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={technique.image}
                            alt={technique.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* OVERLAY */}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                          {/* BUTTON */}

                          <div className="absolute bottom-6 right-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110">
                              <ArrowUpRight className="h-6 w-6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* CONTENT */}

                    <div
                      className={`${
                        isReverse
                          ? 'lg:pr-10'
                          : 'lg:pl-10'
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                      >
                        <div className="mb-5 h-[1px] w-24 bg-gradient-to-r from-cyan-400 to-transparent" />

                        <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                          {technique.title}
                        </h3>

                        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                          {technique.description}
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                          <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

                          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                            Advanced Scientific Research
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* VIEW MORE BUTTON */}

          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-24 flex justify-center"
            >
              <button
                onClick={() => setShowAll(true)}
                className="group relative overflow-hidden rounded-full border border-cyan-400/20 bg-white/[0.03] px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <span className="relative flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]">
                  <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

                  View More
                </span>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* IMAGE MODAL */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-black"
            >
              {/* CLOSE */}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90"
              >
                <X className="h-5 w-5" />
              </button>

              {/* IMAGE */}

              <img
                src={selectedImage}
                alt="preview"
                className="max-h-[90vh] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}