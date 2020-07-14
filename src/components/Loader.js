import React from 'react'
import { ActivityIndicator, Text, StyleSheet } from 'react-native'

import Container from './Container'

import { strings, theme } from '../config'

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.accent} />
      <Text style={styles.text}>{strings.loaderText}</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    textTransform: 'uppercase',
  },
})

export default Loader
