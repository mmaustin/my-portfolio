import {useState} from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
    <div className="app bg-deep-blue " >
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
