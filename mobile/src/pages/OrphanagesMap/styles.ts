import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

import MapView from 'react-native-maps'

const full_width = Dimensions.get('window').width
const full_height = Dimensions.get('window').height

export const MapContainer = styled.View`
  flex: 1;
`

export const Map = styled(MapView)`
  width: ${full_width};
  height: ${full_height};
`

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`

export const CalloutText = styled.Text`
  color: #0089a5;
  font-size: 14px;

  font-family: nunito700;
`

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-family: nunito700;
`

export const CreateOtphanageButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background: #15c3d6;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`
