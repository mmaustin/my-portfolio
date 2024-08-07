import { useEffect, useState } from 'react';
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from './hooks/useMediaQuery';
import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
import MySkills from './scenes/MySkills';
import LineGradient from './components/LineGradient';
import Projects from './scenes/Projects';
import Footer from './scenes/Footer';
// import Contact from './scenes/Contact';

function App() {

  const [selectedPage, setSelectedPage] = useState('about');
  const [isTopOfPAge, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <div className="app bg-deep-blue " >
      <Navbar isTopOfPAge={isTopOfPAge} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <Footer />
    </div>
  );
}

export default App;
