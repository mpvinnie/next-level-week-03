import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Marker } from 'react-native-maps'

import MapMarkerImg from '../../../images/map-marker.png'

import { Container, Map, NextButton, NextButtonText } from './styles'

const SelectMapPosition: React.FC = () => {
  const navitation = useNavigation()

  const handleNextStep = useCallback(() => {
    navitation.navigate('OrphanageData')
  }, [])

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -3.083637,
          longitude: -60.0232199,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        <Marker
          icon={MapMarkerImg}
          coordinate={{
            latitude: -3.083637,
            longitude: -60.0232199
          }}
        />
      </Map>

      <NextButton onPress={handleNextStep}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  )
}

export default SelectMapPosition
