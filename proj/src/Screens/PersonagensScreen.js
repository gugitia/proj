// Exemplo de PersonagensScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ListComponent from '../Components/ListComponent';
import { MenuStyles } from '../Styles/MenuStyles';

const PersonagensScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={MenuStyles.background}
        source={require('../Assets/rpg_background.png')}
        blurRadius={5}
      />
      <TouchableOpacity
        style={stylesButton.buttonContainer}
        onPress={() =>
          navigation.navigate('CriarPersonagemScreen')
        }>
        <Text style={stylesButton.buttonText}>CRIAR NOVO</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20, color: 'white' }}>
        Lista de Personagens
      </Text>
      <ListComponent navigation={navigation}/>
    </View>
  );
};

const stylesButton = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFC004',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centralizar o texto
  },
});


export { PersonagensScreen };