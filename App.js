import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Video } from 'expo-av'; 

const Stack = createNativeStackNavigator();

const Texto = ({ navigation }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: 'https://ih1.redbubble.net/image.4275014176.3681/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' }} 
      style={styles.image} 
    />
    <Text style={styles.text}>Hola, bienvenido al inicio</Text>
    <Button title="Siguiente" onPress={() => navigation.navigate('Video')} />
  </View>
);

const VideoScreen = ({ navigation }) => (
  <View style={styles.container}>
  <Text style={styles.text}>Vista 2 - Video</Text>
  <Video
    source={require('./assets/videoplayback.mp4')} // Asegúrate de que el archivo esté en la carpeta assets
    style={styles.video}
    useNativeControls
    resizeMode="contain"
    isLooping
    shouldPlay
  />
 
    <Button title="Anterior" onPress={() => navigation.navigate('Texto')} />
    <Button title="Siguiente" onPress={() => navigation.navigate('Botones')} />
  </View>
);

const Botones = ({ navigation }) => {
  const [backgroundColor, setBackgroundColor] = useState('#f4f4f4');

  const changeColor = (index) => {
    const colors = ['#AA5739', '#33AB57', '#1257AA', '#B0A33A'];
    setBackgroundColor(colors[index % colors.length]);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Vista 3 - Botones</Text>
      {[0, 1, 2, 3].map((index) => (
        <Button
          key={index}
          title={`Botón ${index + 1}`}
          onPress={() => changeColor(index)}
        />
      ))}
      <Button title="Anterior" onPress={() => navigation.navigate('Video')} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Texto">
        <Stack.Screen name="Texto" component={Texto} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Botones" component={Botones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  video: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'purple',
    marginBottom: 20,
  },
});
