import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

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
  OpenDetails,
  OpeningHoursContainer,
  OpenOnWeekendContainer
} from './styles';
import api from '../../services/api';

interface IOrphanage {
  latitude: number
  longitude: number
  name: string
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    id: number
    url: string
  }>
}

interface IOrphanageParams {
  id: string
}

const Orphanage: React.FC = () => {
  const params = useParams<IOrphanageParams>()
  const [orphanage, setOrphanage] = useState<IOrphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SideBar />
      <Content>
        <DetailsContainer>
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <ImagesContainer>
            {orphanage.images.map((image, index) => {
              return (
                <ButtonImage
                  key={image.id}
                  active={activeImageIndex === index}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index)
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </ButtonImage>
              )
            })}
          </ImagesContainer>

          <OrphanageDetails>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <OpeningHoursContainer>
                <FiClock size={32} color={colors.blue} />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </OpeningHoursContainer>

              <OpenOnWeekendContainer open_on_weekends={orphanage.open_on_weekends}>
                <FiInfo size={32} />
                Atendemos <br />
                fim de semanada
              </OpenOnWeekendContainer>
            </OpenDetails>

            <button type="button">
              <FaWhatsapp size={20} color={colors.primary} />
              Entrar em contato
            </button>
          </OrphanageDetails>
        </DetailsContainer>
      </Content>
    </Container>
  );
};

export default Orphanage;
