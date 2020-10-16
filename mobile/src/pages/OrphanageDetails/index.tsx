import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'

import MapMarkerImg from '../../images/map-marker.png'

import {
  Container,
  ImagesContainer,
  OrphanageImage,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  Map,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItemClock,
  ScheduleItemInfo,
  ScheduleText,
  ContactButton,
  ContactButtonText
} from './styles'

const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          <OrphanageImage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg'
            }}
          />
          <OrphanageImage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg'
            }}
          />
          <OrphanageImage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg'
            }}
          />
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: -3.083637,
              longitude: -60.0232199,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={MapMarkerImg}
              coordinate={{
                latitude: -3.083637,
                longitude: -60.0232199
              }}
            />
          </Map>
          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />
        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItemClock>
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleText>Segunda à Sexta 8h às 18h</ScheduleText>
          </ScheduleItemClock>
          <ScheduleItemInfo>
            <Feather name="info" size={40} color="#39cc83" />
            <ScheduleText style={{ color: '#37c77f' }}>
              Atendemos fim de semana
            </ScheduleText>
          </ScheduleItemInfo>
        </ScheduleContainer>

        <ContactButton>
          <FontAwesome name="whatsapp" size={24} color="#fff" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  )
}

export default OrphanageDetails
