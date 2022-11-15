import './Projects.css';
import Sql from '../Projects/div2@4x.png';
import Graph from '../Projects/chart2@4x.png';
import Logo from '../Projects/Divtest@4x.png';

function Projects() {
  return (
    <div className="proj-container">
      <h2>Projects</h2>
      <div className="sections">
        <div className="sql">
          <img src={Sql} className="img1" />
          <p>SQL</p>
        </div>
        <div className="ux">
          <img src={Graph} className="img2" />
          <p>UX</p>
        </div>
        <div className="dojo">
          <img src={Logo} className="img3" />
          <p>PMDojo</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
