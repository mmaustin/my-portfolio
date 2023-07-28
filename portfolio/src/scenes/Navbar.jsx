import { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
       hover:text-yellow transition duration-500` }
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}


const Navbar = ({selectedPage, setSelectedPage}) => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex justify-between mx-auto w-5/6 items-center">
        <h4 className="font-playfair text-3xl font-bold">MA</h4>
      </div>
    </nav>
  )
}
export default Navbar