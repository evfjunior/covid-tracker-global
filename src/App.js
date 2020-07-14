import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>COVID Tracker</Text>
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

export default App
