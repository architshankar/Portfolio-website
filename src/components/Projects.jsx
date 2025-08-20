// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import ScrollReveal from "@/components/ui/scroll-reveal";
// import { projects } from "@/data/projects";
// import ProjectModal from "@/components/project-modal";
// import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery'

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openProjectModal = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const closeProjectModal = () => {
//     setIsModalOpen(false);
//   };

//   const ProjectCard = ({ project, onViewProject }) => (

//     <motion.div
//       className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-300"
//       whileHover={{ y: -5, scale: 1.01 }}
//       transition={{ duration: 0.3 }}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-56 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <p className="text-neutral-600 dark:text-neutral-300 mb-4">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-full text-xs font-medium transition-colors duration-300"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <motion.button
//           onClick={onViewProject}
//           className="text-[#e0f11f] font-medium hover:underline flex items-center bg-transparent border-0 p-0 cursor-pointer"
//           whileHover={{ x: 4 }}
//           transition={{ duration: 0.2 }}
//         >
//           View Project <ArrowRight className="ml-2 h-4 w-4" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );

//   return (
//     <section id="projects" className="py-24 bg-background transition-colors duration-300">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="max-w-5xl mx-auto">
//           <ScrollReveal>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
//             <div className="h-1 w-20 mb-10" style={{ backgroundColor: "rgb(224, 241, 31)" }}></div>

//           </ScrollReveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <ScrollReveal key={project.id} delay={0.1 * (index + 1)}>
//                 <ProjectCard
//                   project={project}
//                   onViewProject={() => openProjectModal(project)}
//                 />
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Project Details Modal */}
//       <ProjectModal
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={closeProjectModal}
//       />



//     </section>
//   );
// }



// import { useRef, useEffect, useState } from 'react'
// import { createRoot } from 'react-dom/client'
// import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'

// // Mock projects data for demonstration
// const mockProjects = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "A modern e-commerce platform with advanced features and seamless user experience.",
//     image: "https://picsum.photos/seed/ecommerce/800/600",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "Collaborative task management application with real-time updates and team features.",
//     image: "https://picsum.photos/seed/taskmanager/800/600",
//     tags: ["Vue.js", "Firebase", "Tailwind"],
//     technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     description: "Beautiful weather dashboard with forecasts, maps, and detailed meteorological data.",
//     image: "https://picsum.photos/seed/weather/800/600",
//     tags: ["React", "OpenWeather API", "Chart.js"],
//     technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   },
//   {
//     id: 4,
//     title: "Social Media Dashboard",
//     description: "Analytics dashboard for social media management with comprehensive insights.",
//     image: "https://picsum.photos/seed/social/800/600",
//     tags: ["Angular", "D3.js", "Node.js"],
//     technologies: ["Angular", "D3.js", "Node.js", "PostgreSQL"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   },
//   {
//     id: 5,
//     title: "Portfolio Website",
//     description: "Responsive portfolio website with modern design and smooth animations.",
//     image: "https://picsum.photos/seed/portfolio/800/600",
//     tags: ["Next.js", "Framer Motion", "Tailwind"],
//     technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   },
//   {
//     id: 6,
//     title: "Chat Application",
//     description: "Real-time chat application with file sharing and group messaging features.",
//     image: "https://picsum.photos/seed/chat/800/600",
//     tags: ["React", "Socket.io", "Express"],
//     technologies: ["React", "Socket.io", "Express", "MongoDB"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example"
//   }
// ]

// function debounce(func, wait) {
//   let timeout
//   return function (...args) {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(this, args), wait)
//   }
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t
// }

// // Project Card Component
// const ProjectCard = ({ project, onViewProject }) => (
//   <motion.div
//     className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-300 h-full flex flex-col select-none"
//     whileHover={{ y: -5, scale: 1.01 }}
//     transition={{ duration: 0.3 }}
//   >
//     <img
//       src={project.image}
//       alt={project.title}
//       className="w-full h-48 object-cover select-none pointer-events-none"
//       draggable="false"
//     />
//     <div className="p-6 flex-1 flex flex-col select-none">
//       <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white select-none">{project.title}</h3>
//       <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1 select-none">
//         {project.description}
//       </p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tags.slice(0, 3).map((tag, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium transition-colors duration-300 text-neutral-800 dark:text-neutral-200 select-none"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <motion.button
//         onClick={(e) => {
//           e.stopPropagation();
//           onViewProject(project);
//         }}
//         className="text-[#e0f11f] font-medium hover:underline flex items-center bg-transparent border-0 p-0 cursor-pointer self-start select-none"
//         whileHover={{ x: 4 }}
//         transition={{ duration: 0.2 }}
//       >
//         View Project <ArrowRight className="ml-2 h-4 w-4" />
//       </motion.button>
//     </div>
//   </motion.div>
// )

