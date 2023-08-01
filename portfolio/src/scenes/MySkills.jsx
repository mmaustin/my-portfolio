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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet neque sed facilis? Sunt, dolores. A aliquid eaque, eos totam magni sed nam soluta quo nisi quis inventore quasi magnam voluptas?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
export default MySkills