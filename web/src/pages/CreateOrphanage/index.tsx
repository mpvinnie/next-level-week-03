import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'

import Sidebar from '../../components/Sidebar'
import colors from '../../styles/colors';
import mapIcon from '../../utils/mapIcon';

import { Container, Content, Form, InputContainer, OpenOnWeekendContainer, SelectButton } from './styles';

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Form>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-3.0766069, -60.0143848]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker interactive={false} icon={mapIcon} position={[-3.0766069, -60.0143848]} />
            </Map>

            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input />
            </InputContainer>

            <InputContainer>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="images">Fotos</label>
              <div>

              </div>

              <button>
                <FiPlus size={24} color={colors.blue} />
              </button>
            </InputContainer>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputContainer>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="opening_hours">Horário</label>
              <input id="opening_hours" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <OpenOnWeekendContainer>
                <SelectButton type="button" active>Sim</SelectButton>
                <SelectButton type="button">Não</SelectButton>
              </OpenOnWeekendContainer>
            </InputContainer>
          </fieldset>

          <button type="submit">Confirmar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateOrphanage;
