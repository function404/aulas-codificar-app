import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import BatteryInfo from './screens/BatteryInfo';
import DeviceInfo from './screens/DeviceInfo';
import Orientacao from './screens/MyScreenOrientation';
import Notify from './screens/Notify';

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='BatteryInfo' component={BatteryInfo} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} />
                <Stack.Screen name='Orientacao' component={Orientacao} />
                <Stack.Screen name='Notify' component={Notify} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}