import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "CSS", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "Git", level: 95 },
  { name: "Tailwind Css", level: 95 },
  { name: "Redux", level: 75 },
];

const Skills = () => {
  return (
    <div id="skills" className="md:p-14 max-sm:p-4 h-full bg-gray-100 dark:bg-zinc-800 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>

      {/* Create two rows with skill bars taking up full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-24 pr-24">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col w-full">
            <div className="flex justify-between mb-2 text-lg font-semibold">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-md">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-md"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
