



// src/components/VideoCard.jsx
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoCard = ({ rotateX, rotateY, videoSrc, scrollTargetRef }) => {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const targetTimeRef = useRef(0);
  const finishedRef = useRef(false); // desktop: played & ended once
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop (pointer: fine + ≥1024px). Tablets/phones → scrubbing.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const set = () => setIsDesktop(mql.matches);
    set();
    mql.addEventListener?.("change", set);
    return () => mql.removeEventListener?.("change", set);
  }, []);

  // Framer scroll progress over the HERO section
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    // 0 when hero top hits viewport top, 1 when hero bottom hits viewport top
    offset: ["start start", "end start"],
  });

  // Smooth RAF loop: ease currentTime toward targetTimeRef
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const smoothScrub = () => {
      if (!isDesktop && video.duration) {
        // keep paused while scrubbing to avoid autoplay on mobile
        if (!video.paused) video.pause();

        const current = video.currentTime;
        const target = targetTimeRef.current;
        const diff = target - current;

        if (Math.abs(diff) > 0.01) {
          // easing; adjust 0.15 for faster/slower catch-up
          video.currentTime = current + diff * 0.15;
        }
      }
      rafRef.current = requestAnimationFrame(smoothScrub);
    };

    rafRef.current = requestAnimationFrame(smoothScrub);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDesktop]);

  // Map hero scroll progress → target video time (mobile/tablet only)
//   useMotionValueEvent(scrollYProgress, "change", (p) => {
//     const video = videoRef.current;
//     if (!video || isDesktop) return;
//     if (!video.duration) return; // wait for metadata
//     const clamped = Math.max(0, Math.min(1, p));
//     targetTimeRef.current = clamped * video.duration;
//   });


  useMotionValueEvent(scrollYProgress, "change", (p) => {
  const video = videoRef.current;
  if (!video || isDesktop) return;
  if (!video.duration) return; // wait for metadata

  const clamped = Math.max(0, Math.min(1, p));

  const speedFactor = 30; // 🔥 adjust: 1 = normal, 2 = 2x faster, 3 = 3x faster
  targetTimeRef.current = Math.min(
    clamped * speedFactor * video.duration,
    video.duration
  );
});


  // Ensure metadata is ready
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      // show first frame initially
      v.pause();
      v.currentTime = 0;
    };
    v.addEventListener("loadedmetadata", onLoaded);
    return () => v.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  // Desktop: play on hover ONCE; freeze on last frame; no reset until remount
  useEffect(() => {
    if (!isDesktop) return;
    const video = videoRef.current;
    if (!video) return;
    const parent = video.parentElement;

    const onEnter = () => {
      if (finishedRef.current) return; // already played & frozen
      video.currentTime = 0;
      video.play().catch(() => {}); // ignore gesture restrictions on desktop
    };
    const onEnded = () => {
      finishedRef.current = true;
      video.pause();
      video.currentTime = video.duration; // freeze last frame
    };

    parent.addEventListener("mouseenter", onEnter);
    video.addEventListener("ended", onEnded);
    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      video.removeEventListener("ended", onEnded);
    };
  }, [isDesktop]);

  const isTouch = !isDesktop;

  return (
    <motion.div
      style={{
        x: isTouch ? 0 : rotateY,
        y: isTouch ? 0 : rotateX,
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
      }}
      initial={{ opacity: 0, scale: 0.9, y: isTouch ? 20 : 40 }}
      animate={{ opacity: 1, scale: 1, y: isTouch ? 40 : -8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative z-30 ${
        isTouch ? "w-40 h-66 mt-7" : "w-28 h-44 md:w-40 md:h-64"
      } rounded-[5rem] overflow-hidden shadow-2xl will-change-transform`}
      // scale on hover only on desktop
      whileHover={isTouch ? {} : { scale: 1.02 }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
    </motion.div>
  );
};

export default VideoCard;
