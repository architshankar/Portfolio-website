

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Mic, ArrowRight, Dumbbell, X } from "lucide-react";
import Stack from "../blocks/Components/Stack/Stack";

// ScrollReveal Component (simplified version)
const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Activity Modal Component
const ActivityModal = ({ activity, isOpen, onClose }) => {
  if (!isOpen || !activity) return null;

  // Convert images array to the format expected by Stack component
  const stackImages = activity.details?.images?.map((img, index) => ({
    id: index + 1,
    img: img
  })) || [];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            {activity.icon}
            <h2 className="text-2xl font-bold ml-3">{activity.title}</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.description}</p>
        </div>

        {activity.details && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Text content */}
            <div className="flex-1 space-y-6">
              {activity.details.role && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Role</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.details.role}</p>
                </div>
              )}

              {activity.details.duration && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.details.duration}</p>
                </div>
              )}

              {activity.details.impact && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.details.impact}</p>
                </div>
              )}

              {activity.details.achievements && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {activity.details.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right side - Image Stack */}
            {stackImages.length > 0 && (
              <div className="flex-1 flex flex-col items-center">
                
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 400, height: 300 }}
                  cardsData={stackImages}
                />
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Main Extracurricular Component
export default function Extracurricular() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openActivityModal = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeActivityModal = () => {
    setIsModalOpen(false);
  };

  const activities = [
    {
      icon: <Globe className="w-10 h-10" style={{ color: "rgb(224, 241, 31)" }} />,
      title: "Volunteer Work",
      description:
        "Dedicated volunteer with FHI and other orginizations , mentoring underprivileged children through value-based education and immersive field experiences to inspire personal growth and learning.",
      details: {
        role: "Fellow volunteer under different orginizations.",
        duration: "2021 - Present",
        impact:
          "Fostered an inclusive and supportive environment that promoted knowledge sharing, career development, and accessible learning for underprivileged individuals.",
        achievements: [
          "Expanded community membership .",
          "Participated in 5+ impactful events focused on uplifting underprivileged communities across multiple dimensions.",
          "Mentored over 100 students, guiding them from foundational learning to personal and professional growth.",
          "Established a mentorship initiative that successfully connected new volunteers with the organization, fostering long-term engagement.",
        ],
        images: [
          "/assets/vol1.jpg",
          "/assets/vol2.jpg",
          "/assets/vol3.jpg",
          "/assets/vol4.jpg",
          "/assets/vol5.jpg",
        ],
      },
    },
    {
      icon: <Dumbbell className="w-10 h-10" style={{ color: "rgb(224, 241, 31)" }} />,
      title: "Fitness Enthusiast",
      description:
        "Passionate about fitness, regularly participating in half marathons and maintaining a disciplined gym and nutrition routine to stay strong, focused, and energized.",
      details: {
        achievements: [
          "Completed over 5 half marathons, consistently finishing among the top 10 participants",
          "Organized local running clubs and training sessions promoting community fitness and well-being",
          "Advocated for mental and physical health through public talks and awareness campaigns",
          "Collaborated with fitness brands to sponsor and promote inclusive marathon events",
        ],
        images: [
          "/assets/fit1.jpg",
          "/assets/fit2.jpg"
        ],
      },
    },
    {
      icon: <BookOpen className="w-10 h-10" style={{ color: "rgb(224, 241, 31)" }} />,
      title: "Graphic Designer",
      description:
        "Graphic design lead in our college's offical dance society .",
      details: {
        role: "Graphic design and content lead",
        duration: "2024 - 2025",
        impact:
          "Created a legacy of quality content design teaching juniors the importance of quality content design and its impact on audience engagement.",
        achievements: [
          "Got promoted by the society's administration for the role",
          "Featured in college's instagram handle",
          "Created comprehensive guide for coming juniors",
          
        ],
        images: [
          "/assets/yoyoer.jpg",
          "/assets/dg1.jpg",
          "/assets/dg2.jpg",
        ],
      },
    },
    {
      icon: <Award className="w-10 h-10" style={{ color: "rgb(224, 241, 31)" }} />,
      title: "Student Coordinator",
      description:
        "Coordinated KIIT FEST (college's biggest fest)under school of computer science department ",
      details: {
        role: "Student coordinator for the biggest fest in college.",
        duration: "Feb 2025",
        impact:
          "Helped coordinate a team of 30+ students which managed the footfall of around 2000+ students throughout the fest .",
        achievements: [
          "Successfully coordinated a college fest with a footfall exceeding 2,000 students",
          "Supervised and executed over 5 major events, ensuring smooth operations and high participant engagement",
          "Led off-campus promotional campaigns across multiple colleges, significantly boosting external participation",
          "Managed logistics for guest judges and handled budgeting, contributing to the overall success and professionalism of the fest",
        ],
        images: [
          "/assets/fest1.jpg",
          "/assets/fest2.jpg",
          "/assets/fest3.jpg",
        ],
      },
    },
  ];

  return (
    <section id="extracurricular" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Work</h2>
            <div className="h-1 w-20 mb-10" style={{ backgroundColor: "rgb(224, 241, 31)" }}></div>

            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Beyond my professional work, I'm actively involved in various activities that allow me to give back
              to the community and continue growing as a designer and developer.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                <motion.div
                  className="bg-card rounded-xl p-6 shadow-lg border border-border h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <motion.button
                    onClick={() => openActivityModal(activity)}
                    className="text-white hover:text-[rgb(224,241,31)] text-sm font-medium flex items-center bg-transparent border-0 p-0 cursor-pointer mt-2 transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ActivityModal
        activity={selectedActivity}
        isOpen={isModalOpen}
        onClose={closeActivityModal}
      />
    </section>
  );
}