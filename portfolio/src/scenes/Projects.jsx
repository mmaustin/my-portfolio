import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const writer = "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
const history = "https://images.unsplash.com/photo-1576568699714-a3f4950805d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
const citizenship = "https://images.unsplash.com/photo-1525799165-f95e2ccbb152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
const neighborhood = "https://images.unsplash.com/photo-1577401159468-3bbc7ee440b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"

const writersForum = "WRITERS FORUM";
const randomHistory = "RANDOM HISTORY";
const citizenshipTest = "CITIZENSHIP TEST PREP";
const communityBoard = "VIRGINIA PLACE: COMMUNITY BOARD"

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2,},
  },
};

const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
}

const Project = ({title, pictureAddress, projectAddress, coverText}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-red`;

  const projectTitle = title.split(" ").join("-").toLowerCasprojectAddress
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        {/* <p className="text-2xl font-playfair">{coverText}</p> */}
        <a href={projectAddress} target="_blank" rel="noreferrer"><p className="text-2xl font-playfair">{coverText}</p></a>
      </div>
      {/* <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} /> */}
      <img src={`${pictureAddress}`} alt={projectTitle} />
    </motion.div> 
  )

}

const Projects = () => {


  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet neque sed facilis? Sunt, dolores. A aliquid eaque, eos totam magni sed nam soluta quo nisi quis inventore quasi magnam voluptas?
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.2}}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playlist font-semibold"
          >
            USER INTERFACE
          </div>
            <Project pictureAddress={writer} title="Project 1" projectAddress="https://writers-forum.onrender.com" coverText={writersForum}/>
            <Project pictureAddress={history} title="Project 2" projectAddress={"https://random-history.onrender.com"} coverText={randomHistory}/>
            <Project pictureAddress={citizenship} title="Project 3" projectAddress={"https://citizenship-app.onrender.com"} coverText={citizenshipTest}/>
            <Project pictureAddress={neighborhood} title="Project 4" projectAddress={"https://virginia-place.onrender.com"} coverText={communityBoard}/>
            {/* <Project title="Project 5" />
            <Project title="Project 6" />
            <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] text-2xl font-playlist font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Projects