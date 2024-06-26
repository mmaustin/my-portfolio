import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";


const MySkills = () => {

  const isAboveMediumScreeens = useMediaQuery("(min-width: 160px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: { opacity: 1, x: 0}
          }}        
        >
          <p className="font-playlist font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Diligent, Determined, Focused, Resilient, Resourceful, Constant Learner.  I embody all of the keywords!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreeens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

        <div className="md:flex md:justify-between mt-16 gap-32">
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: { opacity: 1, y: 0}
            }}          
          >
            <div className="relative h-32">
              <div className="z-10">
                {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
                <p className="font-playfair font-semibold text-3xl mt-3">BACKEND</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              MongoDB, Mongoose, Express, NodeJs, JWT, User Authentication & Authorization, Postman, Error Handling, CRUD Operations, Experience With Rails API and Relational Databases.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: { opacity: 1, y: 0}
            }}          
          >
            <div className="relative h-32">
              <div className="z-10">
                {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
                <p className="font-playfair font-semibold text-3xl mt-3">FRONTEND</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              Javascript, React (the React Suite), Redux Toolkit, Redux Persist, FormSubmit, Formik, Yup, Styled Components, Proxy API Requests, Responsive Design, HTML/CSS.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay: 0.4, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: { opacity: 1, y: 0}
            }}          
          >
            <div className="relative h-32">
              <div className="z-10">
                {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
                <p className="font-playfair font-semibold text-3xl mt-3">HONESTLY . . .</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              . . . I've Never Been A Fan Of CSS, But Learning TailwindCSS And Material UI Is Slowly Leading To A Change Of Heart!
            </p>
          </motion.div>
        </div>
      {/* </div> */}
    </section>
  )
}
export default MySkills