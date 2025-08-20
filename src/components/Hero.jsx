
// import React, { useEffect, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
// import Magnet from '../blocks/Animations/Magnet/Magnet'
// import Particles from "@/blocks/Backgrounds/Particles/Particles";

// const Hero = () => {
//   const socialLinks = [
//     { icon: <FaDribbble className="text-xl" />, href: "#", label: "Dribbble" },
//     { icon: <FaGithub className="text-xl" />, href: "https://github.com", label: "GitHub" },
//     { icon: <FaLinkedinIn className="text-xl" />, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: <FaTwitter className="text-xl" />, href: "https://twitter.com", label: "Twitter" },
//   ];

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 150 };
//   const x = useSpring(mouseX, springConfig);
//   const y = useSpring(mouseY, springConfig);

//   const rotateX = useTransform(y, [-100, 100], [5, -5]);
//   const rotateY = useTransform(x, [-100, 100], [-5, 5]);

//   const heroRef = useRef(null);
//   const handleAnimationComplete = () => {
//     console.log('All letters have animated!');
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;

//         mouseX.set(e.clientX - centerX);
//         mouseY.set(e.clientY - centerY);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <div className="relative w-full">
//       {/* Particle Background - Contained to Hero section only */}
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         <Particles
//           particleColors={['#ffffff', '#ffffff']}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* Hero section with background text + image */}
//       <br />
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex flex-col items-center justify-center pt-16 bg-transparent text-foreground transition-colors duration-300 overflow-visible z-10"
//       >
//         {/* Subtle grid background */}
//         <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none z-0"></div>

//         {/* Tagline at the top */}
//         <div className="absolute top-32 left-0 right-0 text-center z-20">
//           <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">
//             {/* Add your tagline here if needed */}
//           </p>
//         </div>

//         {/* Background Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 0.55, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 text-center"
//         >
//           <h1
//             className="text-center leading-[0.95] uppercase"
//             style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
//           >
//             <SplitText
//               text="Archit"
//               className="text-[clamp(8rem,18vw,15rem)] font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300"
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//             />
//             <br />
//             <SplitText
//               text="Shankar"
//               className="text-[clamp(8rem,18vw,15rem)] font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300"
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//             />
//           </h1>
//         </motion.div>

//         {/* Profile Image that follows cursor */}
//         <motion.div
//           style={{
//             x: rotateY,
//             y: rotateX,
//             rotateX,
//             rotateY,
//           }}
//           initial={{ opacity: 0, scale: 0.9, y: 40 }}
//           animate={{ opacity: 1, scale: 1, y: -8 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative z-30 w-28 h-44 md:w-40 md:h-64 rounded-[5rem] overflow-hidden shadow-2xl will-change-transform"
//           whileHover={{ scale: 1.02 }}
//         >
//           <img
//             src="/assets/front2.jpg"
//             alt="Archit portrait"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Down arrow */}
//         <motion.div
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           <a href="#about" aria-label="Scroll down">
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 5V19M12 19L19 12M12 19L5 12"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </motion.div>
//       </section>

//       {/* CTA Section BELOW the hero */}
//       <section className="relative container mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center bg-background text-foreground z-10">
//         {/* Social Links */}
//         <div className="flex space-x-8 mb-10">
//           {socialLinks.map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.href}
//               aria-label={link.label}
//               className="text-foreground hover:text-accent transition-colors duration-300 z-20 relative"
//               whileHover={{ scale: 1.2, color: "#d0ff00" }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {link.icon}
//             </motion.a>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <motion.a
//           href="#contact"
//           className="relative z-20 inline-block px-8 py-4 bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all shadow-lg hover:shadow-accent/20"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//         >
//           Get in touch
//         </motion.a>
//       </section>
//     </div>
//   );
// };

// export default Hero;






// import React, { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
// import Magnet from '../blocks/Animations/Magnet/Magnet'
// import Particles from "@/blocks/Backgrounds/Particles/Particles";

// const Hero = () => {
//   // Mobile detection hook
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const socialLinks = [
//     { icon: <FaDribbble className="text-xl" />, href: "#", label: "Dribbble" },
//     { icon: <FaGithub className="text-xl" />, href: "https://github.com", label: "GitHub" },
//     { icon: <FaLinkedinIn className="text-xl" />, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: <FaTwitter className="text-xl" />, href: "https://twitter.com", label: "Twitter" },
//   ];

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 150 };
//   const x = useSpring(mouseX, springConfig);
//   const y = useSpring(mouseY, springConfig);

//   // Reduced motion for mobile devices
//   const rotateX = useTransform(y, [-100, 100], isMobile ? [2, -2] : [5, -5]);
//   const rotateY = useTransform(x, [-100, 100], isMobile ? [-2, 2] : [-5, 5]);

