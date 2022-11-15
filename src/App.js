// import logo from './logo.svg';
import headshot from './headshot.jpeg';
import './App.css';
import Menu from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={headshot} className="headshot" alt="headshot" />
        <p>
          Hi! Im Gabbie and am a Product Manager at Epson. I value user feedback
          and bring a customer-focused approach to problem solving. Im obsessed
          with optimizing products and ops processes. I like to surround myself
          with people who are go-getters and curious about the problems they are
          solving.
        </p>
      </header>
      <Projects />
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
