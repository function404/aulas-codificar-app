import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as Battery from 'expo-battery';

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: '#606',
        paddingBottom: 5,
        paddingHorizontal: 5,
    },  
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
});

export default function Header({ title }){
    const [batteryLevel, setBatteryLevel] = useState(0);
    const [batteryStatus, setBatteryStatus] = useState();
    const [fundo, setFundo] = useState('');

    const cor = () => {
        if (batteryLevel < 30) {
          setFundo('red');
          setBatteryStatus('Bateria Fraca');
        } else if (batteryLevel < 50) {
          setFundo('orange');
          setBatteryStatus('Bateria Média');
        } else if (batteryLevel < 80) {
          setFundo('yellow');
          setBatteryStatus('Bateria Boa');
        } else {
          setFundo('#606');
          setBatteryStatus('Bateria Cheia');
        };
      };
    
      async function BatteryLevel() {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        setBatteryLevel(Math.round(batteryLevel * 100));
      }
    
      async function atualizarTudo() {
        BatteryLevel();
      }
    
      useEffect(() => {
        BatteryLevel();
        cor();
      }, [batteryLevel]);


    return(
        <View style={[styles.container, { backgroundColor: fundo }]}>
            <Text style={styles.headerTextStyle}>
                { title }
            </Text>
        </View>
    )
}