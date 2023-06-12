import * as Device from 'expo-device';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

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

function DeviceInfo({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Header
                    title='Informações do Aparelho'
                />
            </View>
            <Text style={{textAlign: 'center'}}>Informações do seu Aparelho</Text>

            <Text style={styles.title}>Marca: {Device.brand}</Text>

            <Text style={styles.title}>Nome: {Device.osName}</Text>

            <Text style={styles.title}>Versão: {Device.osVersion}</Text>

            <Text style={styles.title}>Designer: {Device.designName}</Text>

            <Text style={styles.title}>Ano: {Device.deviceYearClass}</Text>

            <Text style={styles.title}>Memória: {Device.totalMemory}</Text>

            <Text style={styles.title}>Modelo: {Device.modelName}</Text>

            <Text style={styles.title}>Fabricante: {Device.manufacturer}</Text>
            
            <Text style={styles.title}>Arquitetura: {Device.supportedCpuArchitectures}</Text>

            <View>
                <Footer/>
            </View>

        </View>
    )
}

export default DeviceInfo;
