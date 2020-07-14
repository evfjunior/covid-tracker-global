import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DETAILS SCREEN</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
    justifyContent: 'center',
  },

  text: {
    color: '#fafafa',
  },
})

export default Details
