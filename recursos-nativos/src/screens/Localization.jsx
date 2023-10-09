import * as Location from 'expo-location';
import { View, Text, Alert } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import Header from '../components/header';
import Footer from '../components/footer';

import styles from '../utils/style';
import { useEffect, useState } from 'react';

function Localization({ navigation }){
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
      
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('A permissão para acessar a localização foi negada');
              return;
            }
      
            let info = await Location.getCurrentPositionAsync({});
            console.log(info.coords);
            setLocation(info.coords);
          })();
        }, []);

    
    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Localização'
                />
            </View>
           
            <View>
                {
                    !location
                    ? (<Text>Carregando...</Text>)
                    : (<Text>
                        Latitude: {location?.latitude}, Longitude: {location?.longitude}
                    </Text>)
                }
            </View>

            <View>
                <MapView style={styles.map} >
                    <Marker
                        style={{ flex: 1 }}
                        coordinate={{ latitude: location?.latitude, longitude: location?.longitude}}
                    />
                </MapView>
            </View>

            <View>
                <Footer/>
            </View>
        </View>
    )
}

export default Localization;
