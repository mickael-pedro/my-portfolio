import { Fade } from 'react-awesome-reveal';
import { Button, Container } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";
import ProgrammingSvg from "./assets/svg/undraw_programming_re_kg9v.svg";
import './portfolio.css';

function Home() {
  return (
    <div className="main-div">
      <NavBar/>
      <Fade className='flex-grow-1'>
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="greeting-text d-flex flex-column">
                  <h1>
                      Bonjour 👋
                  </h1>
                  <h1>
                      Je m'applle<br/>
                      Mickaël De Jesus Pedro
                  </h1>
                  <p>
                      Bienvenue sur mon portfolio ! 
                  </p>
                  <p>
                      Passionné d'informatique depuis mes 13 ans et de nature curieuse, je cherche toujours à renforcer mes connaissances et en à acquérir de nouvelles. 
                  </p>
                  <Link to="/resume" className="my-5 align-self-center">
                      <Button className="portfolio-btn fs-3">
                          Voir mon CV
                      </Button>
                  </Link>
                  <Link to="/projects" className="align-self-center">
                      <Button className="portfolio-btn fs-3">
                          Voir mes projets réalisés
                      </Button>
                  </Link>
              </div>
              <img src={ProgrammingSvg} alt="Programming" className="greeting-image mb-3"/>
          </div>
        </Container>
      </Fade>
      <Footer/>
    </div>
  );
}

export default Home;