// // Simple Modal Component
// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen || !project) return null

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="bg-white dark:bg-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{project.title}</h2>
//             <button
//               onClick={onClose}
//               className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
//             >
//               ✕
//             </button>
//           </div>
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-60 object-cover rounded-xl mb-4"
//           />
//           <p className="text-neutral-600 dark:text-neutral-300 mb-6">{project.description}</p>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">Technologies Used:</h3>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-[#e0f11f] text-black rounded-full text-sm font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 bg-[#e0f11f] text-black rounded-lg font-medium hover:bg-[#c9d91a] transition-colors"
//             >
//               View Live
//             </a>
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white"
//             >
//               View Code
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// class CircularGallery {
//   constructor(container, { projects = mockProjects, bend = 3, onProjectClick } = {}) {
//     this.container = container
//     this.projects = projects
//     this.bend = bend
//     this.onProjectClick = onProjectClick
//     this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }
//     this.onCheckDebounce = debounce(this.onCheck.bind(this), 200)
//     this.currentIndex = 0
//     this.isDown = false

//     this.init()
//   }

//   init() {
//     this.createCards()
//     this.onResize()
//     this.update()
//     this.addEventListeners()
//   }

//   createCards() {
//     this.cardElements = []
//     this.cards = []

//     // Double the projects for infinite scroll
//     const doubledProjects = [...this.projects, ...this.projects]

//     doubledProjects.forEach((project, index) => {
//       const cardElement = document.createElement('div')
//       cardElement.className = 'gallery-card'
//       cardElement.style.cssText = `
//         position: absolute;
//         width: 350px;
//         height: 500px;
//         transform-origin: center center;
//         transition: transform 0.3s ease;
//         user-select: none;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//       `

//       // Create React component container
//       const cardContainer = document.createElement('div')
//       cardContainer.style.cssText = 'width: 100%; height: 100%;'
//       cardElement.appendChild(cardContainer)

//       this.container.appendChild(cardElement)
//       this.cardElements.push(cardElement)

//       this.cards.push({
//         element: cardElement,
//         container: cardContainer,
//         project,
//         index,
//         x: 0,
//         extra: 0,
//         width: 350 + 40, // card width + padding
//         widthTotal: (350 + 40) * doubledProjects.length
//       })

//       // Remove the card click event since we only want modal on button click
//     })
//   }

//   update() {
//     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)
//     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'

//     this.cards.forEach((card, index) => {
//       this.updateCard(card, direction)
//     })

//     this.scroll.last = this.scroll.current
//     this.raf = requestAnimationFrame(this.update.bind(this))
//   }

//   updateCard(card, direction) {
//     card.x = card.width * card.index
//     const currentX = card.x - this.scroll.current - card.extra

//     // Calculate viewport bounds
//     const viewportWidth = this.container.clientWidth
//     const H = viewportWidth / 2

//     // Position calculation with proper bend effect
//     if (this.bend === 0) {
//       card.element.style.transform = `translateX(${currentX}px)`
//     } else {
//       const B_abs = Math.abs(this.bend * 100) // Scale the bend effect
//       const R = (H * H + B_abs * B_abs) / (2 * B_abs)
//       const effectiveX = Math.min(Math.abs(currentX), H)

//       let y = 0
//       let rotation = 0

//       if (effectiveX < H) {
//         const arc = R - Math.sqrt(Math.max(0, R * R - effectiveX * effectiveX))

//         if (this.bend > 0) {
//           y = -arc
//           rotation = -Math.sign(currentX) * Math.asin(effectiveX / R) * (180 / Math.PI)
//         } else {
//           y = arc
//           rotation = Math.sign(currentX) * Math.asin(effectiveX / R) * (180 / Math.PI)
//         }
//       }

//       card.element.style.transform = `translateX(${currentX}px) translateY(${y}px) rotateZ(${rotation}deg)`
//     }

