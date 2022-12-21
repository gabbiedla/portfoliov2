import './Hero.css';
import Medium from '"/images/medium-circle.png';

function Hero() {
  return (
    <div>
      <div className="app-header">
        {/* <img className="hero-img" src={pmhero} /> */}
        <div className="top-content">
          {/* <img src={headshot} className="headshot" alt="headshot" /> */}
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
          {/* <img src={linkedin} width="30" height="30" />
          <img src={medium} classname="m-logo" width="25" height="27" /> */}
        </div>
      </div>
    </div>
  );
}
export default Hero;
