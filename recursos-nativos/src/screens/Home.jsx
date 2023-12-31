import * as React from 'react';
import * as Battery from 'expo-battery';

import { Button, View } from 'react-native';

import Header from '../components/header';

import styles from '../utils/style';

function Home({ navigation }){
    return(
        <View style={styles.container}>
                <Header title='Home'/>
            <View style={styles.infoBox}>
                <Button
                    title='Battery Info'
                    onPress={() => navigation.navigate('BatteryInfo')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Device Info'
                    onPress={() => navigation.navigate('DeviceInfo')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Orientação'
                    onPress={() => navigation.navigate('Orientação')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Notificação'
                    onPress={() => navigation.navigate('Notify')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Contato'
                    onPress={() => navigation.navigate('Contact')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Câmera'
                    onPress={() => navigation.navigate('CameraInfo')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Sensors'
                    onPress={() => navigation.navigate('Sensors')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Capture'
                    onPress={() => navigation.navigate('Capture')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Autenticação'
                    onPress={() => navigation.navigate('LocalAuthentication')} 
                >
                </Button>
            </View>
            <View style={styles.infoBox}>
                <Button
                    title='Localização'
                    onPress={() => navigation.navigate('Localization')} 
                >
                </Button>
            </View>
        </View>
    )
}

export default Home;