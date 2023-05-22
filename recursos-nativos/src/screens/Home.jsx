import * as React from 'react';

import { Button, View } from 'react-native';

import Header from '../components/header';

export default function Home({ navigation }){
    return(
        <View>
                <Header title='Home'/>
            <View style={{ marginTop: 15 }}>
                <Button
                    title='Battery Info'
                    onPress={() => navigation.navigate('BatteryInfo')} 
                >
                </Button>
            </View>
            <View style={{ marginTop: 15 }}>
                <Button
                    title='Device Info'
                    onPress={() => navigation.navigate('DeviceInfo')} 
                >
                </Button>
            </View>
        </View>
    )
}