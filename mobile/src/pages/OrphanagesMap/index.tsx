import React, { useCallback, useEffect, useState } from 'react'
import { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import mapMarker from '../../images/map-marker.png'

import {
  MapContainer,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOtphanageButton
} from './styles'

interface IOrphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])
  const navigation = useNavigation()

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data)
    })
  }, [])

  const handleNavigateToOrphanageDetails = useCallback((id: number) => {
    navigation.navigate('OrphanageDetails', { id })
  }, [])

  const handleNavigateToCreateOrphanage = useCallback(() => {
    navigation.navigate('SelectMapPosition')
  }, [])

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
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            >
              <Callout
                tooltip
                onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
              >
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          )
        })}
      </Map>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOtphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOtphanageButton>
      </Footer>
    </MapContainer>
  )
}

export default OrphanagesMap
