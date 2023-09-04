import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
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
    infoBox: {
        marginTop: 15,
        marginHorizontal: 15,
    },
});

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
