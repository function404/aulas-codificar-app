import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

import { View, Button } from 'react-native';
import { useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Capture({ navigation }){

    useEffect(() => {
        if (hasPermissions()) {
          const subscription = ScreenCapture.addScreenshotListener(() => {
            alert('tmj');
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
      };
    
      const deactivate = async () => {
        await ScreenCapture.allowScreenCaptureAsync();
      };

    return(
        <View>
            <View>
                <Header
                    title='Captura de tela'
                />
            </View>
            
            <View>
                <Button title="Activate" onPress={activate} />
                <Button title="Deactivate" onPress={deactivate} />
            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}
