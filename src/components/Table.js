import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { theme } from '../config'
import numberFormatter from '../utils/numberFormatter'

const renderItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={[styles.description]}>{item.description}</Text>
    <Text style={[styles.value]}>{numberFormatter(item.value)}</Text>
    <Text style={[styles.percentage]}>{`+${item.percentage}%`}</Text>
  </View>
)

const Table = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.description}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: '100%',
  },

  description: {
    flex: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },

  percentage: {
    flex: 2,
    fontFamily: theme.fontNumeric,
    textAlign: 'center',
  },

  value: {
    flex: 4,
    fontFamily: theme.fontNumeric,
    fontSize: 28,
    textAlign: 'center',
  },
})

export default Table
