import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { ListaContext } from "../../context/ListaContext";

const opcoesStatus = ['A fazer', 'Em andamento', 'Concluído'];
const opcoesPrioridade = ['Baixa', 'Média', 'Alta'];

export default function Form({ navigation }) {
  const {
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
  } = useContext(ListaContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTipo, setModalTipo] = useState(null); // 'status' ou 'prioridade'

  const abrirModal = (tipo) => {
    setModalTipo(tipo);
    setModalVisible(true);
  };

  const selecionarOpcao = (opcao) => {
    if (modalTipo === 'status') {
      setStatus(opcao);
    } else {
      setPrioridade(opcao);
    }
    setModalVisible(false);
  };

  const salvar = () => {
    adicionarOuEditarItem();
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Data final (YYYY-MM-DD)"
        value={dataFinal}
        onChangeText={setDataFinal}
      />

      <TouchableOpacity onPress={() => abrirModal('status')} style={styles.selector}>
        <Text style={styles.selectorText}>Status: {status}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => abrirModal('prioridade')} style={styles.selector}>
        <Text style={styles.selectorText}>Prioridade: {prioridade}</Text>
      </TouchableOpacity>

      <Button title="Salvar Tarefa" onPress={salvar} />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Selecionar {modalTipo}</Text>
            <FlatList
              data={modalTipo === 'status' ? opcoesStatus : opcoesPrioridade}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => selecionarOpcao(item)}
                  style={styles.modalItem}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  selector: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectorText: {
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
  }
});
