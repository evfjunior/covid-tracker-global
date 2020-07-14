import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import numberFormatter from '../utils/numberFormatter'
import { theme } from '../config'

const renderItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.value}>{numberFormatter(item.value)}</Text>
  </View>
)

const Card = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.description}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  description: {
    textTransform: 'uppercase',
  },

  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },

  value: {
    fontFamily: theme.fontNumeric,
    fontSize: 36,
  },
})

export default Card
