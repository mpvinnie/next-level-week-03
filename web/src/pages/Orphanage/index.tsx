import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import colors from '../../styles/colors';
import mapIcon from '../../utils/mapIcon'

import SideBar from '../../components/Sidebar';

import {
  Container,
  Content,
  DetailsContainer,
  ImagesContainer,
  ButtonImage,
  OrphanageDetails,
  MapContainer,
  OpenDetails
} from './styles';

const Orphanage: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <DetailsContainer>
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <ImagesContainer>
            <ButtonImage active type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
            <ButtonImage type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
            <ButtonImage type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
            <ButtonImage type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
            <ButtonImage type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
            <ButtonImage type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </ButtonImage>
          </ImagesContainer>

          <OrphanageDetails>
            <h1>Lar das Meninas</h1>
            <p>Presta assitência a crianças de 06 a 15 anos que se encontre em situações de risco e/ou vulnerabilidade social.</p>

            <MapContainer>
              <Map
                center={[-3.0766069, -60.0143848]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[-3.0766069, -60.0143848]} />
              </Map>

              <footer>
                <Link to="">Ver rotas no Google Maps</Link>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha e sinta-se à vontade e traga muito amor para dar.</p>

            <OpenDetails>
              <div>
                <FiClock size={32} color={colors.blue} />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div>
                <FiInfo size={32} color={colors.green} />
                Atendemos <br />
                fim de semanada
              </div>

              <button type="button">
                <FaWhatsapp size={20} color={colors.primary} />
                Entrar em contato
              </button>
            </OpenDetails>
          </OrphanageDetails>
        </DetailsContainer>
      </Content>
    </Container>
  );
};

export default Orphanage;
