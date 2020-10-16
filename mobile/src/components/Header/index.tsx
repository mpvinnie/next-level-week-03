/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container, Title, BackButton } from './styles'

interface IHeaderProps {
  title: string
  showCancel?: boolean
}

const Header: React.FC<IHeaderProps> = ({
  title,
  showCancel = true
}: IHeaderProps) => {
  const navigation = useNavigation()

  const handleGoBackToAppHomepage = useCallback(() => {
    navigation.navigate('OrphanagesMap')
  }, [])

  return (
    <Container>
      <BackButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6b6" />
      </BackButton>
      <Title>{title}</Title>
      {showCancel ? (
        <BackButton onPress={handleGoBackToAppHomepage}>
          <Feather name="x" size={24} color="#ff669b" />
        </BackButton>
      ) : (
          <View />
        )}
    </Container>
  )
}

export default Header
