import './Hero.css';
import linkedin from '../Hero/linkedin-circle.png';
import medium from '../Hero/medium-circle.png';
import headshot from '../Hero/headshot.jpeg';
import bgv from '../Hero/bgvid.mp4';
import git from '../Hero/github.png';
import { FaLinkedinIn, FaMediumM, FaGithubAlt } from 'react-icons/fa';
// import ReactPlayer from 'react-player';

function Hero() {
  return (
    <div className="hero-section" id="hero">
      <video autoPlay loop muted>
        <source src={bgv} type="video/mp4" />
      </video>
      <div className="fade">
        <div className="app-header">
          <img src={headshot} className="headshot" alt="headshot" />
          <h1 className="hero-name">Gabbie De Los Angeles</h1>
          <h3 className="text ">
            I am a <strong>product manager</strong> in the{' '}
            <strong>B2B space</strong>. As a former operations leader in{' '}
            <strong>micromobility</strong>, I have experience in{' '}
            <strong>market launches</strong>,{' '}
            <strong>managing image recognition product tools</strong>, and{' '}
            <strong>launching international support teams</strong>. I enjoy
            working on <strong>web development projects</strong> outside of
            work.
          </h3>
          <h3 className="t2">
            Founder of a Toastmasters for LatinX women in tech.
          </h3>
          <h3 className="t2">Former Bird, Uber, Plantronics (Poly)</h3>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/gdladelosangeles/"
              target="_blank"
            >
              <FaLinkedinIn className="icons" />
              {/* <img src={linkedin} alt="social icon" width="33" height="33" /> */}
            </a>
            <a href="https://gabsdla.medium.com/" target="_blank">
              <FaMediumM className="icons" />
              {/* <img
                src={AiFillMediumCircle}
                classname="m-logo"
                alt="social icon"
                width="25"
                height="27"
              /> */}
            </a>
            <a href="https://github.com/gabbiedla" target="_blank">
              <FaGithubAlt className="icons" />
              {/* <img src={git} alt="social icon" width="29" height="29" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
