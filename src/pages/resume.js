import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { ResumeItem } from '../components/ResumeItem';

function Education() {
  return (
    <div className='main-div'>
      <NavBar/>
      <Fade className='flex-grow-1'>
        <Container>
          <div className='d-flex flex-column flex-md-row'>
            <div className='w-md-50 mb-4 mb-md-0 me-md-4'>
              <h3 className='mb-3'>Diplômes et formations</h3>
              <ResumeItem date="2022 - aujourd'hui" title="Bachelor Développeur d'application">
                <p><i>Studi</i></p>
              </ResumeItem>
              <ResumeItem date="2018 - 2020" title="BTS Services Informatiques aux Organisations - option Réseau">
                <p><i>Lycée René Descartes, 77420 Champs-sur-Marne</i></p>
              </ResumeItem>
              <ResumeItem date="2016 - 2017" title="BAC Sciences et Technologies du Management et de la Gestion">
                <p><i>Lycée Jehan de Chelles, 77500 Chelles</i></p>
              </ResumeItem>
            </div>
            <div className='w-md-50 mb-4 mb-md-0'>
              <h3  className='mb-3'>Expériences professionnelles</h3>
              <ResumeItem date="Septembre 2020 - Avril 2021" title="Technicien support technique en alternance">
                <p><i>Direction Générale des Finances Publiques, 77458 Marne-la-Vallée</i></p>
                <ul>
                  <li>Résolution des problèmes techniques des utilisateurs</li>
                  <li>Intervention sur place ou à distance sur les machines utilisateurs</li>
                  <li>Installation et configuration des postes</li>
                  <li>Accompagnement des utilisateurs à la prise en main des outils et des machines</li>
                </ul>
              </ResumeItem>
              <ResumeItem date="Janvier 2020 - Mars 2020" title="Stage en maintenance de site web">
                <p><i>Association Zemus, 94043 Kremlin-Bicêtre</i></p>
                <ul>
                  <li>Correction et mise à jour des articles du site</li>
                  <li>Ajout de contenu multimédia</li>
                  <li>Représentant de Zemus à un forum des métiers du numérique</li>
                </ul>
              </ResumeItem>
              <ResumeItem date="Mai 2019 - Juin 2019" title="Stage en sécurité des systèmes">
                <p><i>BNP PARIBAS, 93048 Montreuil</i></p>
                <ul>
                  <li>Analyse différentielle entre 2 versions de politique de sécurité</li>
                  <li>Révision de la politique de sécurité</li>
                </ul>
              </ResumeItem>
            </div>
          </div>
        </Container>
      </Fade>
      <Footer/>
    </div>
  );
}

export default Education;
