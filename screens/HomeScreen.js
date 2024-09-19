import { validatePathConfig } from "@react-navigation/native";
import React from "react"; 
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"; 
import { useNavigation } from "@react-navigation/native";

const HomeScreen =() => { 

    const navigation = useNavigation();

    return (
        <View> 
            <Text  
                style= {{
                fontSize: 30, 
                 textAlign: "center",
                 marginTop: "20%"
                
                }}
        
        
             >Home Screen </Text>  
             <TouchableOpacity  
                onPress={() => navigation.navigate("Stack")}
                style={{ 
                    backgroundColor: "purple", 
                    padding: 10, 
                    marginTop: "20%", 
                    with: "50%", 
                    alignSelf: "center", 
                    borderRadius: 10,
                }} 
             >  
             <Text  
                 style= {{
                      fontSize: 15, 
                      textAlign: "center",
                      color: "white"
            
                    }}
             >Go to Stack Screen </Text>

             </TouchableOpacity>
        </View>

     );
} 
export default HomeScreen;