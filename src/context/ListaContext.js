import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ListaContext = createContext();

export const ListaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      const dadosSalvos = await AsyncStorage.getItem('tarefas');
      if (dadosSalvos) setTarefas(JSON.parse(dadosSalvos));
    };
    carregarDados();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const editarTarefa = (id, novaTarefa) => {
    setTarefas(tarefas.map(t => (t.id === id ? novaTarefa : t)));
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <ListaContext.Provider value={{ tarefas, adicionarTarefa, editarTarefa, excluirTarefa }}>
      {children}
    </ListaContext.Provider>
  );
};