//     // Infinite scroll logic
//     const cardOffset = card.width / 2
//     const viewportOffset = viewportWidth / 2
//     const isBefore = currentX + cardOffset < -viewportOffset - 200
//     const isAfter = currentX - cardOffset > viewportOffset + 200

//     if (direction === 'right' && isBefore) {
//       card.extra -= card.widthTotal
//     }
//     if (direction === 'left' && isAfter) {
//       card.extra += card.widthTotal
//     }
//   }

//   onTouchDown(e) {
//     this.isDown = true
//     this.scroll.position = this.scroll.current
//     this.start = e.touches ? e.touches[0].clientX : e.clientX
//   }

//   onTouchMove(e) {
//     if (!this.isDown) return
//     e.preventDefault()
//     const x = e.touches ? e.touches[0].clientX : e.clientX
//     const distance = (this.start - x) * 0.5
//     this.scroll.target = this.scroll.position + distance
//   }

//   onTouchUp() {
//     this.isDown = false
//     this.onCheck()
//   }

//   onWheel(e) {
//     e.preventDefault()
//     this.scroll.target += e.deltaY * 0.1
//     this.onCheckDebounce()
//   }

//   onCheck() {
//     if (!this.cards || !this.cards[0]) return
//     const width = this.cards[0].width
//     const itemIndex = Math.round(Math.abs(this.scroll.target) / width)
//     const item = width * itemIndex
//     this.scroll.target = this.scroll.target < 0 ? -item : item
//   }

//   onResize() {
//     const width = this.container.clientWidth
//     const height = this.container.clientHeight

//     this.cards.forEach((card) => {
//       const centerX = width / 2 - card.width / 2
//       const centerY = height / 2 - 250 // card height / 2
//       card.element.style.left = `${centerX}px`
//       card.element.style.top = `${centerY}px`
//     })
//   }

//   addEventListeners() {
//     this.boundOnResize = this.onResize.bind(this)
//     this.boundOnWheel = this.onWheel.bind(this)
//     this.boundOnTouchDown = this.onTouchDown.bind(this)
//     this.boundOnTouchMove = this.onTouchMove.bind(this)
//     this.boundOnTouchUp = this.onTouchUp.bind(this)

//     window.addEventListener('resize', this.boundOnResize)
//     this.container.addEventListener('wheel', this.boundOnWheel, { passive: false })
//     this.container.addEventListener('mousedown', this.boundOnTouchDown)
//     window.addEventListener('mousemove', this.boundOnTouchMove)
//     window.addEventListener('mouseup', this.boundOnTouchUp)
//     this.container.addEventListener('touchstart', this.boundOnTouchDown, { passive: false })
//     this.container.addEventListener('touchmove', this.boundOnTouchMove, { passive: false })
//     this.container.addEventListener('touchend', this.boundOnTouchUp)
//   }

//   destroy() {
//     if (this.raf) {
//       cancelAnimationFrame(this.raf)
//     }

//     window.removeEventListener('resize', this.boundOnResize)
//     this.container.removeEventListener('wheel', this.boundOnWheel)
//     this.container.removeEventListener('mousedown', this.boundOnTouchDown)
//     window.removeEventListener('mousemove', this.boundOnTouchMove)
//     window.removeEventListener('mouseup', this.boundOnTouchUp)
//     this.container.removeEventListener('touchstart', this.boundOnTouchDown)
//     this.container.removeEventListener('touchmove', this.boundOnTouchMove)
//     this.container.removeEventListener('touchend', this.boundOnTouchUp)

//     // Clean up DOM elements
//     this.cardElements.forEach(element => {
//       if (element.parentNode) {
//         element.parentNode.removeChild(element)
//       }
//     })
//   }
// }

// export default function CircularProjectGallery({ 
//   projects, 
//   bend = 3 
// }) {
//   // Use mock data if no projects provided (for demonstration)
//   const projectsData = projects && projects.length > 0 ? projects : mockProjects
//   const containerRef = useRef(null)
//   const [selectedProject, setSelectedProject] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [galleryInstance, setGalleryInstance] = useState(null)

//   const openProjectModal = (project) => {
//     setSelectedProject(project)
//     setIsModalOpen(true)
//   }

//   const closeProjectModal = () => {
//     setIsModalOpen(false)
//     setSelectedProject(null)
//   }

