import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ListaContext } from '../../context/ListaContext';

export default function Form({ navigation, route }) {
  const { adicionarTarefa, editarTarefa } = useContext(ListaContext);
  const tarefaEditada = route.params?.tarefa;

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (tarefaEditada) {
      setTitulo(tarefaEditada.titulo);
      setDescricao(tarefaEditada.descricao);
      setData(tarefaEditada.data);
      setPrioridade(tarefaEditada.prioridade);
      setStatus(tarefaEditada.status);
    }
  }, [tarefaEditada]);

  const salvar = () => {
    const novaTarefa = {
      id: tarefaEditada ? tarefaEditada.id : Date.now(),
      titulo,
      descricao,
      data,
      prioridade,
      status,
    };

    if (tarefaEditada) {
      editarTarefa(tarefaEditada.id, novaTarefa);
    } else {
      adicionarTarefa(novaTarefa);
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título" style={styles.input} value={titulo} onChangeText={setTitulo} />
      <TextInput placeholder="Descrição" style={styles.input} value={descricao} onChangeText={setDescricao} />
      <TextInput placeholder="Data" style={styles.input} value={data} onChangeText={setData} />
      <TextInput placeholder="Prioridade" style={styles.input} value={prioridade} onChangeText={setPrioridade} />
      <TextInput placeholder="Status" style={styles.input} value={status} onChangeText={setStatus} />

      <Button title={tarefaEditada ? 'Salvar Alterações' : 'Adicionar'} onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
});
