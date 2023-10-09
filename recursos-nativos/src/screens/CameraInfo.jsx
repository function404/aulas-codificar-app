import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLib from 'expo-media-library';

import Header from '../components/header';
import Footer from '../components/footer';

import styles from '../utils/style';

function CameraInfo({ navigation }){
    const [ hasPermission, setHasPermission] = useState(null);
    const [ cameraRef, setCameraRef] = useState(null);
    const [ type, setType] = useState(Camera.Constants.Type.back);

    const [blockButton, setblockButton] = useState(false);
    const [ changeTitle, setChangeTitle] = useState('Tirar foto');


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleCameraType = () => {
        setType(
          type == Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        )
    }

    const takePicture  = async () => {
        if(cameraRef) {
            setblockButton(true)
            setChangeTitle('Aguarde...')
            Alert.alert('info', 'Foto Tirada');
            console.log('Foto tirada')
            setTimeout(async () => {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLib.requestPermissionsAsync()
                await MediaLib.createAssetAsync(uri)
                Alert.alert('info', 'Foto salva com sucesso');
                setblockButton(false)
                setChangeTitle('Tirar foto')
            }, 2000);
        }
    }

    if(hasPermission == null){
        return (<View/>)
    }

    if(hasPermission == false){
        return (<Text> Sem acesso a câmera</Text>)
    }

    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Câmera'
                />
            </View>

            <View style={styles.center}>
                <Camera
                    ref={(ref) => setCameraRef(ref)}
                    type={type}
                    ratio="4:3"
                    zoom={0}
                    style={{
                        width: 350 , 
                        height: 350
                    }}
                />
                <View style={styles.buttonContainer}>
                    <Button title='Trocar Cam' style={styles.button} onPress={handleCameraType}/>
                    <Button disabled={blockButton} title={changeTitle} style={styles.button} onPress={takePicture}/>
                </View>
            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default CameraInfo;
