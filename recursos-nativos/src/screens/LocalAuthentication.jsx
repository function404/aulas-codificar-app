import React, { useState} from 'react';
import { View, Button, Alert, Text } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';


import styles from '../utils/style';

import Header from '../components/header';
import Footer from '../components/footer';



function MyLocalAuthentication(){

    const [isTimeAvailable, setIsTimeAvailable] = useState(false);
    const [authType, setAuthType] = useState(null); 

    const autenticar = async () => {
        try{
            const disponivel = await LocalAuthentication.hasHardwareAsync();
            if(!disponivel){
                Alert.alert('info', 'Autenticação não disponível');
                return;
            } 
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();
            if(!isEnrolled){
                Alert.alert('info', 'Autenticação não cadastrada');
                return;
            }
            
            let authTypes = [LocalAuthentication.AuthenticationType.FINGERPRINT];
            if (Platform.OS === 'android') {
            authTypes.push(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
                }

            const { success, authType: selectedAuthType } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Escolha o tipo de autenticação',
                disableDeviceFallback: true,
                fallbackLabel: 'Senha',
                cancelLabel: 'Cancelar',
                authenticators: authTypes,
                });
        
                if (success && !isTimeAvailable) {
                setIsTimeAvailable(true);
                setAuthType(selectedAuthType);
        
                setTimeout(() => {
                    setIsTimeAvailable(false);
                    setAuthType(null);
                }, 10000);
                } else {
                Alert.alert('error', 'Autenticação cancelada');
                }
            } catch (error) {
                Alert.alert('error', 'Não foi possível autenticar');
        }
    }


    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Authentication'
                />
            </View>
        
            <View style={styles.center}>
                <Button disabled={isTimeAvailable} title='Autenticar' onPress={autenticar} />
                {authType && <Text>Tipo de autenticação selecionado: {authType}</Text>}
            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default MyLocalAuthentication;