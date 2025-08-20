// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition';
// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
//       icon: "💻",
//     },
//     {
//       title: "Backend Development",
//       skills: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL", "RESTful APIs", "GraphQL"],
//       icon: "⚙️",
//     },
//     {
//       title: "AI/ML",
//       skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning", "Natural Language Processing"],
//       icon: "🤖",
//     },
//     {
//       title: "Tools & Others",
//       skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies", "Problem Solving"],
//       icon: "🛠️",
//     },
//   ];

//   return (
//     <section id="skills" className="section-padding bg-background">
//       <div className="container mx-auto px-4">
//         <h2 className="section-heading">
//           My <span style={{ color: "#e0f11f" }}>Skills</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//           {/* {skillCategories.map((category, index) => (
//             <Card key={index} className="card-hover bg-white dark:bg-neutral-800">
//               <CardContent className="p-6">
//                 <div className="text-4xl mb-4">{category.icon}</div>
//                 <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm border border-[#fffff] hover:!bg-[#e0f11f] hover:text-black transition-all duration-300 cursor-pointer"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))} */}
//           <PixelTransition
//             firstContent={
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
//                 alt="default pixel transition content, a cat!"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             }
//             secondContent={
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   display: "grid",
//                   placeItems: "center",
//                   backgroundColor: "#111"
//                 }}
//               >
//                 <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
//               </div>
//             }
//             gridSize={12}
//             pixelColor='#ffffff'
//             animationStepDuration={0.4}
//             className="custom-pixel-card"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
      icon: "💻",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL", "RESTful APIs", "GraphQL"],
      icon: "⚙️",
    },
    {
      title: "AI/ML",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning", "Natural Language Processing"],
      icon: "🤖",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies", "Problem Solving"],
      icon: "🛠️",
    },
  ];


  const SkillTag = ({ skill }) => {
    return (
      <span
        className="skill-tag"
        style={{
          backgroundColor: "#333",
          color: "#ffffff",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "0.875rem",
          border: "1px solid #555",
          transition: "all 0.3s ease",
          cursor: "pointer",
          display: "inline-block",
          margin: "2px"
        }}
      >
        {skill}
        <style jsx>{`
        .skill-tag:hover {
          background-color: #e0f11f !important;
          color: #000 !important;
          border-color: #e0f11f !important;
        }
      `}</style>
      </span>
    );
  };


  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          My <span style={{ color: "#e0f11f" }}>Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 place-items-center">
          {skillCategories.map((category, index) => (
            <PixelTransition
              key={index}
              firstContent={
                // First state: Show icon and title (clean overview)
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1f1f1f",
                    padding: "24px",
                    color: "#ffffff",
                    textAlign: "center"
                  }}
                >
                  <div style={{
                    fontSize: "4rem",
                    marginBottom: "16px"
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    margin: "0",
                    lineHeight: "1.3"
                  }}>
                    {category.title}
                  </h3>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "#888",
                    marginTop: "8px",
                    margin: "8px 0 0 0"
                  }}>
                    {category.skills.length} skills
                  </p>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "#888",
                    marginTop: "8px",
                    margin: "8px 0 0 0"
                  }}>
                    (Click to reavel tech stack)
                  </p>
                </div>
              }
              secondContent={
                // Second state: Show detailed skills list
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    backgroundColor: "#111",
                    color: "#ffffff",
                    overflow: "auto"
                  }}
                >
                  {/* Header with icon and title */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                    justifyContent: "center"
                  }}>
                    <div style={{
                      fontSize: "2rem",
                      marginRight: "8px"
                    }}>
                      {category.icon}
                    </div>
                    <h3 style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: "0",
                      color: "#e0f11f"
                    }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills container */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: "1"
                  }}>
                    {category.skills.map((skill, i) => (
                      <SkillTag key={i} skill={skill} />
                    ))}
                  </div>
                </div>
              }
              gridSize={12}
              pixelColor="#ffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
              style={{
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;