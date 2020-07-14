import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { format } from 'date-fns'

import { strings, theme } from '../config'

const TimeStamp = ({ datetime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.timestamp.title}</Text>
      <Text style={styles.date}>
        {format(new Date(datetime), strings.timestamp.format)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  date: {
    fontFamily: theme.fontNumeric,
  },

  text: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
})

export default TimeStamp
