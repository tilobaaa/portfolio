import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const skills = [
  { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { title: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { title: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { title: "React", icon: <FaReact className="text-cyan-400" /> },
  { title: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { title: "Node.js", icon: <FaNodeJs className="text-green-700" /> },
  { title: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { title: "ExpressJs", icon: <SiExpress className="text-gray-700" /> },
  { title: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { title: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { title: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
];


const Skills = () => {
  return (
    <div className='text-center sm:text-left flex flex-col gap-2 sm:gap-6 items-center my-15'>
      <h2 className='text-5xl sm:text-6xl text-gray-700 font-bold'>My Technical Skills</h2>
      <p className='text-gray-400'>Some Expertise and technical abilities that acquired over the years</p>
      <div className='flex flex-wrap gap-6 lg:w-1/2'>
        {skills.map((skill, index) => (
            <div key={index} className='flex items-center gap-2 border-1 border-gray-400 cursor-auto p-3 rounded-full hover:-translate-y-2 duration-500 transition-all'>
                <div>{skill.icon}</div>
                <p>{skill.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
