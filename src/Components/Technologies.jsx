import { DiGit, DiGithub, DiRedis } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
import { FaLeaf } from "react-icons/fa";
import { animate, motion } from "framer-motion";
const iconVariants=(duration)=>({
initial:{
    y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }

})
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl font-bold tracking-tight">Technologies
      </motion.h2>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
        className="p-4 hover:scale-110 transition-transform duration-300">
          <SiHtml5 className="text-7xl text-orange-500 hover:text-orange-700 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}className="p-4 hover:scale-110 transition-transform duration-300">
          <SiCss3 className="text-7xl text-blue-500 hover:text-blue-700 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}className="p-4 hover:scale-110 transition-transform duration-300">
          <SiJavascript className="text-7xl text-yellow-400 hover:text-yellow-600 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-16 h-16 text-red-800 hover:text-green-800 drop-shadow-lg"
    fill="currentColor"
  >
    <path d="M32.004 44.83s-4.98 2.938 3.607 3.946c10.443 1.262 15.845-1.074 15.845-1.074s-.893 3.632-10.59 5.226c-10.936 1.804-24.8-.46-20.406-5.355 2.376-2.676 11.091-2.743 11.091-2.743z" />
    <path d="M24.47 40.267s-5.578 4.135 2.961 5.06c11.081 1.213 19.588-1.292 19.588-1.292s-1.185 4.227-13.524 5.619c-12.606 1.43-26.717-.555-22.003-6.176 3.64-4.273 12.978-3.211 12.978-3.211zM33.93 23.338s4.07 4.194-3.847 10.588c-6.284 5.086-1.433 7.992 0 11.312-3.643-3.29-6.296-6.176-4.566-10.224 1.57-3.646 9.538-6.957 8.413-11.676zm2.855-1.965s8.938 7.116-8.014 15.072c-6.678 3.348-1.669 8.51-.124 10.575-4.531-3.468-7.703-6.509-5.991-11.059 2.1-5.236 11.06-6.982 14.129-14.588zm-4.1-4.74c8.867 10.755-4.47 16.56-4.47 16.56.15-3.61-1.295-6.47-3.867-8.965-3.524-4.086 1.283-7.04 1.283-7.04-.673 2.488 1.073 4.396 3.054 5.444zm5.752-7.635c2.735 8.612-7.35 11.524-7.35 11.524.742-3.082-.03-6.47-2.837-8.51-3.492-3.55 1.234-7.03 1.234-7.03-.563 2.186 1.203 4.292 3.31 5.612zM30.52 49.275s-12.456 2.955-4.434 4.147c8.547 1.177 15.36.9 19.456-.045 0 0-2.086 3.202-11.836 4.217-9.706 1.006-21.873-.556-19.246-4.823 2.015-2.986 16.06-3.496 16.06-3.496z" />
  </svg>
</motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}className="p-4 hover:scale-110 transition-transform duration-300">
          <FaLeaf
            className="text-7xl text-green-500 hover:scale-200 drop-shadow-lg"
          />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300">
          <RiReactjsLine className="text-7xl text-cyan-400 hover:text-cyan-500 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}className="p-4 hover:scale-110 transition-transform duration-300">
          <SiMysql className="text-7xl text-cyan-500 hover:text-cyan-700 drop-shadow-lg" />
        </motion.div>
        <motion.div
        
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}className="p-4 hover:scale-110 transition-transform duration-300">
          <DiGit className="text-7xl text-red-700 hover:text-red-900 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300">
  <DiGithub className="text-7xl text-white-700 hover:text-green-900 drop-shadow-lg" />
</motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;