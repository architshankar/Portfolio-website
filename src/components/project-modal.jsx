

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0 relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-[80vh] w-full md:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 flex-grow overflow-auto">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Project Details</h3>
                  <p className="text-muted-foreground">
                    This project was developed with a focus on user experience and responsive design.
                    The primary goal was to create an intuitive interface that works seamlessly across
                    all devices while maintaining performance and accessibility.
                  </p>

                  <h3 className="text-xl font-semibold mt-6">My Role</h3>
                  <p className="text-muted-foreground">
                    As the lead developer on this project, I was responsible for architecture decisions,
                    component design, and ensuring the application met performance requirements. I worked
                    closely with the design team to implement pixel-perfect UI components.
                  </p>

                  <h3 className="text-xl font-semibold mt-6">Key Features</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Responsive design with mobile-first approach</li>
                    <li>Optimized performance with lazy loading and code splitting</li>
                    <li>Accessibility compliant with WCAG 2.1 standards</li>
                    <li>Interactive data visualizations and animations</li>
                    <li>Multi-language support for global audience</li>
                  </ul>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Visit Live Site
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-muted hover:bg-muted/80 font-medium rounded-lg transition-all"
                >
                  View Repository
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
