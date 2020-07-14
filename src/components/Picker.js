import React, { useState, useContext } from 'react'
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import { LocationContext } from '../contexts/LocationContext'
import { strings, theme } from '../config'

const Picker = ({ label, locations }) => {
  const { setLocation } = useContext(LocationContext)
  const [selectedOption, setSelectedOption] = useState(locations[0])
  const [modalVisible, setModalVisible] = useState(false)

  const handleSelection = (value) => {
    setSelectedOption(value)
    setLocation(selectedOption)
    setModalVisible(!modalVisible)
  }

  setLocation(selectedOption)

  return (
    <>
      {/* Picker box */}
      <Text style={styles.label}>{label}</Text>
      <TouchableHighlight
        style={styles.picker}
        underlayColor={theme.accent}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text>{selectedOption.label}</Text>
      </TouchableHighlight>

      {/* Modal options list */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centralizer}>
          <View style={styles.modalBox}>
            <ScrollView>
              {locations.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    style={styles.modalItem}
                    underlayColor={theme.accent}
                    onPress={() => handleSelection(value)}>
                    <Text>{value.label}</Text>
                  </TouchableHighlight>
                )
              })}
            </ScrollView>

            {/* Cancel Button */}
            <TouchableHighlight
              style={styles.modalButton}
              underlayColor={theme.backgroundLight}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.cancelButton}>{strings.cancelButton}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  cancelButton: {
    textTransform: 'uppercase',
  },

  centralizer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.backgroundSemiTransparent,
    justifyContent: 'center',
  },

  label: {
    fontSize: 12,
    marginTop: 20,
    textTransform: 'uppercase',
  },

  modalButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    borderRadius: 4,
    padding: 8,
  },

  modalBox: {
    backgroundColor: theme.background,
    borderRadius: 4,
    height: '75%',
    padding: 20,
    width: '75%',
  },

  modalItem: {
    backgroundColor: 'transparent',
    marginVertical: 2,
    padding: 12,
  },

  picker: {
    backgroundColor: theme.backgroundLight,
    borderRadius: 8,
    elevation: 5,
    marginTop: 8,
    padding: 12,
    width: '75%',
  },
})

export default Picker
