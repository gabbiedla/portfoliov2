// import logo from './logo.svg';
import './App.css';
import Home from './Components/Hero/Hero';
import Nav from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Timeline/Timeline';
import Blog from './Components/Blog/Blog';
import Slider from './Components/Slider/Slider';
import Contact from './Components/Contact/Contact';
import Mobilenav from './Components/Navbar/Mobilenav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Mobilenav />
      <Home />
      <Experience />
      <Projects />
      <Slider />
      {/* <Blog />n */}
      <Contact />
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
