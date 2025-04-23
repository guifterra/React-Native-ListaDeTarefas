import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ route }) {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{tarefa.titulo}</Text>
      <Text>{tarefa.descricao}</Text>
      <Text>Data: {tarefa.data}</Text>
      <Text>Status: {tarefa.status}</Text>
      <Text>Prioridade: {tarefa.prioridade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
