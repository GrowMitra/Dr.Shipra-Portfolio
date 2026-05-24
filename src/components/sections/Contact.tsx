// import { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Instagram,
//   Facebook,
//   Linkedin,
//   Youtube,
//   ArrowUpRight,
// } from 'lucide-react';

// export default function Contact() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const isInView = useInView(containerRef, {
//     once: true,
//     margin: '-100px',
//   });

//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] =
//     useState(false);

//   const [isSubmitted, setIsSubmitted] =
//     useState(false);

//   const [focusedField, setFocusedField] =
//     useState<string | null>(null);

//   const handleSubmit = async (
//     e: React.FormEvent
//   ) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     await new Promise((resolve) =>
//       setTimeout(resolve, 1800)
//     );

//     setIsSubmitting(false);

//     setIsSubmitted(true);

//     setFormState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement |
//       HTMLTextAreaElement |
//       HTMLSelectElement
//     >
//   ) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const socialLinks = [
//     {
//       icon: <Instagram className="h-5 w-5" />,
//       href: '#',
//     },
//     {
//       icon: <Facebook className="h-5 w-5" />,
//       href: '#',
//     },
//     {
//       icon: (
//         <span className="text-[15px] font-semibold">
//           𝕏
//         </span>
//       ),
//       href: '#',
//     },
//     {
//       icon: <Linkedin className="h-5 w-5" />,
//       href: '#',
//     },
//     {
//       icon: <Youtube className="h-5 w-5" />,
//       href: '#',
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden py-32"
//     >
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 bg-[#050816]" />

//       <div className="absolute inset-0 scientific-grid opacity-[0.04]" />

//       <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

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
//           transition={{ duration: 0.8 }}
//           className="mx-auto mb-24 max-w-4xl text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
//             Contact & Collaboration
//           </div>

//           <h2 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
//             Let’s Discuss
//             <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
//               {' '}
//               Something Exceptional.
//             </span>
//           </h2>

//           <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
         
//           New to startups? No matter where you’re from, 
//           step into the spotlight and show the world what you do!
//           </p>
//         </motion.div>

//         {/* GRID */}

//         <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* FORM SECTION */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] to-blue-500/[0.02]" />

//             <div className="relative z-10">
//               <div className="mb-10 flex items-center justify-between">
//                 <div>
//                   <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-300">
//                     Contact Form
//                   </p>

//                   <h3 className="text-3xl font-bold text-white">
//                     Send a Message
//                   </h3>
//                 </div>

//                 <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 md:flex">
//                   <Send className="h-6 w-6" />
//                 </div>
//               </div>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-6"
//               >
//                 {/* NAME + EMAIL */}

//                 <div className="grid gap-6 md:grid-cols-2">
//                   {[
//                     {
//                       label: 'Full Name',
//                       name: 'name',
//                       type: 'text',
//                     },
//                     {
//                       label: 'Email Address',
//                       name: 'email',
//                       type: 'email',
//                     },
//                   ].map((field) => (
//                     <div
//                       key={field.name}
//                       className="relative"
//                     >
//                       <label
//                         className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none ${
//                           focusedField ===
//                             field.name ||
//                           formState[
//                             field.name as keyof typeof formState
//                           ]
//                             ? 'top-2 text-xs text-cyan-300'
//                             : 'top-1/2 -translate-y-1/2 text-zinc-500'
//                         }`}
//                       >
//                         {field.label}
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={
//                           formState[
//                             field.name as keyof typeof formState
//                           ]
//                         }
//                         onChange={handleChange}
//                         onFocus={() =>
//                           setFocusedField(
//                             field.name
//                           )
//                         }
//                         onBlur={() =>
//                           setFocusedField(null)
//                         }
//                         required
//                         className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* SUBJECT */}

//                 <div className="relative">
//                   <label
//                     className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none ${
//                       focusedField === 'subject' ||
//                       formState.subject
//                         ? 'top-2 text-xs text-cyan-300'
//                         : 'top-1/2 -translate-y-1/2 text-zinc-500'
//                     }`}
//                   >
//                     Inquiry Type
//                   </label>

//                   <select
//                     name="subject"
//                     value={formState.subject}
//                     onChange={handleChange}
//                     onFocus={() =>
//                       setFocusedField('subject')
//                     }
//                     onBlur={() =>
//                       setFocusedField(null)
//                     }
//                     required
//                     className="h-16 w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.05]"
//                   >
//                     <option value="" disabled />

//                     <option value="research">
//                       Research Collaboration
//                     </option>

//                     <option value="student">
//                       Student Position
//                     </option>

//                     <option value="speaking">
//                       Speaking Engagement
//                     </option>

//                     <option value="media">
//                       Media & Press Inquiry
//                     </option>
//                   </select>
//                 </div>

//                 {/* MESSAGE */}

//                 <div className="relative">
//                   <label
//                     className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none ${
//                       focusedField === 'message' ||
//                       formState.message
//                         ? 'top-3 text-xs text-cyan-300'
//                         : 'top-6 text-zinc-500'
//                     }`}
//                   >
//                     Your Message
//                   </label>

//                   <textarea
//                     name="message"
//                     rows={6}
//                     value={formState.message}
//                     onChange={handleChange}
//                     onFocus={() =>
//                       setFocusedField('message')
//                     }
//                     onBlur={() =>
//                       setFocusedField(null)
//                     }
//                     required
//                     className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-white outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
//                   />
//                 </div>

//                 {/* BUTTON */}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(34,211,238,0.35)] disabled:opacity-70"
//                 >
//                   <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                   {isSubmitting ? (
//                     <div className="relative z-10 h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
//                   ) : (
//                     <div className="relative z-10 flex items-center gap-3">
//                       Send Message

//                       <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                     </div>
//                   )}
//                 </button>

//                 {isSubmitted && (
//                   <motion.p
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     className="text-center text-sm text-emerald-400"
//                   >
//                     Your message has been sent
//                     successfully.
//                   </motion.p>
//                 )}
//               </form>
//             </div>
//           </motion.div>

//           {/* RIGHT SECTION */}

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col gap-8"
//           >
//             {/* CONTACT CARDS */}

//             <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
//               <div className="mb-8">
//                 <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-300">
//                   Direct Contact
//                 </p>

//                 <h3 className="text-3xl font-bold text-white">
//                   Reach Out Anytime
//                 </h3>
//               </div>

//               <div className="space-y-5">
//                 {[
//                   {
//                     icon: <Mail className="h-5 w-5" />,
//                     title: 'Email Address',
//                     value:
//                       'dr.elena@researchlab.com',
//                     sub: 'Primary communication channel',
//                     href: 'mailto:dr.elena@researchlab.com',
//                   },
//                   {
//                     icon: <Phone className="h-5 w-5" />,
//                     title: 'Phone Number',
//                     value: '+1 (617) 555-1234',
//                     sub: 'Mon - Fri / 9AM - 6PM',
//                     href: 'tel:+16175551234',
//                   },
//                   {
//                     icon: (
//                       <MapPin className="h-5 w-5" />
//                     ),
//                     title: 'Office Location',
//                     value:
//                       'MIT Research Center',
//                     sub:
//                       'Cambridge, Massachusetts',
//                     href: '#',
//                   },
//                 ].map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.href}
//                     whileHover={{ y: -3 }}
//                     className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
//                   >
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
//                       {item.icon}
//                     </div>

//                     <div className="flex-1">
//                       <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
//                         {item.title}
//                       </p>

//                       <p className="mt-1 text-base font-semibold text-white">
//                         {item.value}
//                       </p>

//                       <p className="mt-1 text-sm text-zinc-500">
//                         {item.sub}
//                       </p>
//                     </div>

//                     <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all duration-300 group-hover:text-cyan-300" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* SOCIAL SECTION */}

//             <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-400/[0.05] to-blue-500/[0.03] p-8 backdrop-blur-2xl">
//               <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

//               <div className="relative z-10">
//                 <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-300">
//                   Social Presence
//                 </p>

//                 <div className="mt-8 flex flex-wrap items-center gap-4">
//                   {socialLinks.map(
//                     (social, index) => (
//                       <motion.a
//                         key={index}
//                         href={social.href}
//                         whileHover={{
//                           y: -4,
//                           scale: 1.04,
//                         }}
//                         whileTap={{
//                           scale: 0.96,
//                         }}
//                         className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
//                       >
//                         {social.icon}
//                       </motion.a>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <span className="text-sm font-bold">𝕏</span>, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 md:py-32 text-slate-800 border-t border-slate-100"
    >
      {/* PREMIUM SKY BLUE LIGHT MESH PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
      
      {/* Soft Ambient Fluid Aura Spheres */}
      <div className="absolute left-[-100px] top-[10%] h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-50/40 blur-[120px] pointer-events-none" />

      {/* CONTAINER */}
      <div ref={containerRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
            Contact & Collaboration
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Let’s Discuss
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {' '}
              Something Exceptional.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
            New to startups? No matter where you’re from, step into the spotlight and show the world what you do!
          </p>
        </motion.div>

        {/* RESPONSIVE LAYOUT GRID */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] w-full items-start">
          
          {/* FORM PANEL — SKY BLUE MATTE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px] border border-sky-100 bg-sky-50/40 p-6 md:p-10 shadow-[0_15px_40px_rgba(186,230,253,0.12)] w-full"
          >
            <div className="relative z-10 w-full">
              <div className="mb-10 flex items-center justify-between gap-4 text-left">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                    Contact Form
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">
                    Send a Message
                  </h3>
                </div>

                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 border border-sky-100 shadow-sm">
                  <Send className="h-5 w-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                
                {/* NAME + EMAIL */}
                <div className="grid gap-6 md:grid-cols-2 w-full">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text' },
                    { label: 'Email Address', name: 'email', type: 'email' },
                  ].map((field) => (
                    <div key={field.name} className="relative w-full text-left">
                      <label
                        className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none font-bold ${
                          focusedField === field.name || formState[field.name as keyof typeof formState]
                            ? 'top-2 text-[10px] uppercase tracking-wider text-sky-600'
                            : 'top-1/2 -translate-y-1/2 text-sm text-slate-400'
                        }`}
                      >
                        {field.label}
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="h-16 w-full rounded-2xl border border-sky-100 bg-white px-5 pt-4 text-sm font-bold text-slate-800 outline-none transition-all duration-300 focus:border-sky-400 focus:shadow-[0_4px_20px_rgba(14,165,233,0.05)]"
                      />
                    </div>
                  ))}
                </div>

                {/* INQUIRY SELECTION */}
                <div className="relative w-full text-left">
                  <label
                    className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none font-bold ${
                      focusedField === 'subject' || formState.subject
                        ? 'top-2 text-[10px] uppercase tracking-wider text-sky-600'
                        : 'top-1/2 -translate-y-1/2 text-sm text-slate-400'
                    }`}
                  >
                    Inquiry Type
                  </label>

                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-16 w-full cursor-pointer appearance-none rounded-2xl border border-sky-100 bg-white px-5 pt-4 text-sm font-bold text-slate-800 outline-none transition-all duration-300 focus:border-sky-400"
                  >
                    <option value="" disabled />
                    <option value="research">Research Collaboration</option>
                    <option value="student">Student Position</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media & Press Inquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l border-sky-100 pl-3 text-sky-600 text-xs font-black">
                    ▼
                  </div>
                </div>

                {/* TEXTAREA MESSAGE */}
                <div className="relative w-full text-left">
                  <label
                    className={`absolute left-5 z-10 transition-all duration-300 pointer-events-none font-bold ${
                      focusedField === 'message' || formState.message
                        ? 'top-3 text-[10px] uppercase tracking-wider text-sky-600'
                        : 'top-5 text-sm text-slate-400'
                    }`}
                  >
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full resize-none rounded-2xl border border-sky-100 bg-white px-5 py-6 pt-8 text-sm font-bold text-slate-800 outline-none transition-all duration-300 focus:border-sky-400 focus:shadow-[0_4px_20px_rgba(14,165,233,0.05)]"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(14,165,233,0.2)] disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {isSubmitting ? (
                    <div className="relative z-10 h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  ) : (
                    <div className="relative z-10 flex items-center gap-2 text-xs tracking-widest font-black">
                      Send Message
                      <Send className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  )}
                </button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm font-bold text-emerald-600"
                  >
                    Your message has been sent successfully.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* CONTACT INFO SIDE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 w-full text-left"
          >
            {/* DIRECT CONNECTIONS */}
            <div className="rounded-[40px] border border-sky-100 bg-white p-6 md:p-8 shadow-[0_15px_40px_rgba(186,230,253,0.12)] w-full">
              <div className="mb-8">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                  Direct Contact
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">
                  Reach Out Anytime
                </h3>
              </div>

              <div className="space-y-4 w-full">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    title: 'Email Address',
                    value: 'dr.elena@researchlab.com',
                    sub: 'Primary communication channel',
                    href: 'mailto:dr.elena@researchlab.com',
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    title: 'Phone Number',
                    value: '+1 (617) 555-1234',
                    sub: 'Mon - Fri / 9AM - 6PM',
                    href: 'tel:+16175551234',
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    title: 'Office Location',
                    value: 'MIT Research Center',
                    sub: 'Cambridge, Massachusetts',
                    href: '#',
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-4 rounded-2xl border border-sky-50 bg-white p-4 transition-all duration-300 hover:border-sky-200 hover:shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shadow-inner">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-slate-900 truncate">
                        {item.value}
                      </p>
                      <p className="text-xs text-slate-400 font-semibold truncate">
                        {item.sub}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-sky-300 transition-colors duration-300 group-hover:text-sky-500 stroke-[2.5]" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* SOCIAL REACH CHANNELS */}
            <div className="relative overflow-hidden rounded-[40px] border border-sky-100 bg-sky-50/50 p-6 md:p-8 shadow-[0_15px_40px_rgba(186,230,253,0.1)] w-full">
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 w-full">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-700">
                  Social Presence
                </p>

                <div className="flex flex-wrap items-center gap-3 w-full">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-sky-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:border-sky-300 hover:text-sky-600 shadow-inner"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}