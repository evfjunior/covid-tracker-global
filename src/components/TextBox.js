import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextBox = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
  },
})

export default TextBox
