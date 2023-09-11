import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

import { View, Button, Alert } from 'react-native';
import { useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import styles from '../utils/style';

function Capture({ navigation }){

    useEffect(() => {
        if (hasPermissions()) {
          const subscription = ScreenCapture.addScreenshotListener(() => {
            Alert.alert('Sucesso', 'Você tirou uma captura de tela');
          });
          return () => subscription.remove();
        }
      }, []);
    
      const hasPermissions = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        return status === 'granted';
      };
    
      const activate = async () => {
        await ScreenCapture.preventScreenCaptureAsync();
        Alert.alert('Captura', 'Captura de tela desativada');
      };
    
      const deactivate = async () => {
        await ScreenCapture.allowScreenCaptureAsync();
        Alert.alert('Captura', 'Captura de tela ativada');
      };

    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Captura de tela'
                />
            </View>
            
            <View style={styles.center}>
                <Button title="Activate" onPress={activate} />
                <Button title="Deactivate" onPress={deactivate} />
            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default Capture;