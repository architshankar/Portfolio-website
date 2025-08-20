import ScrollReveal from "@/components/ui/scroll-reveal";
import Marquee from "@/components/marquee";
import { motion } from "framer-motion";
import TrueFocus from '../blocks/TextAnimations/TrueFocus/TrueFocus';
import ScrollVelocity from '../blocks/TextAnimations/ScrollVelocity/ScrollVelocity';



export default function About() {
    const skills = [
        "React", "Tailwind CSS", "UI/UX Design", "Framer Motion", "Next.js"
    ];

    const toolItems = [
        "PHOTOSHOP", "FIGMA", "ILLUSTRATOR", "FRAMER", "WEBFLOW",
        "REACT", "JAVASCRIPT", "TAILWIND", "MOTION", "TYPESCRIPT"
    ];

    return (
        <section id="about" className="py-24 transition-colors duration-300">

            <div className="relative overflow-hidden bg-background py-12 mt-32">
                {/* Fade overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 z-10 bg-gradient-to-b from-background to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />

                {/* Marquee 1 */}
                {/* <Marquee
                    items={toolItems}
                    speed={0.2}
                    direction="right"
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-[.01em] scale-x-[1.1] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
                    itemColor="#e0f11f"
                /> */}

                {/* Marquee 2 */}
                {/* <Marquee
                    items={[...toolItems].reverse()}
                    speed={0.3}
                    direction="left"
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-[.01em] scale-x-[1.1] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
                    itemColor="#e0f11f"
                /> */}


                <ScrollVelocity
                    texts={['Fullstack Developer   ◆', 'Data Analyist   ◆',]}
                    velocity={20}
                    className="custom-scroll-text"
                />
            </div>




            <div className="container mx-auto px-6 md:px-12 mt-20">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <TrueFocus
                                sentence="About Me"
                                manualMode={false}
                                blurAmount={2}
                                borderColor="purple"
                                animationDuration={2}
                                pauseBetweenAnimations={1}
                            />
                        </h2>
                        <br />
                        <div className="h-1 w-20 mb-10" style={{ backgroundColor: "rgb(224, 241, 31)" }}></div>
                    </ScrollReveal>

                    <div className="flex flex-col md:flex-row md:space-x-12">
                        {/* <ScrollReveal className="w-full md:w-1/2 mb-10 md:mb-0" delay={0.2}>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                With over 8 years of experience in digital design and development, I specialize in creating
                                user-centered experiences that balance aesthetics with functionality.
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                My approach combines strategic thinking with creative problem-solving to deliver impactful
                                digital solutions for brands and businesses across various industries.
                            </p>

                        </ScrollReveal> */}
                        <ScrollReveal className="w-full md:w-1/2 mb-10 md:mb-0" delay={0.2}>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                I'm a final year BTech student majoring in Information Technology from Kalinga Institute of Industrial Technology (KIIT), passionate about creating innovative digital solutions and exploring cutting-edge technologies.
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                My journey in tech has been driven by curiosity and a desire to solve real-world problems through code, combining academic knowledge with hands-on project experience to build meaningful applications.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal className="w-full md:w-1/2" delay={0.4}>

                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="rounded-2xl shadow-lg"
                            >
                                <img
                                    src="/assets/about.jpg"
                                    alt="image"
                                    className="rounded-2xl w-full h-auto object-cover"
                                />
                            </motion.div>

                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Bottom Tools Marquee - opposite direction */}
            <div className="relative overflow-hidden bg-background py-12 mt-32">

                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 z-10 bg-gradient-to-b from-background to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />


                {/* <Marquee
                    items={[...toolItems].reverse()}
                    speed={0.3}
                    direction="left"
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-[.01em] scale-x-[1.1] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
                    itemColor="#e0f11f"
                /> */}

                <ScrollVelocity
                    texts={['CONTINUOUS LEARNING   ◆', 'EFFORT COMPOUNDS   ◆',]}
                    velocity={20}
                    className="custom-scroll-text"
                />
            </div>


        </section>
    );
}
