import React from "react"; 
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"; 
import { useNavigation } from "@react-navigation/native";
import CalculatorScreen from "./CalculadoraScreen";

const newsArticles = [
    {
        id: 1,
        title: "Nueva sensación en las redes sociales",
        image: "https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839MPA4459PT28D333242257W9892H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/pato-bebe-con-cuchillo-patos-pollitos-patitos-divertidos-pegatina.jpg",
        description: "La nueva imagen que está causando furor.",
    },
    {
        id: 2,
        title: "Se reporta nuevo asalto en la ciudad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fAk2ETSRmK0jnhZzcteIa9VM6HOtHndajg&s",
        description: "Con este nuevo asalto ya son 15 en este mes",
    },
];

const HomeScreen = () => { 
    const navigation = useNavigation();

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Últimas Noticias</Text>  
            <ScrollView>
                {newsArticles.map(article => (
                    <View key={article.id} style={styles.articleContainer}>
                        <Image source={{ uri: article.image }} style={styles.image} />
                        <Text style={styles.articleTitle}>{article.title}</Text>
                        <Text style={styles.articleDescription}>{article.description}</Text>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity  
                onPress={() => navigation.navigate("Calculator")}
                style={styles.button} 
            >  
                <Text style={styles.buttonText}>Ir a Calculadora</Text>
            </TouchableOpacity>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 30, 
        textAlign: "center",
        marginBottom: 20,
    },
    articleContainer: {
        marginBottom: 30,
        backgroundColor: "white",
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    articleDescription: {
        fontSize: 14,
        padding: 10,
        color: 'gray',
    },
    button: {
        backgroundColor: "purple", 
        padding: 10, 
        width: "50%", 
        alignSelf: "center", 
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 15, 
        textAlign: "center",
        color: "white",
    },
});

export default HomeScreen;