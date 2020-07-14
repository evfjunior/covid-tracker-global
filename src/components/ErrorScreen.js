import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Container from './Container'

import { strings } from '../config'

const ErrorScreen = () => {
  return (
    <Container>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{strings.errorMessage}</Text>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
  },
})

export default ErrorScreen
