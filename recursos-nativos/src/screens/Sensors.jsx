import React, { useState, useEffect } from 'react';
import { Magnetometer, Gyroscope, LightSensor, Accelerometer } from 'expo-sensors';

import { View, Text, ScrollView } from 'react-native';

import styles from '../utils/style';
import Footer from '../components/footer';
import Header from '../components/header';
import { ImageBackground } from 'react-native-web';

function Sensors(){

    const [Magneto, setMagneto] = useState({});
    const [Girioscopio, setGirioscopio] = useState({});
    const [Luz, setLuz] = useState({});
    const [Acelerometro, setAcelerometro] = useState({});

    const [colorBg, setColorBg] = useState('#fff');

    const GyroscopeList = (data) => {
        setGirioscopio(data);
    };

    const MagnetometerList = (data) => {
        setMagneto(data);
    };

    const LightSensorList = (data) => {
        setLuz(data);
    };

    const AccelerometerList = (data) => {
        setAcelerometro(data);
    };

    useEffect(() => {
        Gyroscope.addListener(GyroscopeList);
        Magnetometer.addListener(MagnetometerList);
        LightSensor.addListener(LightSensorList);
        Accelerometer.addListener(AccelerometerList);

        if (Magneto.z >= 0) {
            setColorBg('grey');
        } else if (Magneto.z <= -270) {
            setColorBg('#fff');
        } else if (Magneto.z <= -180) {
            setColorBg('orange');
        } else if (Magneto.z <= -90) {
            setColorBg('yellow');
        }

    }, [Magneto, Girioscopio, Luz, Acelerometro]);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorBg }]}>
                <Header title='Sensores' />
                    <View style={styles.center}>
                        <Text style={styles.text}>Girioscopio: {'\n'}x:{Girioscopio.x}{'\n'}y:{Girioscopio.y}{'\n'}z:{Girioscopio.z}{'\n'} </Text>
                        <Text style={styles.text}>Magnetometro: {'\n'}x:{Magneto.x}{'\n'}y:{Magneto.y}{'\n'}z:{Magneto.z}{'\n'} </Text>
                        <Text style={styles.text}>Luz: {Luz.illuminance ?? 0} </Text>
                        <Text style={styles.text}>Acelerometro: {'\n'}x:{Acelerometro.x}{'\n'}y:{Acelerometro.y}{'\n'}z:{Acelerometro.z}{'\n'} </Text>
                    </View>
            </View>
            <View>
                <Footer/>
            </View>
        </ScrollView>
    )
};

export default Sensors;