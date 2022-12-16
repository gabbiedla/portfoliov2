// import logo from './logo.svg';
import headshot from './headshot.jpeg';
import './App.css';
import Nav from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Timeline from './Components/Timeline/Timeline';
import Blog from './Components/Blog/Blog';
// import Recommendations from './Components/Recommendations/Recommendations';
// import Carousel, { CarouselItem } from './Components/Carousel/Carousel';
import Slider from './Components/Slider/Slider';
// import linkedin from './PNG/linkedin.png';
// import medium from './PNG/Medium.png';
import linkedin from './PNG/linkedin-circle.png';
import medium from './PNG/medium-circle.png';
import pmhero from './PNG/pm-hero.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app-header">
        {/* <img className="hero-img" src={pmhero} /> */}
        <div className="top-content">
          <img src={headshot} className="headshot" alt="headshot" />
          <h2 className="name">Gabbie De Los Angeles</h2>
        </div>
        <div className="bottom-content">
          {/* <p className="text second-line">Ex-Uber/Bird</p> */}

          <p className="text">
            I am a product manager in the B2B space. As a former operations
            leader in micromobility, i have experience in market launches,
            managing image recognition product tools, and launching
            international support teams. I previously worked in hyper-growth
            startups and established corporate environments. I enjoy working on
            web development projects outside of work.
            <p>Founder of a Toastmasters for LatinX women in tech.</p>
            <p>Former Bird, Uber, Plantronics (Poly)</p>
          </p>
        </div>
        <div className="social">
          <img src={linkedin} width="30" height="30" />
          <img src={medium} classname="m-logo" width="25" height="27" />
        </div>
      </div>
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
