import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import styles from '../utils/style';

function Notify({ navigation }){
    const [expoToken, setExpoToken] = useState('');

    async function notificarExpo(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Bora tomar o remédio', // nome do app   
                subtitle: 'Sr.eSra.BemEstar', // nome da notificação
                body: 'Dipirona 300mg - 1 comprimido', // conteudo/mensagem da notificação
            },
            trigger: {
                seconds: 3,
            }
        })
        setExpoToken(token);
    }

    async function notificarScheduled(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'OIOI', // nome do app   
                subtitle: 'Agenda', // nome da notificação
                body: 'Notificação Agendada', // conteudo/mensagem da notificação
            },
            trigger: {
                seconds: 7,
            }
        })
        setExpoToken(token);
    }

    async function notificarNot(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Bora correr', // nome do app   
                subtitle: 'Sr.eSra.BemEstar', // nome da notificação
                body: '500 metros', // conteudo/mensagem da notificação
            },
            trigger: {
                seconds: 3,
            }
        })
        setExpoToken(token);
    }

    async function nomeDoDispositivo(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Nome do dispositvo', // nome do app   
                subtitle: 'FIFIFIU', // nome da notificação
                body: 'O nome do dispositvo é '+ Device.deviceName + '.', // conteudo/mensagem da notificação
            },
            trigger: {
                seconds: 3,
            }
        })
        setExpoToken(token);
    }

    const ultimaNotificacao = Notifications.useLastNotificationResponse();

    async function exibirNotificacao(){
        alert(ultimaNotificacao.notification.request.content.body);
    }

    // async function lerNotificacao(){
    //     const notification = await Notifications.getLastNotificationResponseAsync();
    //     console.log(notification);
    // }

    useEffect(() => {
        if (ultimaNotificacao?.notification?.request?.content?.body == "Tome cuidado") {
            navigation.navigate('Home');
        }
    }, [ultimaNotificacao])

    useEffect(() => {
        exibirNotificacao();
    }, [ultimaNotificacao])



    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Informações do Aparelho'
                />
            </View>
            
            <View
                style={styles.center}
            >
                <Text styles={styles.txt}>Expo Token: {expoToken}</Text>

                <View style={styles.infoBox}>
                <Button title='Enviar Notificação'
                        onPress={ async () => notificarExpo()}   />
                </View>
                <View style={styles.infoBox}>
                    <Button title='Ler ultima notificação clicada'
                        onPress={async () => exibirNotificacao()}/>
                </View>
                <View style={styles.infoBox}>
                    <Button title='Ler notificações não clicadas'/>
                </View>
                <View style={styles.infoBox}>
                    <Button title='teste'
                            onPress={async () => notificarNot()}/>
                </View>

                <View style={styles.infoBox}>
                    <Button title='nome do cell'
                            onPress={async () => nomeDoDispositivo()}/>
                </View>

                <View style={styles.infoBox}>
                    <Button title='Agendar Notificação de 7 segundos'
                            onPress={async () => notificarScheduled()}/>
                </View>

            </View>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default Notify;
