import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import { LocationContext } from '../contexts/LocationContext'
import { theme } from '../config'

const RoundButton = ({ icon, navigation }) => {
  const { location } = useContext(LocationContext)

  const handleButtonPress = () => {
    navigation.navigate('Details', {
      locationCode: location.value,
      locationName: location.label,
    })
  }

  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={theme.accentDark}
      onPress={() => handleButtonPress()}>
      <Text>{icon}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.accent,
    borderRadius: 50,
    elevation: 5,
    marginTop: 24,
    padding: 16,
  },
})

export default RoundButton
