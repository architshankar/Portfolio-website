
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ActivityModal({ activity, isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close modal on outside click
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

  // Close modal on escape key
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

  if (!activity) return null;

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
            className="bg-card w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 md:p-8 border-b border-border flex items-center">
              <div className="mr-4 text-accent">{activity.icon}</div>
              <h2 className="text-2xl md:text-3xl font-bold">{activity.title}</h2>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 hover:bg-muted text-muted-foreground hover:text-foreground p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content with responsive layout */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
              <div className="flex flex-col-reverse md:flex-row gap-6">
                {/* Info Section */}
                <div className="w-full md:w-1/2 space-y-6">
                  <p className="text-muted-foreground">{activity.description}</p>

                  {activity.details?.role && (
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Role</h3>
                      <p className="text-muted-foreground">{activity.details.role}</p>
                    </div>
                  )}

                  {activity.details?.duration && (
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Duration</h3>
                      <p className="text-muted-foreground">{activity.details.duration}</p>
                    </div>
                  )}

                  {activity.details?.impact && (
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <p className="text-muted-foreground">{activity.details.impact}</p>
                    </div>
                  )}

                  {activity.details?.achievements?.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Key Achievements</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                        {activity.details.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Gallery Section */}
                {activity.details?.images?.length > 0 && (
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-xl font-semibold mb-2 md:mb-4">Gallery</h3>
                    <div className="flex flex-col gap-4">
                      {activity.details.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${activity.title} image ${index + 1}`}
                          className="rounded-lg w-full h-auto object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-border flex flex-wrap gap-4">
              {/* <button
                onClick={onClose}
                className="px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Close
              </button> */}
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 active:scale-95 transition-all transform shadow-lg"
              >
                Close
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
