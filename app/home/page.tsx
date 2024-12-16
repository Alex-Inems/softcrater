"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import FilterButton from "@/components/FilterButton";

const projects = [
  { id: 1, title: "ChefWars", category: "Web Apps", image: "/images/cwars.jpeg" },
  { id: 2, title: "MeBlog", category: "Web Apps", image: "/images/meblog.jpeg" },
  { id: 3, title: "UpLift", category: "Mobile Apps", image: "/images/uplift.jpeg" },
];

const categories = ["All", "Web Apps", "Mobile Apps", "Product Branding"];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <motion.h1
          className="text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creating{" "}
          <span className="text-green-500 italic">mind-blowing</span> digital
          products{" "}
          <motion.span
            className="inline-block text-5xl cursor-pointer"
            initial={{ scale: 1, textShadow: "none" }}
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 20px rgba(255, 255, 0, 1)",
            }}
            transition={{ duration: 0.3 }}
          >
            💡
          </motion.span>
        </motion.h1>
        <motion.div
          className="mt-8 flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </motion.div>
      </section>
      {/* Projects Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
