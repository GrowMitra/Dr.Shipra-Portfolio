import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Parallax } from 'swiper/modules';
import { Dna, Atom, Microscope, Sparkles } from 'lucide-react';
import img1 from '../images/heroImg/img1.jpg'
import img2 from '../images/heroImg/img3.jpg'
import img3 from '../images/heroImg/img2.jpg'
import img4 from '../images/heroImg/img4.jpg'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const carouselSlides = [
  {
    url: img1,
    caption: 'Precision genetics redefining modern biomedical research.',
  },
  {
    url: img2,
    caption: 'Exploring molecular diagnostics through advanced innovation.',
  },
  {
    url: img3,
    caption: 'Shaping the future of cellular engineering and medicine.',
  },
  {
    url: img4,
    caption: 'Advancing next-generation cancer research technologies.',
  },

];

const floatingIcons = [
  { Icon: Dna, delay: 0, x: '10%', y: '20%' },
  { Icon: Atom, delay: 0.3, x: '90%', y: '22%' },
  { Icon: Microscope, delay: 0.5, x: '8%', y: '78%' },
  { Icon: Sparkles, delay: 0.7, x: '92%', y: '75%' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full z-0" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full z-0" />

      {/* FLOATING ICONS */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, delay }}
          className="absolute z-10 pointer-events-none"
          style={{ left: x, top: y }}
        >
          <Icon
            className="w-16 h-16 text-cyan-300 animate-float"
            style={{ animationDelay: `${delay * 2}s` }}
          />
        </motion.div>
      ))}

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        effect="fade"
        loop
        speed={1800}
        parallax={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            'swiper-pagination-bullet !bg-white/20 !w-2 !h-2 !mx-1.5',
          bulletActiveClass:
            '!bg-cyan-400 !w-8 !rounded-full shadow-[0_0_20px_rgba(34,211,238,0.7)]',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full overflow-hidden">
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 animate-heroZoom"
                style={{
                  backgroundImage: `url(${slide.url})`,
                }}
                data-swiper-parallax="-20%"
              />

           

              {/* GRID */}
              <div className="absolute inset-0 scientific-grid opacity-[0.08]" />

              {/* FILM GRAIN */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

              {/* MINIMAL CAPTION */}
              <div className="absolute left-8 md:left-16 bottom-20 z-30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 1 }}
                  className="max-w-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-[1px] bg-cyan-400/70" />

                    <span className="uppercase tracking-[0.3em] text-[10px] text-cyan-300/80 font-light">
                      Scientific Research
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                    {slide.caption}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      RIGHT SIDE INDICATORS
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const swiper = document.querySelector('.swiper') as any;
              swiper?.swiper?.slideToLoop(index);
            }}
            className={`transition-all duration-500 ${
              activeIndex === index
                ? 'w-[2px] h-16 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]'
                : 'w-[2px] h-5 bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>

    

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            Scroll
          </span>

          <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}