//   useEffect(() => {
//     if (containerRef.current) {
//       const gallery = new CircularGallery(containerRef.current, {
//         projects: projectsData,
//         bend,
//         onProjectClick: openProjectModal
//       })

//       setGalleryInstance(gallery)

//       // Render React components into each card
//       gallery.cards.forEach((card) => {
//         const root = createRoot(card.container)
//         root.render(
//           <ProjectCard 
//             project={card.project} 
//             onViewProject={openProjectModal}
//           />
//         )
//       })

//       return () => {
//         gallery.destroy()
//       }
//     }
//   }, [projectsData, bend])

//   return (
//     <>
//       <div 
//         ref={containerRef}
//         className="w-full h-[600px] relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
//         style={{ 
//           background: 'rgba(0, 0, 0, 0.9)',
//           borderRadius: '20px'
//         }}
//       />

//       <ProjectModal
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={closeProjectModal}
//       />
//     </>
//   )
// }













/*
 * CircularProjectGallery.jsx
 * – Cards move only by grabbing/dragging (mouse or touch).
 * – No scroll-wheel support and no inertia after release.
 * – Dark background applied to the gallery container.
 */

import { useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Safarbot from '../assets//projects/safarbot.png'
import Kbazzar from '../assets/projects/kbazzar.png'
import DalalEstate from '../assets/projects/dalalestate.png' 
import InlignTech from '../assets/projects/inligntech.png'

/* ---------- mock data (remove in prod) ---------- */
const mockProjects = [
  {
    id: 1,
    title: "SafarBot ",
    description: "SafarBot is a chatbased travel Itinerary generator that helps users plan their trips effortlessly.",
    image: Safarbot,
    tags: ["React", "Node.js", "MongoDB", "Pytorch", "Express", "Socket.io"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "ChartGPT API", "Socket.io"],
    liveUrl: "https://safar-bot-2.vercel.app/",
    githubUrl: "https://github.com/architshankar/SafarBot-2"
  },
  {
    id: 2,
    title: "K-Bazzar",
    description: "K-Bazzar is a 2nd hand buying and selling marketplace for students of Kiit university.",
    image: Kbazzar,
    tags: ["React", "MongoDB", "Express"],
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://k-bazzar.vercel.app/",
    githubUrl: "https://github.com/architshankar/K-bazzar"
  },
  {
    id: 3,
    title: "Inlign tech",
    description: "Inlign tech is an IIT BBSR's frontend battle hackathon final round project .",
    image: InlignTech,
    tags: ["React", "three.js"],
    technologies: ["React", "three.js", "tailwind"],
    liveUrl: "https://ii-tbbsrr2.vercel.app/",
    githubUrl: "https://github.com/architshankar/IITBBSR-r2"
  },
  {
    id: 4,
    title: "Dalal Estate",
    description: "Frontend based website to list marketplaces online.",
    image: DalalEstate,
    tags: ["React"],
    technologies: ["React"],
    liveUrl: "https://real-estate-blue-seven.vercel.app/",
    githubUrl: "https://github.com/architshankar/RealEstate"
  },
  // {
  //   id: 5,
  //   title: "Portfolio Website",
  //   description: "Responsive portfolio website with modern design and smooth animations.",
  //   image: "https://picsum.photos/seed/portfolio/800/600",
  //   tags: ["Next.js", "Framer Motion", "Tailwind"],
  //   technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/example"
  // },
  // {
  //   id: 6,
  //   title: "Chat Application",
  //   description: "Real-time chat application with file sharing and group messaging features.",
  //   image: "https://picsum.photos/seed/chat/800/600",
  //   tags: ["React", "Socket.io", "Express"],
  //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/example"
  // }
]

/* ---------- helpers ---------- */
const debounce = (fn, wait) => {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn.apply(null, args), wait)
  }
}
const lerp = (a, b, t) => a + (b - a) * t

