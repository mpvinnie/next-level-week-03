import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../../images/logo.svg'
import colors from '../../styles/colors';

import { Container, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mudo o dia de muitas crianças.</p>
        </main>

        <div>
          <strong>Manaus</strong>
          <span>Amazonas</span>
        </div>

        <a href="">
          <FiArrowRight size={26} color={colors.black_60} />
        </a>
      </Content>
    </Container >
  );
};

export default Landing;
