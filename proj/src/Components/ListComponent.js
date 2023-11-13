// Exemplo de ListComponent.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { listaPersonagens } from './ApiService';

const ListComponent = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await listaPersonagens();
      setData(response);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetalhesPersonagemScreen', { personagem: item })}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.raca}</Text>
        <Text style={styles.infoText}>{item.classe}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum personagem cadastrado</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  flatListContainer: {
    paddingHorizontal: 16, // Espaçamento horizontal para evitar colagem nas bordas
    paddingTop: 10, // Espaçamento superior para evitar colagem nas bordas
    paddingBottom: 16, // Espaçamento inferior para evitar colagem nas bordas
    flexGrow: 1,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    backgroundColor: '#1c2a3a', // Fundo cinza azulado meio escuro
    marginBottom: 10, // Adicionando margem na parte inferior
    borderRadius: 10, // Borda redondinha
  },
  nome: {
    fontSize: 20,
    color: 'white', // Fonte branca
    textAlign: 'center', // Alinhar ao centro
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaço uniforme entre os elementos
  },
  infoText: {
    color: 'white', // Fonte branca
    fontSize: 16,
  },
});

export default ListComponent;
