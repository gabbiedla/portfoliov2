import './Hero.css';
import linkedin from '../Hero/linkedin-circle.png';
import medium from '../Hero/medium-circle.png';
import headshot from '../Hero/headshot.jpeg';

function Hero() {
  return (
    <div className="hero-section">
      <div className="fade">
        <div className="app-header">
          <img src={headshot} className="headshot" alt="headshot" />
          <h1 className="hero-name">Gabbie De Los Angeles</h1>
          <p className="text ">
            I am a product manager in the B2B space. As a former operations
            leader in micromobility, i have experience in market launches,
            managing image recognition product tools, and launching
            international support teams. I previously worked in hyper-growth
            startups and established corporate environments. I enjoy working on
            web development projects outside of work.
          </p>
          <p className="t2">
            Founder of a Toastmasters for LatinX women in tech.
          </p>
          <p className="t2">Former Bird, Uber, Plantronics (Poly)</p>
          <div className="social">
            <img src={linkedin} width="33" height="33" />
            <img src={medium} classname="m-logo" width="25" height="27" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
