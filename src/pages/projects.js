import { Container } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';
import { NavBar } from "../components/NavBar";
import { ProjectCard } from "../components/ProjectCard";
import TaskListImg from "../assets/project-images/task-list.png";
import UXDesignMobileImg from "../assets/project-images/ux-design-mobile.png";
import UXDesignResponsiveImg from "../assets/project-images/ux-design-responsive.png";
import PigDiceGameImg from "../assets/project-images/pig-dice-game.png";
import CovidWebsiteImg from "../assets/project-images/covid-webiste.png";
import JSLogo from "../assets/svg/javascript.svg";
import HTMLLogo from "../assets/svg/html5.svg";
import CSSLogo from "../assets/svg/css3.svg";
import ReactLogo from "../assets/svg/react.svg";
import FigmaLogo from "../assets/svg/figma_logo.svg";
import WordpressLogo from "../assets/svg/wordpress.svg";
import { Footer } from "../components/Footer";

function Projects() {
    return (
        <div className="main-div">
            <NavBar/>
            <Fade className='flex-grow-1'>
                <Container>
                    <h3>Projets réalisés</h3>
                    <div className="d-inline-flex gap-3 flex-column flex-md-row flex-wrap">
                        <ProjectCard title="Application de gestion de listes" 
                            image={TaskListImg}
                            link="https://mickael-pedro.github.io/gestion-de-liste/"
                            srclink="https://github.com/mickael-pedro/gestion-de-liste"
                        >
                            <p>Une application permettant de lire, créer, mettre à jour et supprimer des listes 
                            contenant des tâches sur lesquelles on peut faire de même.</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={ReactLogo} alt="React" title="React"/>
                                <img src={HTMLLogo} alt="HTML5" title="HTML5"/>
                                <img src={CSSLogo} alt="CSS3" title="CSS3"/>
                                <img src={JSLogo} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Jeu de dés Pig" 
                            image={PigDiceGameImg} 
                            link="https://mickael-pedro.github.io/dice-game/"
                            srclink="https://github.com/mickael-pedro/dice-game"
                        >
                            <p>Petit jeu basé sur navigateur web à l’aide du DOM, où le premier joueur qui atteint les 100 points gagne le jeu. 
                            Les règles sont basées sur celles du <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)">Pig</a>.
                            </p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={HTMLLogo} alt="HTML5" title="HTML5"/>
                                <img src={CSSLogo} alt="CSS3" title="CSS3"/>
                                <img src={JSLogo} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Site fictif - Actu COVID19" 
                            image={CovidWebsiteImg} 
                            link="https://www.figma.com/file/N8v3u6Pd2jh6qzcD69WzPO/Maquette-ActuCovid19---Mickael-De-Jesus-Pedro?type=design&mode=design&t=GU3iowL35slaClyc-1"
                        >
                            <p>Site ficitf d'actualité sur le COVID-19 réalisé dans le contexte dans d'un examen sur la conception d'une solution digitale où le projet devait être livrer en dix jours.<br/>
                            Le projet demandait un espace d'administration simple à utiliser, Wordpress a donc été mon premier choix. (Maquettes uniquement disponibles)
                            </p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={WordpressLogo} alt="Wordpress" title="Wordpress"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Maquette HD interactive pour une application mobile de l'URSSAF" 
                            image={UXDesignMobileImg}
                            link="https://www.figma.com/proto/oJSMEe10mdPeRpq8dMmGgg/Prototype---Appli-Mobile-URSSAF---Micka%C3%ABl-De-Jesus-Pedro?type=design&node-id=1-426&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A426&mode=design"
                        >
                            <p>Réalisée pour un examen sur l'UX Design pour mon Bachelor, cette maquette permet de tester le potentiel parcours utilisateur d'une
                            application mobile. (Non-affilié à l'URSSAF)</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={FigmaLogo} alt="Figma" title="Figma"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Maquette HD d'un site web au design responsive" 
                            image={UXDesignResponsiveImg} 
                            link="https://www.figma.com/file/fmCFZ28tbKWixd20PAXN4e/Clipboard-Maquette?node-id=0%3A1&t=P5NEwOQEKW2xNLdr-1"
                        >
                            <p>Maquette d'un site web suivant le principe du desgin responsive, ce qui permet au site d'être autant accessible sur PC de bureau que smartphone.
                            Réalisée pour un entrainement sur l'UX Design. (L'application Clipboard présenté n'exsite pas réellement)</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={FigmaLogo} alt="Figma" title="Figma"/>
                            </div>
                        </ProjectCard>
                    </div>
                </Container>
            </Fade>
            <Footer/>
        </div>
    )
}

export default Projects;