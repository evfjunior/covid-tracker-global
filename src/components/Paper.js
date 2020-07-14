import React from 'react'
import { StyleSheet, View } from 'react-native'

import { theme } from '../config'

const Paper = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundLight,
    borderRadius: 8,
    elevation: 5,
    padding: 16,
    width: '100%',
  },

  text: {
    textAlign: 'center',
  },
})

export default Paper
