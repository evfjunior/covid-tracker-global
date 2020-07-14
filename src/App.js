import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'

import theme from './config/theme'

import Routes from './routes'

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.accentDark}
        translucent
      />
      <Routes />
    </>
  )
}

export default App
