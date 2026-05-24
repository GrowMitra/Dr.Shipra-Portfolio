// import { useState, useEffect } from 'react';

// import {
//   motion,
//   AnimatePresence,
// } from 'framer-motion';

// import {
//   Menu,
//   X,
// } from 'lucide-react';

// import { NavItem } from '../../types';

// const navItems: NavItem[] = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   {
//     label: 'Techniques',
//     href: '#techniques',
//   },
//   {
//     label: 'Projects',
//     href: '#projects',
//   },
//   {
//     label: 'Podcasts',
//     href: '#podcasts',
//   },
//   {
//     label: 'Communication',
//     href: '#communication',
//   },
//   {
//     label: 'Scientorship',
//     href: '#scientorship',
//   },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] =
//     useState(false);

//   const [
//     isMobileMenuOpen,
//     setIsMobileMenuOpen,
//   ] = useState(false);

//   const [activeSection, setActiveSection] =
//     useState('home');

//   /* AUTO HIDE NAVBAR */

//   const [showNavbar, setShowNavbar] =
//     useState(true);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;

//     const showNavTemporarily = () => {
//       setShowNavbar(true);

//       clearTimeout(timeout);

//       timeout = setTimeout(() => {
//         const isHome =
//           window.scrollY < 100;

//         if (isHome) {
//           setShowNavbar(false);
//         }
//       }, 6000);
//     };

//     /* INITIAL */

//     showNavTemporarily();

//     /* EVENTS */

//     window.addEventListener(
//       'mousemove',
//       showNavTemporarily
//     );

//     window.addEventListener(
//       'touchstart',
//       showNavTemporarily
//     );

//     window.addEventListener(
//       'scroll',
//       showNavTemporarily
//     );

//     return () => {
//       clearTimeout(timeout);

//       window.removeEventListener(
//         'mousemove',
//         showNavTemporarily
//       );

//       window.removeEventListener(
//         'touchstart',
//         showNavTemporarily
//       );

//       window.removeEventListener(
//         'scroll',
//         showNavTemporarily
//       );
//     };
//   }, []);

//   /* ACTIVE SECTION */

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(
//         window.scrollY > 40
//       );

//       const sections = navItems.map(
//         (item) =>
//           item.href.replace('#', '')
//       );

//       const current = sections.find(
//         (section) => {
//           const element =
//             document.getElementById(
//               section
//             );

//           if (element) {
//             const rect =
//               element.getBoundingClientRect();

//             return (
//               rect.top <= 120 &&
//               rect.bottom >= 120
//             );
//           }

//           return false;
//         }
//       );

//       if (current)
//         setActiveSection(current);
//     };

//     window.addEventListener(
//       'scroll',
//       handleScroll
//     );

//     return () =>
//       window.removeEventListener(
//         'scroll',
//         handleScroll
//       );
//   }, []);

//   const scrollToSection = (
//     href: string
//   ) => {
//     const element =
//       document.querySelector(href);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });

//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* NAVBAR */}

//       <motion.nav
//         initial={{
//           y: -100,
//           opacity: 0,
//         }}
//         animate={{
//           y: showNavbar
//             ? 0
//             : -120,

//           opacity: showNavbar
//             ? 1
//             : 0,
//         }}
//         transition={{
//           duration: 0.5,
//           ease: 'easeInOut',
//         }}
//         className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? 'py-4'
//             : 'py-6'
//         }`}
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
//           {/* LOGO */}

//           <motion.a
//             href="#home"
//             whileHover={{
//               scale: 1.02,
//             }}
//             onClick={(e) => {
//               e.preventDefault();

//               scrollToSection(
//                 '#home'
//               );
//             }}
//             className="text-xl font-semibold tracking-wide text-white"
//           >
//             Dr.
//             <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//               {' '}
//               Shipra
//             </span>
//           </motion.a>

//           {/* DESKTOP MENU */}

//           <div
//             className={`hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 backdrop-blur-2xl lg:flex ${
//               isScrolled
//                 ? 'bg-black/40 shadow-[0_0_30px_rgba(0,0,0,0.2)]'
//                 : 'bg-white/[0.03]'
//             }`}
//           >
//             {navItems.map(
//               (item, index) => (
//                 <motion.a
//                   key={item.href}
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault();

//                     scrollToSection(
//                       item.href
//                     );
//                   }}
//                   initial={{
//                     opacity: 0,
//                     y: -10,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     delay:
//                       index * 0.05,
//                   }}
//                   className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                     activeSection ===
//                     item.href.replace(
//                       '#',
//                       ''
//                     )
//                       ? 'text-cyan-300'
//                       : 'text-zinc-400 hover:text-white'
//                   }`}
//                 >
//                   {activeSection ===
//                     item.href.replace(
//                       '#',
//                       ''
//                     ) && (
//                     <motion.div
//                       layoutId="active-pill"
//                       className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-400/10"
//                       transition={{
//                         type: 'spring',
//                         stiffness: 300,
//                         damping: 30,
//                       }}
//                     />
//                   )}

//                   <span className="relative z-10">
//                     {item.label}
//                   </span>
//                 </motion.a>
//               )
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}

//           <button
//             onClick={() =>
//               setIsMobileMenuOpen(
//                 true
//               )
//             }
//             className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-300 lg:hidden"
//             aria-label="Open menu"
//           >
//             <Menu className="h-5 w-5" />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
//               onClick={() =>
//                 setIsMobileMenuOpen(
//                   false
//                 )
//               }
//             />

