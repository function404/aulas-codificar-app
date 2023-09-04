import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

import styles from '../utils/style';
import Header from '../components/header';
import Footer from '../components/footer';



function MyLocalAuthentication(){
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
            const { success } = await LocalAuthentication.authenticateAsync();
            if(success){
                Alert.alert('success', 'Autenticação realizada com sucesso');
            } else {
                Alert.alert('error', 'Autenticação falhou');

            }

        } catch (error){
            console.log(error);
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
                <Button title='Autenticar' onPress={autenticar} />
            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default MyLocalAuthentication;