import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import BatteryInfo from './screens/BatteryInfo';
import DeviceInfo from './screens/DeviceInfo';

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='BatteryInfo' component={BatteryInfo}/>
                <Stack.Screen name='DeviceInfo' component={DeviceInfo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}