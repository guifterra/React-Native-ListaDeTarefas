import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ListaContext } from '../../context/ListaContext';

export default function Home({ navigation }) {
  const { tarefas, excluirTarefa } = useContext(ListaContext);

  return (
    <View style={styles.container}>
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('Form')} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tarefa}
            onPress={() => navigation.navigate('Details', { tarefa: item })}
          >
            <Text style={styles.titulo}>{item.titulo}</Text>
            <View style={styles.botoes}>
              <Button title="Editar" onPress={() => navigation.navigate('Form', { tarefa: item })} />
              <Button title="Excluir" color="red" onPress={() => excluirTarefa(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  tarefa: {
    backgroundColor: '#ddd',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
