// CalculatorScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyKeyboard from '../components/MyKeyboard'; // Asegúrate de que la ruta sea correcta

const CalculatorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
            <MyKeyboard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default CalculatorScreen;
