import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import { ListaContext } from "../../context/ListaContext";

export default function Home({ navigation }) {

  const { myList, editarItem, excluirItem } = useContext(ListaContext);

  const renderItem = ({ item }) => (
    <View style={styles2.itemContainer}>
      <Text style={styles2.titulo}>{item.titulo}</Text>
      <Text style={styles2.descricao}>{item.descricao}</Text>
      <Text style={styles2.details}>Data: {item.dataFinal}</Text>
      <Text style={styles2.details}>Status: {item.status}</Text>
      <Text style={styles2.details}>Prioridade: {item.prioridade}</Text>

      <View style={styles2.buttonRow}>
        <TouchableOpacity
          style={[styles2.button, { backgroundColor: '#007bff' }]}
          onPress={() => {
            editarItem(item);
            navigation.navigate("Form");
          }}
        >
          <Text style={styles2.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles2.button, { backgroundColor: '#dc3545' }]}
          onPress={() => excluirItem(item.id)}
        >
          <Text style={styles2.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function carregarLista() {
    if (myList.length == 0)
      return (
        <Text style={{ textAlign: "center" }}>Você não possui Tarefas no momento!</Text>
      );

    return (
      <View style={styles2.container}>
        <FlatList
          data={myList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("Form") }} style={styles.btn}>
        <View style={styles.flex}>
          <Text style={styles.textBtn}>Adicionar</Text>
        </View>
      </TouchableOpacity>
      {carregarLista()}
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
    marginVertical: 10,
    marginBottom: 10,
  },
  textBtn: {
    flex: 1,
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#FFF"
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