//             <motion.div
//               initial={{
//                 x: '100%',
//               }}
//               animate={{
//                 x: 0,
//               }}
//               exit={{
//                 x: '100%',
//               }}
//               transition={{
//                 type: 'spring',
//                 damping: 30,
//                 stiffness: 260,
//               }}
//               className="fixed bottom-0 right-0 top-0 z-50 w-[85%] max-w-sm border-l border-white/10 bg-[#050816]/95 backdrop-blur-3xl lg:hidden"
//             >
//               <div className="flex h-full flex-col p-6">
//                 {/* TOP */}

//                 <div className="mb-10 flex items-center justify-between">
//                   <div>
//                     <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
//                       Navigation
//                     </p>

//                     <h2 className="mt-2 text-2xl font-bold text-white">
//                       Menu
//                     </h2>
//                   </div>

//                   <button
//                     onClick={() =>
//                       setIsMobileMenuOpen(
//                         false
//                       )
//                     }
//                     className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-300"
//                     aria-label="Close menu"
//                   >
//                     <X className="h-5 w-5" />
//                   </button>
//                 </div>

//                 {/* MENU ITEMS */}

//                 <div className="space-y-3">
//                   {navItems.map(
//                     (
//                       item,
//                       index
//                     ) => (
//                       <motion.a
//                         key={
//                           item.href
//                         }
//                         href={
//                           item.href
//                         }
//                         onClick={(
//                           e
//                         ) => {
//                           e.preventDefault();

//                           scrollToSection(
//                             item.href
//                           );
//                         }}
//                         initial={{
//                           opacity: 0,
//                           x: 40,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           x: 0,
//                         }}
//                         transition={{
//                           delay:
//                             index *
//                             0.05,
//                         }}
//                         className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
//                           activeSection ===
//                           item.href.replace(
//                             '#',
//                             ''
//                           )
//                             ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300'
//                             : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white'
//                         }`}
//                       >
//                         <span className="text-sm font-medium">
//                           {
//                             item.label
//                           }
//                         </span>

//                         <div className="h-2 w-2 rounded-full bg-current opacity-60" />
//                       </motion.a>
//                     )
//                   )}
//                 </div>

//                 {/* FOOTER */}

//                 <div className="mt-auto border-t border-white/10 pt-6">
//                   <p className="text-sm text-zinc-500">
//                     Dr. Shipra —
//                     Scientific
//                     Portfolio
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }









import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);

  /* AUTO HIDE NAVBAR ON HOME COOLDOWN */
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showNavTemporarily = () => {
      setShowNavbar(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const isHome = window.scrollY < 100;
        if (isHome) {
          setShowNavbar(false);
        }
      }, 6000);
    };

    showNavTemporarily();

    window.addEventListener('mousemove', showNavTemporarily);
    window.addEventListener('touchstart', showNavTemporarily);
    window.addEventListener('scroll', showNavTemporarily);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', showNavTemporarily);
      window.removeEventListener('touchstart', showNavTemporarily);
      window.removeEventListener('scroll', showNavTemporarily);
    };
  }, []);

  /* ACTIVE SECTION INTERSECTION DETECTOR */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* GLOBAL TOP NAVBAR CONTAINER */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: showNavbar ? 0 : -120,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Adjusted alignment for center placement when logo is hidden */}
        <div className="mx-auto flex max-w-7xl items-center justify-center lg:justify-center px-4 sm:px-6 w-full relative">
          
          {/* DESKTOP HORIZONTAL MENU (Centered Pill style) */}
          <div
            className={`hidden items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-md lg:flex transition-all duration-300 ${
              isScrolled
                ? 'border-sky-100/80 bg-white/80 shadow-[0_12px_30px_rgba(186,230,253,0.15)]'
                : 'border-slate-200/40 bg-white/30'
            }`}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-sky-700'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full border border-sky-200/50 bg-gradient-to-r from-sky-50 to-cyan-50 shadow-inner"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* MOBILE TOGGLE TRIGGER HAMBURGER (Fixed to right side since menu bar has zero left weights) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-sky-300 hover:text-sky-600 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE COLLAPSED RESPONSIVE SIDE DRAWER OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP DISMISS MASK */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* LIGHT SIDEBAR DRAW SHEET */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed bottom-0 right-0 top-0 z-[10000] w-[85%] max-w-sm border-l border-slate-100 bg-white/95 backdrop-blur-xl lg:hidden shadow-2xl"
            >
              <div className="flex h-full flex-col p-6 overflow-y-auto">
                
                {/* HEAD LINK DISCLOSURE */}
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">
                      Portfolio Links
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950">
                      Menu Navigation
                    </h2>
                  </div>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-sky-300 hover:text-sky-600 shadow-sm"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* MOBILE LIST LAYOUT STACK */}
                <div className="space-y-2.5 w-full">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 w-full ${
                        activeSection === item.href.replace('#', '')
                          ? 'border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 text-sky-700 font-bold shadow-inner'
                          : 'border-slate-100 bg-slate-50/50 text-slate-500 hover:border-sky-200 hover:bg-white hover:text-sky-600 font-semibold'
                      }`}
                    >
                      <span className="text-sm tracking-wide">{item.label}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
                    </motion.a>
                  ))}
                </div>

                {/* LOG DATA BRAND NOTE FOOTER */}
                <div className="mt-auto border-t border-slate-100 pt-5 text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Dr. Shipra — Scientific Portfolio
                  </p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}