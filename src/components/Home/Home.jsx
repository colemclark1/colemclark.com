import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import portrait from "../../images/Me2.jpeg";
import swim from "../../images/Swim.jpg";
import utah from "../../images/Utah_2.jpg";
import pond from "../../images/pond.jpg";
import snuba from "../../images/snuba.jpg";
import "./Home.css";

const background = [
  ["Oracle", "Senior Software Engineer", "Feb 2026 — now"],
  ["IBM Research", "Advisory Software Engineer", "2020 — 2026"],
  ["Northeastern", "M.S. Computer Science", "2020"],
  ["University of Delaware", "B.S. Management Information Systems", "2014"],
];

const Home = () => (
  <main>
    <nav className="siteNav" aria-label="Primary navigation">
      <a className="wordmark" href="#top">Cole Clark<span>.</span></a>
      <div className="navLinks"><a href="#now">Now</a><a href="#photos">Photos</a><a href="#background">Background</a></div>
      <a className="navContact" href="mailto:colemclark1@gmail.com">Say hello <FaArrowUpRightFromSquare aria-hidden="true" /></a>
    </nav>
    <section id="top" className="hero">
      <div className="heroCopy">
        <p className="eyebrow"><span /> Senior Software Engineer</p>
        <h1>Cole Clark</h1>
        <p className="heroText">Building software. Staying active. Rooting for Philly.</p>
        <div className="heroActions">
          <a className="primaryButton" href="#now">A little about me <FaArrowDown aria-hidden="true" /></a>
          <div className="socialLinks" aria-label="Social links">
            <a href="https://www.linkedin.com/in/coleclark1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/colemclark1" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:colemclark1@gmail.com" aria-label="Email Cole"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="portraitWrap"><img src={portrait} alt="Cole Clark smiling outdoors" fetchPriority="high" /></div>
    </section>
    <section id="now" className="nowSection section">
      <div className="sectionIntro"><p className="sectionLabel">Right now</p><h2>A little about me.</h2></div>
      <div className="nowGrid">
        <article className="currentCard"><p className="cardKicker">Current role</p><h3>Senior Software Engineer at <span>Oracle</span></h3><p>Since February 2026.</p></article>
        <article className="interestsCard"><p className="cardKicker">Outside of work</p><ul><li><span>01</span> Time with family</li><li><span>02</span> Running, swimming &amp; lifting</li><li><span>03</span> Following the Eagles &amp; Sixers</li></ul></article>
      </div>
    </section>
    <section id="photos" className="photoSection section">
      <div className="sectionHeader"><div><p className="sectionLabel">A few moments</p><h2>Outside of work.</h2></div><p className="smallIntro">A few things I enjoy.</p></div>
      <div className="photoGrid">
        <figure className="photoTall"><img src={swim} alt="Cole swimming" loading="lazy" decoding="async" /><figcaption>In the water</figcaption></figure>
        <figure><img src={utah} alt="Utah landscape" loading="lazy" decoding="async" /><figcaption>Out west</figcaption></figure>
        <figure><img src={pond} alt="Pond scenery" loading="lazy" decoding="async" /><figcaption>Outside</figcaption></figure>
        <figure className="photoWide"><img src={snuba} alt="Snuba diving" loading="lazy" decoding="async" /><figcaption>Somewhere new</figcaption></figure>
      </div>
    </section>
    <section id="background" className="backgroundSection section">
      <div className="sectionIntro"><p className="sectionLabel">Background</p><h2>Where I’ve been.</h2></div>
      <div className="timeline">{background.map(([place, role, dates]) => <div className="timelineItem" key={place}><p>{dates}</p><h3>{place}</h3><span>{role}</span></div>)}</div>
      <p className="backgroundNote">More on <a href="https://www.linkedin.com/in/coleclark1/" target="_blank" rel="noreferrer">LinkedIn <FaArrowUpRightFromSquare aria-hidden="true" /></a>.</p>
    </section>
    <footer><a className="wordmark" href="#top">Cole Clark<span>.</span></a><p>© {new Date().getFullYear()} Cole Clark</p><a href="mailto:colemclark1@gmail.com">Get in touch <FaArrowUpRightFromSquare aria-hidden="true" /></a></footer>
  </main>
);

export default Home;
