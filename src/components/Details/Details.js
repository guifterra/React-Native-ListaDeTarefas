import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Details({ route, navigation }) {
    
    const allDetails = route.params;
    
    return (
        <View style={styles.container}>
            <Text>Olá Details! { allDetails.titulo } </Text>
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