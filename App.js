// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './screens/HomeScreen'; // Ajusta la ruta si es necesario
import CalculatorScreen from './screens/CalculadoraScreen';// Asegúrate de que este archivo exista

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Calculator" component={CalculatorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
