import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import BatteryInfo from './screens/BatteryInfo';
import DeviceInfo from './screens/DeviceInfo';
import Orientacao from './screens/MyScreenOrientation';
import Notify from './screens/Notify';
import ContatoInfo from './screens/ContactsInfo';
import Camera from './screens/camera';
import Sensors from './screens/Sensors';

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
                <Stack.Screen name='BatteryInfo' component={BatteryInfo} options={{headerShown: false}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: false}} />
                <Stack.Screen name='Orientação' component={Orientacao} options={{headerShown: false}} />
                <Stack.Screen name='Notify' component={Notify} options={{headerShown: false}} />
                <Stack.Screen name='Contact' component={ContatoInfo} options={{headerShown: false}} />
                <Stack.Screen name='Camera' component={Camera} options={{headerShown: false}} />
                <Stack.Screen name='Sensors' component={Sensors} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}