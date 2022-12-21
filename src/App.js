// import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Timeline from './Components/Timeline/Timeline';
import Blog from './Components/Blog/Blog';
// import Recommendations from './Components/Recommendations/Recommendations';
// import Carousel, { CarouselItem } from './Components/Carousel/Carousel';
import Slider from './Components/Slider/Slider';
// import linkedin from './PNG/linkedin.png';
// import medium from './PNG/Medium.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Timeline />
      <Projects />
      <Slider />
      {/* <Recommendations /> */}
      <Blog />
      {/* <Carousel>
        <CarouselItem>Item1</CarouselItem>
        <CarouselItem>Item2</CarouselItem>
        <CarouselItem>Item3</CarouselItem>
      </Carousel> */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>HEADER</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
