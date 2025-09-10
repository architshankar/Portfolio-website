
import { useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Safarbot from '../assets/projects/safarbot.png'
import Kbazzar from '../assets/projects/kbazzar.png'
import DalalEstate from '../assets/projects/dalalestate.png'
import InlignTech from '../assets/projects/inligntech.png'
import Shuffle from './Shuffle'
import '@fontsource/press-start-2p';

/* ---------- mock data ---------- */
const mockProjects = [
  {
    id: 1,
    title: "SafarBot",
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
    title: "Inlign Tech",
    description: "Inlign tech is an IIT BBSR's frontend battle hackathon final round project.",
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
  }
]

/* ---------- helpers ---------- */
const lerp = (a, b, t) => a + (b - a) * t

/* ---------- UI components ---------- */
const ProjectCard = ({ project, onViewProject }) => (
  <motion.div
    className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 h-full flex flex-col select-none"
    whileHover={{ y: -5, scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover pointer-events-none"
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
        className="text-[#e0f11f] font-medium hover:underline flex items-center"
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
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button onClick={onClose}>✕</button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover rounded-xl mb-4"
          />
          <p className="mb-6">{project.description}</p>

          <h3 className="font-semibold mb-2">Technologies Used</h3>
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
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="px-6 py-2 bg-[#e0f11f] text-black rounded-lg font-medium hover:bg-[#c9d91a]">
              View Live
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="px-6 py-2 border rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700">
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )

/* ---------- Carousel engine ---------- */
class CircularGallery {
  constructor(container, { projects = mockProjects, bend = 3 } = {}) {
    this.container = container
    this.projects = projects
    this.bend = bend

    this.scroll = { current: 0, target: 0, last: 0, velocity: 0 }
    this.isDown = false
    this.lastX = 0
    this.lastMoveTime = 0

    this.init()
  }

  init() {
    this.createCards()
    this.totalWidth = this.cards.length * this.cards[0].width
    this.onResize()
    this.update()
    this.addEventListeners()
  }

  createCards() {
    this.cards = []
    this.cardElements = []
    this.projects.forEach((project, index) => {
      const el = document.createElement('div')
      el.className = 'gallery-card'
      el.style.cssText = `position:absolute; width:350px; height:500px; user-select:none;`

      const mount = document.createElement('div')
      mount.style.cssText = 'width:100%;height:100%;'
      el.appendChild(mount)
      this.container.appendChild(el)

      this.cards.push({
        element: el,
        container: mount,
        project,
        index,
        x: 0,
        extra: 0,
        width: 390
      })
      this.cardElements.push(el)
    })
  }

  update = () => {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, 0.15)

    if (!this.isDown) {
      this.scroll.target += this.scroll.velocity
      this.scroll.velocity *= 0.92
      if (Math.abs(this.scroll.velocity) < 0.05) this.scroll.velocity = 0
    }

    this.cards.forEach(card => this.updateCard(card))
    this.scroll.last = this.scroll.current
    this.raf = requestAnimationFrame(this.update)
  }

  updateCard(card) {
    card.x = card.width * card.index
    let currentX = card.x - this.scroll.current - card.extra
    const vw = this.container.clientWidth
    const half = vw / 2

    // Wrap-around logic (fix gaps)
    if (currentX < -this.totalWidth / 2) card.extra -= this.totalWidth
    if (currentX > this.totalWidth / 2) card.extra += this.totalWidth
    currentX = card.x - this.scroll.current - card.extra

    // Apply bending
    const B = Math.abs(this.bend * 60)
    const R = (half * half + B * B) / (2 * B)
    const ex = Math.min(Math.abs(currentX), half)
    let y = 0
    if (ex < half) {
      const arc = R - Math.sqrt(Math.max(0, R * R - ex * ex))
      y = this.bend > 0 ? -arc : arc
    }
    card.element.style.transform = `translateX(${currentX}px) translateY(${y}px)`
  }

  onPointerDown = e => {
    this.isDown = true
    this.start = e.touches ? e.touches[0].clientX : e.clientX
    this.scroll.position = this.scroll.current
    this.scroll.velocity = 0
    this.lastX = this.start
    this.lastMoveTime = Date.now()
  }

  onPointerMove = e => {
    if (!this.isDown) return
    e.preventDefault()
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const dist = (this.start - x) * 0.6
    this.scroll.target = this.scroll.position + dist

    const now = Date.now()
    const dx = this.lastX - x
    const dt = now - this.lastMoveTime
    if (dt > 0) this.scroll.velocity = (dx / dt) * 20
    this.lastX = x
    this.lastMoveTime = now
  }

  onPointerUp = () => { this.isDown = false }

  onResize = () => {
    const { clientWidth: w, clientHeight: h } = this.container
    this.cards.forEach(card => {
      card.element.style.left = `${w / 2 - card.width / 2}px`
      card.element.style.top = `${h / 2 - 250}px`
    })
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize)
    this.container.addEventListener('mousedown', this.onPointerDown)
    window.addEventListener('mousemove', this.onPointerMove, { passive: false })
    window.addEventListener('mouseup', this.onPointerUp)
    this.container.addEventListener('touchstart', this.onPointerDown, { passive: true })
    window.addEventListener('touchmove', this.onPointerMove, { passive: false })
    window.addEventListener('touchend', this.onPointerUp)
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.onResize)
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
    const gallery = new CircularGallery(containerRef.current, { projects: data, bend })

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
    <section id="projects" className="w-full flex flex-col items-center gap-6 mt-20">
      {/* ✅ Title here */}
      {/* <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        <Shuffle
          text="My Projects"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
      </h2> */}

      {/* <h2 className="text-center m-4">
        <Shuffle
          text="My Projects"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
          style={{  fontFamily: "'Press Start 2P', sans-serif" }}
        />
      </h2> */}
      <h2 className="text-center m-4 flex justify-center gap-2 items-end">
        <Shuffle
          text="My"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
          style={{ fontFamily: "'Press Start 2P', sans-serif" }}
        />
        <Shuffle
          text="Projects"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-2xl md:text-3xl font-bold tracking-tight"
          style={{ fontFamily: "'Press Start 2P', sans-serif" , color: "#e0f11f"  }}
        />
      </h2>



      {/* ✅ Gallery */}
      <div
        ref={containerRef}
        className="w-full h-[600px] relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing bg-neutral-950 shadow-[inset_0_0_35px_rgba(0,0,0,0.6)] select-none"
      />

      {/* ✅ Modal */}
      <ProjectModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )

}
