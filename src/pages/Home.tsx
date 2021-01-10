import React from 'react';
import {motion} from 'framer-motion';

import './Home.css';
import SuperHeroImage from '../assets/landing-page/superhero.png';
import ArnauImage from '../assets/landing-page/foto-arnau.png';
import BeaImage from '../assets/landing-page/foto-bea.jpeg';
import CarlaImage from '../assets/landing-page/foto-carla.png';
import Hero from '../components/Organisms/Hero';
import Button from '../components/Atoms/Button';
import MiddleHero from '../components/Organisms/MiddleHero';
import Tag from '../components/Atoms/Tag';
import Section from '../components/Organisms/Section';
import TripleCard from '../components/Molecules/TripleCard';
import ProfilePicture from '../components/Atoms/ProfilePicture';
import Card from '../components/Atoms/Card';
import Footer from '../components/Organisms/Footer';
import Page from '../components/Atoms/Page';

const Home = () => {
  return (
    <Page>
      <Hero columns>
        <section className="home__hero-section-1">
          <h1 className="big-text">Superpoders per a mestres creatius/ves</h1>
          <p>
            Totes les eines que necessites per a les teves classes, en un sol
            lloc i sense anuncis.
          </p>
          <p style={{textAlign: 'right'}}>
            <Button link="dashboard">Entra a Diverteach</Button>
          </p>
        </section>
        <section className="home__superhero-image-container">
          <motion.img
            initial={{x: 30, y: 50, opacity: 0}}
            animate={{x: 0, y: 0, opacity: 1, transition: {delay: 0.8}}}
            style={{width: '100%'}}
            src={SuperHeroImage}
            alt="A teacher super-hero"
          />
        </section>
      </Hero>
      <MiddleHero>
        <h2 className="text-center">Què hi ha a DiverTeach?</h2>
        <h3>Classes inoblidables</h3>
        <ul className="feature-list">
          <li>
            <span className="list-icon" role="img" aria-label="">
              ⏰
            </span>
            Temporitzador amb sons
          </li>
          <li>
            <span className="list-icon" role="img" aria-label="">
              🤫
            </span>
            Mesurador de silenci
          </li>
          <li>
            <span className="list-icon" role="img" aria-label="">
              📝
            </span>
            Bloc de notes
          </li>
          <li>
            <span className="list-icon" role="img" aria-label="">
              🎨
            </span>
            Pissarra digital
          </li>
          <li>
            <span className="list-icon" role="img" aria-label="">
              👥
            </span>
            Creador de grups automàtic <Tag type="inverted">PROPERAMENT</Tag>
          </li>
        </ul>
        <h3>Programacions més entretingudes</h3>
        <ul>
          <li>
            <span className="list-icon" role="img" aria-label="">
              💪
            </span>
            Els millors recursos per a les oposicions
          </li>
          <li>
            <span className="list-icon" role="img" aria-label="">
              🧠
            </span>
            Planificador creatiu de seqüències didàctiques
            <Tag type="inverted">PROPERAMENT</Tag>
          </li>
        </ul>
      </MiddleHero>
      <Section>
        <h2 className="text-center">Qui som?</h2>
        <br />
        <TripleCard>
          <Card>
            <ProfilePicture src={ArnauImage} />
            <h3>Arnau 💻</h3>
            <p>Mestre i desenvolupador</p>
            <br />
            <Button
              type="inverted"
              href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
            >
              Contacta'm
            </Button>
          </Card>
          <Card>
            <ProfilePicture src={BeaImage} />
            <h3>Bea ✨</h3>
            <p>Mestra i dissenyadora</p>
            <br />
            <Button
              type="inverted"
              href="https://www.linkedin.com/in/beatriz-c%C3%B3rdoba-cruz-236080168/"
            >
              Contacta'm
            </Button>
          </Card>
          <Card>
            <ProfilePicture src={CarlaImage} />
            <h3>Carla 🎨</h3>
            <p>Mestra i il·lustradora</p>
            <br />
            <Button
              type="inverted"
              href="https://www.linkedin.com/in/carla-g%C3%A1mez-alarc%C3%B3n-184710181/"
            >
              Contacta'm
            </Button>
          </Card>
        </TripleCard>
      </Section>
      <Footer />
    </Page>
  );
};

export default Home;
