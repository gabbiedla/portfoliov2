// import logo from './logo.svg';
import headshot from './headshot.jpeg';
import './App.css';
import Menu from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';
import Timeline from './Components/Timeline/Timeline';
import Blog from './Components/Blog/Blog';
import Recommendations from './Components/Recommendations/Recommendations';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={headshot} className="headshot" alt="headshot" />
        <p>
          <h2>Gabbie De Los Angeles</h2>
          <p className="shortBio">
            Product Manager by day. Web Developer by night. Ops hack enthusiast
            and exceptional optimizer.
            <p>Ex-Uber/Bird</p>
          </p>
        </p>
      </header>
      <Projects />
      <Recommendations />
      <Timeline />
      <Blog />
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
