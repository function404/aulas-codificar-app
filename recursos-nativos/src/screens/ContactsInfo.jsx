import * as Contacts from 'expo-contacts';
import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, TextInput } from 'react-native';

import styles from '../utils/style';

import Header from '../components/header';
import Footer from '../components/footer';
import Items from '../components/Items';



const ContatosInfo = () => {
    const [contatos, setContatos] = useState();
    const [filtroContato, setFiltroContato] = useState([]);

    const filtrarContanto = (searchText) => {
        const filtered = contatos.filter((c) => {
            const name = `${c.firstName}`.toLowerCase();
            const phone = `${c.phoneNumbers[0].number}`.toLowerCase();
            
            return name.includes(searchText.toLowerCase()) || phone.includes(searchText.toLowerCase());
        });
        
        setFiltroContato(filtered);
    };

    useEffect(() => {
        const loadContacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContatos(data);
                    setFiltroContato(data);
                }
            }
        };

        loadContacts();
    }, []);


    return(
        <View style={styles.container}>
        <View>
            <Header
                title='Informações do Aparelho'
            />
        </View>
        <View style={styles.infoBox}>
        <TextInput placeholder='Search' onChangeText={filtrarContanto} style={{ paddingHorizontal: 5, paddingVertical: 2, borderBottomColor: '#000' }} />
                {contatos ?
                    <FlatList
                        data={filtroContato}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Items 
                                item = {item}
                            />
                        )}
                    />
                :
                    <>
                        <Text style={styles.content}>Não foi possivel carregar os itens.</Text>
                    </>
                }

        </View>

        <View>
            <Footer/>
        </View>

    </View>
    )
}

export default ContatosInfo;