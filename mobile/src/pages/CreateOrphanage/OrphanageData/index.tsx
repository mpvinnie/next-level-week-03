import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Switch } from 'react-native'

import {
  Container,
  Title,
  Label,
  Input,
  InputImageButton,
  SwitchContainer,
  NextButton,
  NextButtonText
} from './styles'

const OrphanageData: React.FC = () => {
  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input />

      <Label>Sobre</Label>
      <Input style={{ height: 110 }} multiline />

      <Label>Whatsapp</Label>
      <Input />

      <Label>Fotos</Label>
      <InputImageButton
        onPress={() => {
          /* */
        }}
      >
        <Feather name="plus" size={24} color="#15b6d6" />
      </InputImageButton>

      <Title>Visitação</Title>

      <Label>Intruções</Label>
      <Input style={{ height: 110 }} />

      <Label>Horário de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
        />
      </SwitchContainer>

      <NextButton>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  )
}

export default OrphanageData
