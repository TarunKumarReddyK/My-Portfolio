import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';


const Details = () => {
  return (
    <div className="pb-4">
      <motion.h2
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: -100 }}
           transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About Education
      </motion.h2>

      {/* Education Section */}
      <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <motion.h3
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
          className="text-2xl font-semibold text-center"
        >
          Education
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
              key={index}
              className="text-center"
            >
              <p className="text-xl font-medium">{edu.degree}</p>
              <p className="text-lg">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="text-sm text-gray-700">{edu.percentage}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

     
    </div>
  );
};

export default Details;