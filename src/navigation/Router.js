import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator'

import LocationSearchScreen from '../screens/LocationSearch'
import GuestsScreen from '../screens/Guests'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Destination Search"}
                    component={LocationSearchScreen}
                    options={{
                        title: "Search your destination..."
                    }}
                />
                <Stack.Screen
                    name={"Guest Screen"}
                    component={GuestsScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;