import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

import theme from '../config/theme'

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MAIN SCREEN</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Details')
        }}>
        <Text style={styles.text}>GO TO DETAILS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.accent,
    marginTop: 8,
    padding: 8,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
    justifyContent: 'center',
  },
})

export default Main
