import React from "react";
import { Card, CardContent } from "../components/ui/card"; // Adjust relative path as needed
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"; // Adjust relative path
import { GraduationCap, School, Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Kalinga Institute of Industrial Technology",
      period: "2020 - 2024",
      description:
        "Focused on full-stack development, AI/ML, data structures, algorithms, and software engineering principles.",
      cgpa: "8.3/10",
    },
    {
      degree: "Higher Secondary Examination (XII)",
      field: "Science - PCM with Computer Science",
      institution: "Cathedral Sr. Sec. School (CBSE Board)",
      period: "2020 - 2021",
      description:
        "Completed Higher Secondary education with focus on Physics, Chemistry, Mathematics and Computer Science.",
      percentage: "92.4%",
    },
    {
      degree: "Secondary School Examination (X) ",
      field: "",
      institution: "Cathedral Sr. Sec. School (CBSE Board)",
      period: "2018 - 2019",
      description:
        "Completed Secondary education with focus on Science, Mathematics, Social Studies, Languages and other subjects.",
      percentage: "92.3%",
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span style={{ color: "#fffff" }}>Education</span>
        </h2>

        <div className="max-w-3xl mx-auto mt-8">
          <Tabs defaultValue="btech" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-neutral-800">
              <TabsTrigger value="btech" className="flex items-center gap-2 data-[state=active]:bg-[#e0f11f] data-[state=active]:text-black">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Bachelor's</span>
              </TabsTrigger>
              <TabsTrigger value="hsc" className="flex items-center gap-2 data-[state=active]:bg-[#e0f11f] data-[state=active]:text-black">
                <School className="h-4 w-4" />
                <span className="hidden sm:inline">HSC (XII)</span>
              </TabsTrigger>
              <TabsTrigger value="ssc" className="flex items-center gap-2 data-[state=active]:bg-[#e0f11f] data-[state=active]:text-black">
                <Book className="h-4 w-4" />
                <span className="hidden sm:inline">SSC (X)</span>
              </TabsTrigger>
            </TabsList>

            {/* B.Tech Tab Content */}
            <TabsContent value="btech" className="space-y-4">
              <div className="relative">
                <div className="absolute top-0 left-4 h-full w-0.5 bg-[#e0f11f]"></div>
                <Card className="mb-6 card-hover ml-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{education[0].degree}</h3>
                      <span className="text-gray-300">{education[0].period}</span>
                    </div>
                    <h4 className="text-[#e0f11f] font-medium mb-2">{education[0].field}</h4>
                    <h5 className="text-[#e0f11f] mb-3">{education[0].institution}</h5>
                    <p className="text-gray-300 mb-3">{education[0].description}</p>
                    <div className="bg-[#e0f11f] bg-opacity-10 p-2 rounded-md inline-block">
                      <span className="font-semibold text-[#e0f11f]">CGPA: </span>
                      <span className="text-[#e0f11f]">{education[0].cgpa}</span>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute top-6 left-4 w-4 h-4 rounded-full bg-[#e0f11f] shadow-md shadow-[#e0f11f]/30 z-10 -ml-2"></div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-center text-white">Relevant Coursework</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Data Structures & Algorithms",
                    "Web Development",
                    "Machine Learning",
                    "Database Systems",
                    "Object-Oriented Programming",
                    "Artificial Intelligence",
                    "Computer Networks",
                    "Cloud Computing",
                  ].map((course, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-800 px-4 py-2 rounded-full text-sm border border-white hover:border-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300 text-white">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* XII Tab Content */}
            <TabsContent value="hsc" className="space-y-4">
              <div className="relative">
                <div className="absolute top-0 left-4 h-full w-0.5 bg-[#e0f11f]"></div>
                <Card className="mb-6 card-hover ml-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{education[1].degree}</h3>
                      <span className="text-gray-300">{education[1].period}</span>
                    </div>
                    <h4 className="text-[#e0f11f] font-medium mb-2">{education[1].field}</h4>
                    <h5 className="text-[#e0f11f] mb-3">{education[1].institution}</h5>
                    <p className="text-gray-300 mb-3">{education[1].description}</p>
                    <div className="bg-[#e0f11f] bg-opacity-10 p-2 rounded-md inline-block">
                      <span className="font-semibold text-[#e0f11f]">Percentage: </span>
                      <span className="text-[#e0f11f]">{education[1].percentage}</span>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute top-6 left-4 w-4 h-4 rounded-full bg-[#e0f11f] shadow-md shadow-[#e0f11f]/30 z-10 -ml-2"></div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-center text-white">Core Subjects</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Physics",
                    "Chemistry",
                    "Mathematics",
                    "Computer Science",
                    "English",
                  ].map((course, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-800 px-4 py-2 rounded-full text-sm border border-white hover:border-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300 text-white">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* X Tab Content */}
            <TabsContent value="ssc" className="space-y-4">
              <div className="relative">
                <div className="absolute top-0 left-4 h-full w-0.5 bg-[#e0f11f]"></div>
                <Card className="mb-6 card-hover ml-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{education[2].degree}</h3>
                      <span className="text-gray-300">{education[2].period}</span>
                    </div>
                    <h4 className="text-[#e0f11f] font-medium mb-2">{education[2].field}</h4>
                    <h5 className="text-[#e0f11f] mb-3">{education[2].institution}</h5>
                    <p className="text-gray-300 mb-3">{education[2].description}</p>
                    <div className="bg-[#e0f11f] bg-opacity-10 p-2 rounded-md inline-block">
                      <span className="font-semibold text-[#e0f11f]">Percentage: </span>
                      <span className="text-[#e0f11f]">{education[2].percentage}</span>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute top-6 left-4 w-4 h-4 rounded-full bg-[#e0f11f] shadow-md shadow-[#e0f11f]/30 z-10 -ml-2"></div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-center text-white">Core Subjects</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Science",
                    "Mathematics",
                    "Social Studies",
                    "English",
                    "Hindi",
                    "Computer Science",
                  ].map((course, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-800 px-4 py-2 rounded-full text-sm border border-white hover:border-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300 text-white">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
