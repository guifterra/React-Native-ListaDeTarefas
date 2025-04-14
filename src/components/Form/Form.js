import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Form({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text>Olá Form!</Text>
            <Button title="Voltar" onPress={ () => {
                navigation.navigate("Home");
            } } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});