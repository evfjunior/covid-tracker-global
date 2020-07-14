import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { setCustomText } from 'react-native-global-props'
import Icon from 'react-native-vector-icons/Feather'

import Main from './screens/Main'
import Details from './screens/Details'

import theme from './config/theme'

const Routes = () => {
  const Stack = createStackNavigator()

  const textProps = {
    style: {
      color: theme.textColor,
      fontFamily: theme.fontText,
    },
  }

  const backButton = () => (
    <Icon name={'chevron-left'} size={24} color={theme.textColor} />
  )

  setCustomText(textProps)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: theme.background },
          headerTintColor: theme.textColor,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: theme.accent },
          headerTitleStyle: { fontFamily: theme.fontText },
          headerBackImage: backButton,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'COVID Tracker' }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