//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current && !isMobile) { // Disable mouse tracking on mobile
//         const rect = heroRef.current.getBoundingClientRect();
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;

//         mouseX.set(e.clientX - centerX);
//         mouseY.set(e.clientY - centerY);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [mouseX, mouseY, isMobile]);

//   return (
//     <div className="relative w-full">
//       {/* Particle Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         <Particles
//           particleColors={['#ffffff', '#ffffff']}
//           particleCount={200} 
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100} 
//           moveParticlesOnHover={!isMobile} // Disable hover interaction on mobile
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* Hero section */}
//       <br />
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex flex-col items-center justify-center pt-16 bg-transparent text-foreground transition-colors duration-300 overflow-visible z-10"
//       >
//         {/* Subtle grid background */}
//         <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none z-0"></div>

//         {/* Tagline at the top */}
//         <div className={`absolute ${isMobile ? 'top-20' : 'top-32'} left-0 right-0 text-center z-20`}>
//           <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">
//             {/* Add your tagline here if needed */}
//           </p>
//         </div>

//         {/* Background Text - Mobile Responsive */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 0.55, y: 0 }}
//           transition={{ duration: 1 }}
//           className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 text-center ${
//             isMobile ? 'transform translate-y-8' : ''
//           }`}
//         >
//           <h1
//             className="text-center leading-[0.95] uppercase"
//             style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
//           >
//             <SplitText
//               text="Archit"
//               className={`${
//                 isMobile 
//                   ? 'text-[clamp(8rem,18vw,15rem)]' //  text on mobile
//                   : 'text-[clamp(8rem,18vw,15rem)]'
//               } font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300`}
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: isMobile ? 30 : 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//             />
//             <br />
//             <SplitText
//               text="Shankar"
//               className={`${
//                 isMobile 
//                   ? 'text-[clamp(8rem,18vw,15rem)]' // Smaller text on mobile
//                   : 'text-[clamp(8rem,18vw,15rem)]'
//               } font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300`}
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: isMobile ? 20 : 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//             />
//           </h1>
//         </motion.div>

//         {/* Profile Image - Mobile Responsive Positioning */}
//         <motion.div
//           style={{
//             x: isMobile ? 0 : rotateY, // Disable X movement on mobile
//             y: isMobile ? 0 : rotateX, // Disable Y movement on mobile
//             rotateX: isMobile ? 0 : rotateX, // Disable rotation on mobile
//             rotateY: isMobile ? 0 : rotateY, // Disable rotation on mobile
//           }}
//           initial={{ 
//             opacity: 0, 
//             scale: 0.9, 
//             y: isMobile ? 20 : 40 
//           }}
//           animate={{ 
//             opacity: 1, 
//             scale: 1, 
//             y: isMobile ? -250 : -8 // Different Y positioning for mobile
//           }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className={`relative z-30 ${
//             isMobile 
//               ? 'w-28 h-48 mt-8' // Smaller image and margin on mobile
//               : 'w-28 h-44 md:w-40 md:h-64'
//           } rounded-[5rem] overflow-hidden shadow-2xl will-change-transform`}
//           whileHover={isMobile ? {} : { scale: 1.02 }} // Disable hover scale on mobile
//         >
//           <img
//             src="/assets/front2.jpg"
//             alt="Archit portrait"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Down arrow */}
//         <motion.div
//           className={`absolute ${
//             isMobile ? 'bottom-5' : 'bottom-10'
//           } left-1/2 transform -translate-x-1/2 z-20`}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           <a href="#about" aria-label="Scroll down">
//             <svg
//               width={isMobile ? "20" : "24"}
//               height={isMobile ? "20" : "24"}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 5V19M12 19L19 12M12 19L5 12"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </motion.div>
//       </section>

//       {/* CTA Section - Mobile Responsive */}
//       <section className={`relative container mx-auto px-6 md:px-12 ${
//         isMobile ? 'py-12' : 'py-16'
//       } flex flex-col items-center text-center bg-background text-foreground z-10`}>
//         {/* Social Links */}
//         <div className={`flex ${
//           isMobile ? 'space-x-6 mb-8' : 'space-x-8 mb-10'
//         }`}>
//           {socialLinks.map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.href}
//               aria-label={link.label}
//               className="text-foreground hover:text-accent transition-colors duration-300 z-20 relative"
//               whileHover={{ 
//                 scale: isMobile ? 1.1 : 1.2, 
//                 color: "#d0ff00" 
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className={isMobile ? 'text-lg' : 'text-xl'}>
//                 {link.icon}
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <motion.a
//           href="#contact"
//           className={`relative z-20 inline-block ${
//             isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
//           } bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all shadow-lg hover:shadow-accent/20`}
//           whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
//           whileTap={{ scale: 0.97 }}
//         >
//           Get in touch
//         </motion.a>
//       </section>
//     </div>
//   );
// };

