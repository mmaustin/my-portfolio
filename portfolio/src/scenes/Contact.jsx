import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import {useForm} from 'react-hook-form';


const Contact = () => {

  const {register, trigger, formState: {errors}} = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault();
    }
  }

  return (
    <section id="contact" className="py-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: { opacity: 1, x: 0}
        }}        
      >
        <div>  
          <p className="font-playlist font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-2/4" />
          </div>
        </div>
      </motion.div>   
    </section>
  )
}
export default Contact