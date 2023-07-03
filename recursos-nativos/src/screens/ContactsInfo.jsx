import * as Contacts from 'expo-contacts';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Items from '../components/Items';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

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
});


const ContatosInfo = () => {
    const [contatos, setContatos] = useState();

    async function carregarContatos(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ]
        })
        setContatos(data);
        console.log(data);
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    await carregarContatos();
                }
            })();
        }, [])
    );

    return(
        <View style={styles.container}>
        <View>
            <Header
                title='Informações do Aparelho'
            />
        </View>
        
        <View style={styles.infoBox}>
            {
                contatos
                   ? <FlatList
                       style={{gap: 10, flex: 1}} 
                       data={ contatos }
                       keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <Items
                            item={item}/>
                        )}
                       />
                   : <Text>Não foi possivel carregar os contatos</Text>
            }
        </View>

        <View>
            <Footer/>
        </View>

    </View>
    )
}

export default ContatosInfo;