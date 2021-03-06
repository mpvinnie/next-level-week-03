import { BorderlessButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 24px;
  background: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-family: nunito600;
  color: #8fa7b3;
  font-size: 16px;
`

export const BackButton = styled(BorderlessButton)``
