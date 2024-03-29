import { Container } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';
import { NavBar } from "../components/NavBar";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../assets/project-images', false, /\.(png|jpe?g|svg)$/));
const logos = importAll(require.context('../assets/svg', false, /\.svg$/));

function Projects() {
    return (
        <div className="main-div">
            <NavBar/>
            <Fade className='flex-grow-1'>
                <Container>
                    <h3>Projets réalisés</h3>
                    <div className="d-inline-flex gap-3 flex-column flex-lg-row flex-wrap">
                        <ProjectCard title="Mon portfolio" 
                            image={images["this-portfolio.png"]}
                            link="https://mickael-pedro.github.io/my-portfolio/"
                            srclink="https://github.com/mickael-pedro/my-portfolio"
                        >
                            <p>Ce portfolio en lui-même à été réalisé avec React et implémente un design responsive. De plus, il est hébergé gratuitement grâce à <a href="https://pages.github.com/">Github Pages</a>.</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["react.svg"]} alt="React" title="React"/>
                                <img src={logos["html5.svg"]} alt="HTML5" title="HTML5"/>
                                <img src={logos["css3.svg"]} alt="CSS3" title="CSS3"/>
                                <img src={logos["javascript.svg"]} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Application de gestion de listes" 
                            image={images["task-list.png"]}
                            link="https://mickael-pedro.github.io/gestion-de-liste/"
                            srclink="https://github.com/mickael-pedro/gestion-de-liste"
                        >
                            <p>Une application permettant de lire, créer, mettre à jour et supprimer des listes 
                            contenant des tâches sur lesquelles on peut faire de même.</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["react.svg"]} alt="React" title="React"/>
                                <img src={logos["html5.svg"]} alt="HTML5" title="HTML5"/>
                                <img src={logos["css3.svg"]} alt="CSS3" title="CSS3"/>
                                <img src={logos["javascript.svg"]} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Jeu de dés Pig" 
                            image={images["pig-dice-game.png"]} 
                            link="https://mickael-pedro.github.io/dice-game/"
                            srclink="https://github.com/mickael-pedro/dice-game"
                        >
                            <p>Petit jeu basé sur navigateur web à l’aide du DOM, où le premier joueur qui atteint les 100 points gagne le jeu. 
                            Les règles sont basées sur celles du <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)">Pig</a>.
                            </p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["html5.svg"]} alt="HTML5" title="HTML5"/>
                                <img src={logos["css3.svg"]} alt="CSS3" title="CSS3"/>
                                <img src={logos["javascript.svg"]} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Moteur de recherche Pixabay" 
                            image={images["pixabay-search.png"]} 
                            link="https://mickael-pedro.github.io/pixabay-search-engine/"
                            srclink="https://github.com/mickael-pedro/pixabay-search-engine"
                        >
                            <p>Moteur de recherche d'images basique utilisant l'API de Pixabay. Le projet a été réalisé rapidement d'où son interface et sa fonctionnalité simpliste.</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["react.svg"]} alt="React" title="React"/>
                                <img src={logos["html5.svg"]} alt="HTML5" title="HTML5"/>
                                <img src={logos["css3.svg"]} alt="CSS3" title="CSS3"/>
                                <img src={logos["javascript.svg"]} alt="Javascript" title="Javascript"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Rénovation site internet d'un auto-entrepreneur" 
                            image={images["bgoods.png"]}
                            link="https://bgoods.fr/"
                        >
                            <p>Lors de mon stage de Bachelor développeur d'application, j'ai eu l'occasion de rénover le site web d'un installateur de climatisation auto-entrepeneur.<br/>
                            Je suis parti d'un des modèles proposé par le CMS "Simply Shop" que j'ai ensuite personnalisé à l'image et aux demandes de l'entreprise.
                            </p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                Simply Shop
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Site fictif - Actu COVID19" 
                            image={images["covid-webiste.png"]}
                            link="https://www.figma.com/file/N8v3u6Pd2jh6qzcD69WzPO/Maquette-ActuCovid19---Mickael-De-Jesus-Pedro?type=design&mode=design&t=GU3iowL35slaClyc-1"
                        >
                            <p>Site ficitf d'actualité sur le COVID-19 réalisé dans le contexte dans d'un examen sur la conception d'une solution digitale où le projet devait être livrer en dix jours.<br/>
                            Le projet demandait un espace d'administration simple à utiliser, Wordpress a donc été mon premier choix. (Maquettes uniquement disponibles)
                            </p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["wordpress.svg"]} alt="Wordpress" title="Wordpress"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Maquette HD interactive pour une application mobile de l'URSSAF" 
                            image={images["ux-design-mobile.png"]}
                            link="https://www.figma.com/proto/oJSMEe10mdPeRpq8dMmGgg/Prototype---Appli-Mobile-URSSAF---Micka%C3%ABl-De-Jesus-Pedro?type=design&node-id=1-426&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A426&mode=design"
                        >
                            <p>Réalisée pour un examen sur l'UX Design pour mon Bachelor, cette maquette permet de tester le potentiel parcours utilisateur d'une
                            application mobile. (Non-affilié à l'URSSAF)</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["figma_logo.svg"]} alt="Figma" title="Figma"/>
                            </div>
                        </ProjectCard>
                        <ProjectCard title="Maquette HD d'un site web au design responsive" 
                            image={images["ux-design-responsive.png"]} 
                            link="https://www.figma.com/file/fmCFZ28tbKWixd20PAXN4e/Clipboard-Maquette?node-id=0%3A1&t=P5NEwOQEKW2xNLdr-1"
                        >
                            <p>Maquette d'un site web suivant le principe du desgin responsive, ce qui permet au site d'être autant accessible sur PC de bureau que smartphone.
                            Réalisée pour un entrainement sur l'UX Design. (L'application Clipboard présenté n'exsite pas réellement)</p>
                            <div className="made-with-wrapper mt-auto">
                                <p className="mb-2"><b>Réalisé avec</b></p>
                                <img src={logos["figma_logo.svg"]} alt="Figma" title="Figma"/>
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