// export default Hero;



import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import Magnet from '../blocks/Animations/Magnet/Magnet'
import Particles from "@/blocks/Backgrounds/Particles/Particles";

const Hero = () => {
  // Mobile detection hook
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { icon: <FaDribbble className="text-xl" />, href: "#", label: "Dribbble" },
    { icon: <FaGithub className="text-xl" />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedinIn className="text-xl" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter className="text-xl" />, href: "https://twitter.com", label: "Twitter" },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Reduced motion for mobile devices
  const rotateX = useTransform(y, [-100, 100], isMobile ? [2, -2] : [5, -5]);
  const rotateY = useTransform(x, [-100, 100], isMobile ? [-2, 2] : [-5, 5]);

  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current && !isMobile) { // Disable mouse tracking on mobile
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  return (
    <div className="relative w-full">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={!isMobile} // Disable hover interaction on mobile
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero section */}
      <br />
      <section
        ref={heroRef}
        className={`relative ${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} flex flex-col items-center justify-center pt-16 bg-transparent text-foreground transition-colors duration-300 overflow-visible z-10`}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none z-0"></div>

        {/* Tagline at the top */}
        <div className={`absolute ${isMobile ? 'top-20' : 'top-32'} left-0 right-0 text-center z-20`}>
          <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">
            {/* Add your tagline here if needed */}
          </p>
        </div>

        {/* Background Text - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 0.55,
            y: isMobile ? -50 : 0  // Add this negative Y value for mobile
          }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 text-center ${isMobile ? 'items-start -mt-20' : 'items-center'
            }`}
        >
          <h1
            className="text-center leading-[0.95] uppercase"
            style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
          >
            <SplitText
              text="Archit"
              className={`${isMobile
                ? 'text-[clamp(8rem,18vw,15rem)]' // Slightly smaller text on mobile
                : 'text-[clamp(8rem,18vw,15rem)]'
                } font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300`}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: isMobile ? 30 : 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <br />
            <SplitText
              text="Shankar"
              className={`${isMobile
                ? 'text-[clamp(8rem,18vw,15rem)]' // Slightly smaller text on mobile
                : 'text-[clamp(8rem,18vw,15rem)]'
                } font-black text-[#e0f11f] hover:text-[#e0f11f] transition-colors duration-300`}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: isMobile ? 20 : 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
        </motion.div>

        {/* Profile Image - Mobile Responsive Positioning */}
        <motion.div
          style={{
            x: isMobile ? 0 : rotateY, // Disable X movement on mobile
            y: isMobile ? 0 : rotateX, // Disable Y movement on mobile
            rotateX: isMobile ? 0 : rotateX, // Disable rotation on mobile
            rotateY: isMobile ? 0 : rotateY, // Disable rotation on mobile
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: isMobile ? 20 : 40
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: isMobile ? 40 : -8 // Much smaller gap on mobile - positioned closer to text
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative z-30 ${isMobile
            ? 'w-40 h-66 mt-7'
            : 'w-28 h-44 md:w-40 md:h-64'
            } rounded-[5rem] overflow-hidden shadow-2xl will-change-transform`}
          whileHover={isMobile ? {} : { scale: 1.02 }} // Disable hover scale on mobile
        >
          <img
            src="/assets/front2.jpg"
            alt="Archit portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Down arrow - repositioned for mobile */}
        <motion.div
          className={`absolute ${isMobile ? 'bottom-8' : 'bottom-10'
            } left-1/2 transform -translate-x-1/2 z-20`}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" aria-label="Scroll down">
            <svg
              width={isMobile ? "20" : "24"}
              height={isMobile ? "20" : "24"}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className={`relative container mx-auto px-6 md:px-12 ${isMobile ? 'py-8 -mt-8' : 'py-16'
        } flex flex-col items-center text-center bg-background text-foreground z-10`}>
        {/* Social Links */}
        <div className={`flex ${isMobile ? 'space-x-6 mb-6' : 'space-x-8 mb-10'
          }`}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-foreground hover:text-accent transition-colors duration-300 z-20 relative"
              whileHover={{
                scale: isMobile ? 1.1 : 1.2,
                color: "#d0ff00"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={isMobile ? 'text-lg' : 'text-xl'}>
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className={`relative z-20 inline-block ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
            } bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all shadow-lg hover:shadow-accent/20`}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch
        </motion.a>
      </section>
    </div>
  );
};

export default Hero;