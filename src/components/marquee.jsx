

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';

export default function Marquee({
  items,
  direction = 'left',
  speed = 30,
  className = '',
  pauseOnHover = true,
  itemColor = '#e0f11f',
}) {
  const marqueeRef = useRef(null);
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();

  const scrollSpeed = useTransform(scrollYProgress, [0, 1], [speed, speed * 1.5]);

  useEffect(() => {
    const speedMultiplier = direction === 'right' ? 1 : -1;

    const startAnimation = async () => {
      controls.start({
        x: `${100 * speedMultiplier}%`,
        transition: {
          duration: 100 / speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, [controls, direction, speed, scrollSpeed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      controls.start({
        x: direction === 'right' ? '100%' : '-100%',
        transition: {
          duration: 100 / speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    }
  };

  
  const infiniteItems = [...items, ...items, ...items , ...items];

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="inline-block"
        animate={controls}
        initial={{ x: direction === 'right' ? '-100%' : '0%' }}
      >
        {infiniteItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-block mx-6"
            style={{ color: itemColor }}
          >
            {item} <span className="mx-2" style={{ color: '#484848' }}>◆</span>

          </span>
        ))}
      </motion.div>
    </div>
  );
}
