import React from 'react'

import TeacherStudyingPicture from '../assets/opos-page/teacher-studying.png'
import Page from '../components/Atoms/Page';
import Hero from '../components/Organisms/Hero';
import Button from '../components/Atoms/Button';

const Opos = () => {
  return (
    <Page>
      <Hero columns>
        <section>
          <h1 className="big-text">Tu pots <br/> amb les oposicions!</h1>
          <p>
            Estem preparant un currículum de recursos gratuïts per orientar-te,
            pas a pas, vers el teu objectiu.
          </p>
          <p>
            Comparteix enllaços i recursos amb la comunitat de mestres i educadores que utilitzen DiverTeach.
          </p>
          <p>
            <Button>
              Proposa'ns un recurs
            </Button>
          </p>
        </section>
        <section >
          <img
            style={{width: '100%'}}
            src={TeacherStudyingPicture}
            alt="A teacher studying"
          />
        </section>
      </Hero>
    </Page>
  );
}

export default Opos
