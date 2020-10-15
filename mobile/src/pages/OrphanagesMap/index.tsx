import React from 'react'
import { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import {
  MapContainer,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOtphanageButton
} from './styles'

import mapMarker from '../../images/map-marker.png'

const OrphanagesMap: React.FC = () => {
  return (
    <MapContainer>
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -3.0780224,
          longitude: -60.0193848,
          latitudeDelta: 0.0008,
          longitudeDelta: 0.008
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -3.0780224,
            longitude: -60.0193848
          }}
        >
          <Callout
            tooltip
            onPress={() => {
              /* */
            }}
          >
            <CalloutContainer>
              <CalloutText>Lar das Meninas</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </Map>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOtphanageButton>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOtphanageButton>
      </Footer>
    </MapContainer>
  )
}

export default OrphanagesMap
