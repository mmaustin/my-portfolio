import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";


const Projects = () => {

  const container = {
    hidden: {},
    visible: {
      transition: {staggerChildren: 0.2}
    }
  };

  const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
  }

  const Project = ({title}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex-col justify-center items-center text-center p-16 text-deep-blue`;

    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}></div>
        <p className="text-2xl font-playfair">{title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora placeat mollitia cum, eius eum repudiandae id, quam pariatur ipsa, esse excepturi? Sint, consectetur illum quia nulla fugiat facere officiis.
        </p>
      </motion.div>
    )

  }

  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: { opacity: 1, y: 0}
        }}        
      >
        <div>
          <p className="font-playlist font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">  
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet neque sed facilis? Sunt, dolores. A aliquid eaque, eos totam magni sed nam soluta quo nisi quis inventore quasi magnam voluptas?
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          variants={container}        
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] text-2xl font-playlist font-semibold"
          >
            USER INTERFACE
          </div>
          <Project title="Project 1" />
        </motion.div>        
      </div>
    </section>
  )
}
export default Projects