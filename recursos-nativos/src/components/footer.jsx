import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#888',
        paddingHorizontal: 25,
        padding: 20,
    }
});

export default function Footer() {
return(
        <View style={styles.footer}>
            <Button 
                title='Sair'
            />
        </View>
    )
}