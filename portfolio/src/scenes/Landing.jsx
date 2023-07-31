import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from 'framer-motion';


const Landing = ({setSelectedPage}) => {

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section 
      id='home'
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >

      <div>
        
      </div>
    </section>
  )
}
export default Landing