import React, {useState, useEffect} from 'react'
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer'; 
function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  //Funcion para controlar el scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <AboutMe />
      <Slider />
       <Info />
      <Footer /> 
    </div>
  );
}

export default App;
