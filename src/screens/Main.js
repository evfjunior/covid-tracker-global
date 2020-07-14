import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { Container, Picker, RoundButton, TextBox } from '../components'

import LocationProvider from '../contexts/LocationContext'
import { locations, strings, theme } from '../config'

const Main = ({ navigation }) => {
  const icon = <Icon name="chevrons-right" size={24} color={theme.textColor} />

  return (
    <Container>
      <LocationProvider>
        <TextBox content={strings.introText} />
        <Picker label={strings.pickerLabel} locations={locations} />
        <RoundButton icon={icon} navigation={navigation} />
      </LocationProvider>
    </Container>
  )
}

export default Main
