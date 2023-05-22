import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default function Header({ title }){
    return(
        <View style={styles.header}>
            <Text style={styles.headerTextStyle}>
                { title }
            </Text>
        </View>
    )
}