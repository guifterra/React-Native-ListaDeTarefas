import React, { createContext, useState } from 'react';

// Criando um contexto chamado CounterContext
export const ListaContext = createContext();

// Esse componente vai fornecer os dados do contador para os outros
export function ListaProvider({ children }) {

  const [myList, setMyList] = useState([
    {
      id: 1,
      titulo: 'Comprar leite',
      descricao: 'Comprar 2 litros de leite',
      dataFinal: '2025-04-15',
      status: 'A fazer',
      prioridade: 'Média',
    },
    {
      id: 2,
      titulo: 'Estudar React',
      descricao: 'Revisar componentes e hooks',
      dataFinal: '2025-04-20',
      status: 'A fazer',
      prioridade: 'Alta',
    },
    {
      id: 3,
      titulo: 'Fazer compras',
      descricao: 'Comprar itens para o almoço',
      dataFinal: '2025-04-16',
      status: 'A fazer',
      prioridade: 'Baixa',
    }
  ]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [status, setStatus] = useState('A fazer');
  const [prioridade, setPrioridade] = useState('Baixa');
  const [editandoId, setEditandoId] = useState(null);

  const adicionarOuEditarItem = () => {
    const novaTarefa = {
      id: editandoId || Date.now(),
      titulo,
      descricao,
      dataFinal,
      status,
      prioridade
    };

    if (editandoId) {
      setMyList(prev => prev.map(item => item.id === editandoId ? novaTarefa : item));
      setEditandoId(null);
    } else {
      setMyList(prev => [...prev, novaTarefa]);
    }

    // Limpar campos
    setTitulo('');
    setDescricao('');
    setDataFinal('');
    setStatus('A fazer');
    setPrioridade('Baixa');
  };

  const editarItem = (item) => {
    setTitulo(item.titulo);
    setDescricao(item.descricao);
    setDataFinal(item.dataFinal);
    setStatus(item.status);
    setPrioridade(item.prioridade);
    setEditandoId(item.id);
  };

  const excluirItem = (id) => {
    setMyList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ListaContext.Provider
      value={{
        myList,
        setMyList,
        titulo,
        setTitulo,
        descricao,
        setDescricao,
        dataFinal,
        setDataFinal,
        status,
        setStatus,
        prioridade,
        setPrioridade,
        adicionarOuEditarItem,
        editarItem,
        excluirItem,
      }}
    >
      {children}
    </ListaContext.Provider>
  );
}
