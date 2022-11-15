import './Projects.css';
import Sql from '../Projects/div2@4x.png';

function Projects() {
  return (
    <div className="proj-container">
      <div className="sql">
        <img src={Sql} className="img1" />
        <p>SQL</p>
      </div>
      <div className="ux">
        <p>UX</p>
      </div>
      <div className="dojo">
        <p>PMDojo</p>
      </div>
    </div>
  );
}

export default Projects;