/* ---------- UI components ---------- */
const ProjectCard = ({ project, onViewProject }) => (
  <motion.div
    className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-300 h-full flex flex-col select-none"
    whileHover={{ y: -5, scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover pointer-events-none select-none"
      draggable={false}
    />
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-800 dark:text-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.button
        onClick={e => {
          e.stopPropagation()
          onViewProject(project)
        }}
        className="text-[#e0f11f] font-medium hover:underline flex items-center bg-transparent border-0 p-0 cursor-pointer"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        View&nbsp;Project <ArrowRight className="ml-2 h-4 w-4" />
      </motion.button>
    </div>
  </motion.div>
)

const ProjectModal = ({ project, isOpen, onClose }) =>
  !isOpen || !project ? null : (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              ✕
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover rounded-xl mb-4"
          />
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            {project.description}
          </p>

          <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#e0f11f] text-black rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveUrl}
              className="px-6 py-2 bg-[#e0f11f] text-black rounded-lg font-medium hover:bg-[#c9d91a]"
            >
              View Live
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="px-6 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              View&nbsp;Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )

/* ---------- Carousel engine ---------- */
class CircularGallery {
  constructor(
    container,
    { projects = mockProjects, bend = 3, onProjectClick } = {}
  ) {
    this.container = container
    this.projects = projects
    this.bend = bend
    this.onProjectClick = onProjectClick

    /*  👇  no easing → no glide after release  */
    this.scroll = { ease: 1, current: 0, target: 0, last: 0 }

    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200)
    this.isDown = false

    this.init()
  }

  init() {
    this.createCards()
    this.onResize()
    this.update()
    this.addEventListeners()
  }

  /* create doubled card set for infinite wrap-around */
  createCards() {
    this.cards = []
    this.cardElements = []

    const doubled = [...this.projects, ...this.projects]
    doubled.forEach((project, index) => {
      const el = document.createElement('div')
      el.className = 'gallery-card'
      el.style.cssText = `
        position:absolute; width:350px; height:500px;
        transform-origin:center; transition:transform .3s ease; user-select:none;
      `

      const reactMount = document.createElement('div')
      reactMount.style.cssText = 'width:100%;height:100%;'
      el.appendChild(reactMount)
      this.container.appendChild(el)

      this.cards.push({
        element: el,
        container: reactMount,
        project,
        index,
        x: 0,
        extra: 0,
        width: 390, // 350 + 40 spacing
        widthTotal: 390 * doubled.length
      })
      this.cardElements.push(el)
    })
  }

  /* animation loop */
  // update = () => {
  //   /* with ease=1, lerp is immediate */
  //   this.scroll.current = lerp(
  //     this.scroll.current,
  //     this.scroll.target,
  //     this.scroll.ease
  //   )
  //   const dir = this.scroll.current > this.scroll.last ? 'right' : 'left'

  //   this.cards.forEach(card => this.updateCard(card, dir))
  //   this.scroll.last = this.scroll.current
  //   this.raf = requestAnimationFrame(this.update)
  // }

  // updateCard(card, direction) {
  //   card.x = card.width * card.index
  //   const currentX = card.x - this.scroll.current - card.extra

  //   /* bend calc (unchanged) */
  //   const vw = this.container.clientWidth
  //   const half = vw / 2
  //   if (this.bend === 0) {
  //     card.element.style.transform = `translateX(${currentX}px)`
  //   } else {
  //     const B = Math.abs(this.bend * 100)
  //     const R = (half * half + B * B) / (2 * B)
  //     const ex = Math.min(Math.abs(currentX), half)

  //     let y = 0,
  //       rot = 0
  //     if (ex < half) {
  //       const arc = R - Math.sqrt(Math.max(0, R * R - ex * ex))
  //       y = this.bend > 0 ? -arc : arc
  //       rot =
  //         (-Math.sign(this.bend) *
  //           Math.sign(currentX) *
  //           Math.asin(ex / R) *
  //           180) /
  //         Math.PI
  //     }
  //     card.element.style.transform = `translateX(${currentX}px) translateY(${y}px) rotate(${rot}deg)`
  //   }

  //   /* infinite wrap-around */
  //   const before = currentX + card.width / 2 < -half - 200
  //   const after = currentX - card.width / 2 > half + 200
  //   if (direction === 'right' && before) card.extra -= card.widthTotal
  //   if (direction === 'left' && after) card.extra += card.widthTotal
  // }


  /* ---------- replace the whole update() method ---------- */
  update = () => {
    /* 1. jump straight to the target (no easing / momentum) */
    this.scroll.current = this.scroll.target

    /* 2. derive direction exactly the same way the original
          gallery did, so the wrap-around math lines up */
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'

    /* 3. position every card */
    this.cards.forEach(card => this.updateCard(card, direction))

    /* 4. remember where we were for the next frame */
    this.scroll.last = this.scroll.current

    /* 5. keep the loop going */
    this.raf = requestAnimationFrame(this.update)
  }


  updateCard(card, direction) {
    card.x = card.width * card.index
    const currentX = card.x - this.scroll.current - card.extra

    /* ---------- SLIGHT CURVE (no rotation) ---------- */
    const vw = this.container.clientWidth
    const half = vw / 2

    if (this.bend === 0) {
      card.element.style.transform = `translateX(${currentX}px)`
    } else {
      const B = Math.abs(this.bend * 60)        // lower = gentler curve
      const R = (half * half + B * B) / (2 * B)
      const ex = Math.min(Math.abs(currentX), half)

      let y = 0
      if (ex < half) {
        const arc = R - Math.sqrt(Math.max(0, R * R - ex * ex))
        y = this.bend > 0 ? -arc : arc         // up for positive bend
      }
      card.element.style.transform = `translateX(${currentX}px) translateY(${y}px)`
    }

    /* ---------- infinite wrap-around ---------- */
    const before = currentX + card.width / 2 < -half - 200
    const after = currentX - card.width / 2 > half + 200
    if (direction === 'right' && before) card.extra -= card.widthTotal
    if (direction === 'left' && after) card.extra += card.widthTotal
  }

  /* ---------- input handling (drag only) ---------- */
  onPointerDown = e => {
    this.isDown = true
    this.start = e.touches ? e.touches[0].clientX : e.clientX
    this.scroll.position = this.scroll.current
  }

  onPointerMove = e => {
    if (!this.isDown) return
    e.preventDefault()
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const dist = (this.start - x) * 0.5
    this.scroll.target = this.scroll.position + dist
  }

  onPointerUp = () => {
    this.isDown = false
    this.onCheck()
  }

  /* snap to nearest card */
  onCheck = () => {
    if (!this.cards.length) return
    const w = this.cards[0].width
    const idx = Math.round(Math.abs(this.scroll.target) / w)
    const pos = w * idx
    this.scroll.target = this.scroll.target < 0 ? -pos : pos
  }

  onResize = () => {
    const { clientWidth: w, clientHeight: h } = this.container
    this.cards.forEach(card => {
      const cx = w / 2 - card.width / 2
      const cy = h / 2 - 250 /* card height /2 */
      card.element.style.left = `${cx}px`
      card.element.style.top = `${cy}px`
    })
  }

  addEventListeners() {
    /* resize */
    this.boundResize = this.onResize
    window.addEventListener('resize', this.boundResize)

    /* DRAG / TOUCH */
    this.container.addEventListener('mousedown', this.onPointerDown)
    window.addEventListener('mousemove', this.onPointerMove)
    window.addEventListener('mouseup', this.onPointerUp)

    this.container.addEventListener('touchstart', this.onPointerDown, {
      passive: false
    })
    window.addEventListener('touchmove', this.onPointerMove, {
      passive: false
    })
    window.addEventListener('touchend', this.onPointerUp)
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.boundResize)

    this.container.removeEventListener('mousedown', this.onPointerDown)
    window.removeEventListener('mousemove', this.onPointerMove)
    window.removeEventListener('mouseup', this.onPointerUp)

    this.container.removeEventListener('touchstart', this.onPointerDown)
    window.removeEventListener('touchmove', this.onPointerMove)
    window.removeEventListener('touchend', this.onPointerUp)

    this.cardElements.forEach(el => el.remove())
  }
}

/* ---------- React wrapper ---------- */
export default function CircularProjectGallery({ projects, bend = 3 }) {
  const data = projects?.length ? projects : mockProjects
  const containerRef = useRef(null)
  const [modalProject, setModalProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const gallery = new CircularGallery(containerRef.current, {
      projects: data,
      bend
    })

    /* mount ProjectCard components inside native DIVs */
    gallery.cards.forEach(card => {
      createRoot(card.container).render(
        <ProjectCard
          project={card.project}
          onViewProject={p => {
            setModalProject(p)
            setIsModalOpen(true)
          }}
        />
      )
    })

    return () => gallery.destroy()
  }, [data, bend])

  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-[600px] relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing bg-neutral-950 shadow-[inset_0_0_35px_rgba(0,0,0,0.6)] select-none"
      />
      <ProjectModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
