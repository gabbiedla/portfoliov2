import './Projects.css';
import React, { useState } from 'react';
// import Sql from '../Projects/div2@4x.png';
// import Graph from '../Projects/chart2@4x.png';
// import Logo from '../Projects/Divtest@4x.png';
import data from '../Projects/Dataproj';

function Projects() {
  // insert use state
  const [projsItems, setProjsItems] = useState(data);
  return (
    <div className="proj-section">
      <h2 className="proj-title">0 &#8594; 1</h2>
      {/* <div className="category-container">
        <h3 className="proj-category">Ops</h3>
        <h3 className="proj-category">Product</h3>
      </div> */}
      <div className="proj-container">
        {/* <div className="blocks box"> */}
        {/* <div className="proj-copy-content"> */}
        {/* <h4>project name</h4>
            <p>project Description</p> */}
        {data.map((projsInfo) => {
          const { id, image, name, description } = projsInfo;
          return (
            <article className="blocks box" key={id}>
              <img className="photo" src={image} alt="title" />
              <div className="proj-copy-content">
                <h3 className="proj-name">{name}</h3>
                <p className="proj-des">{description}</p>
              </div>
            </article>
          );
        })}
        {/* <h4 className="proj-name">BPO Launch</h4>
            <p className="proj-des">
              Description for the world to see because it's imp to test for the
              Description for the world to see because it's imp to test for the
            </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="blocks box">
          <h4 className="proj-name">LMS</h4>
          <p className="proj-des">
            {' '}
            Description for the world to see because it's imp to test
          </p>
        </div>
        <div className="blocks box">
          <h4 className="proj-name">Landing Page</h4>
          <p className="proj-des">Description</p>
        </div>
        <div className="blocks box">
          <h4 className="proj-name">Funware</h4>
          <p className="proj-des">Description</p>
        </div> */}
      </div>
      {/* <div className="sections">
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
      </div> */}
    </div>
  );
}

export default Projects;
