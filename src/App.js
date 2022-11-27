// import logo from './logo.svg';
import headshot from './headshot.jpeg';
import './App.css';
import Menu from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';
import Timeline from './Components/Timeline/Timeline';
import Blog from './Components/Blog/Blog';
// import Recommendations from './Components/Recommendations/Recommendations';
// import Carousel, { CarouselItem } from './Components/Carousel/Carousel';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Menu />
        <div className="top-content">
          <img src={headshot} className="headshot" alt="headshot" />
          <h2 className="name">Gabbie De Los Angeles</h2>
        </div>
        <div className="bottom-content">
          <p className="text">
            Product Manager by day. Web Developer by night. Ops hack enthusiast
            and exceptional optimizer.
          </p>
          <p className="text">Ex-Uber/Bird</p>
        </div>
        <div className="social">
          <p>Logo1</p>
          <p>Logo2</p>
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
