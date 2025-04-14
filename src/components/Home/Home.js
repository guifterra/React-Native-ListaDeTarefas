import { View, Text, StyleSheet, Button, TouchableOpacity, Icon, Image } from "react-native";
import React from "react";

export default function Home({ navigation }) {
    
    const allDetails = [
        {
            titulo     : "Primeiro Titulo",
            descricao  : "Primeira Descricao",
            dataFinal  : "Data termino",
            status     : "A fazer / Fazendo / Feito",
            prioridade : "Baixa / Média / Alta",
        },
    ]
    
    return (
        <View style={styles.container}>
            <Text>Lista de Tarefas</Text>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Form") }} style={styles.btn}>
                <View style={styles.flex}>
                    <Text style={styles.textBtn}>Adicionar</Text>
                </View>
            </TouchableOpacity>
            <Button title="Ir para Detalhes" onPress={ () => {
                navigation.navigate("Details", allDetails[0]);
            } } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    iconPlus: {
        height: 33,
        width: 33,
        marginRight: 5,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#000",
        backgroundColor: "#111",
        boxShadow: "0px 0px 5px #222",
        marginVertical: 10,
    },
    textBtn: {
        display: "flex",
        flex: 1,
        fontSize: 15,
        textTransform: "uppercase",
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF"
    }
});