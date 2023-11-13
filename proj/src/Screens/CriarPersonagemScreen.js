import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuStyles } from '../Styles/MenuStyles';
import { criarPersonagem } from '../Components/ApiService';
import { useNavigation } from '@react-navigation/native';

const CriarPersonagemScreen = () => {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [classe, setClasse] = useState('');
    const [aviso, setAviso] = useState('');

    const navigation = useNavigation();

    const handleCreateCharacter = async () => {
        if (!nome || !raca || !classe) {
            setAviso('Por favor, preencha todos os campos.');
            return; // Impede a criação se algum campo estiver vazio
        }

        try {
            const response = await criarPersonagem(nome, raca, classe);
            console.log('Personagem criado:', response);

            // Navega para a tela DetalhesPersonagemScreen com os dados do personagem como parâmetro
            navigation.navigate('DetalhesPersonagemScreen', { personagem: response });
        } catch (error) {
            console.error('Erro ao criar personagem:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={MenuStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <Text style={styles.title}>Criação de Personagem</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Personagem"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Raça"
                value={raca}
                onChangeText={(text) => setRaca(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Classe"
                value={classe}
                onChangeText={(text) => setClasse(text)}
            />

            <TouchableOpacity
                style={styles.createButton}
                onPress={() => {
                    handleCreateCharacter();
                }}
            >
                <Text style={styles.createButtonText}>Criar Personagem</Text>
            </TouchableOpacity>

            {aviso !== '' && <Text style={styles.aviso}>{aviso}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1c2a3a', // Fundo cinza azulado meio escuro
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 16,
        paddingLeft: 8,
    },
    createButton: {
        backgroundColor: '#FFC004', // Cor verde para o botão
        padding: 10,
        borderRadius: 5,
    },
    createButtonText: {
        color: 'black',
        textAlign: 'center',
    },
    aviso: {
        color: 'red',
        marginTop: 8,
        textAlign: 'center',
    },
});

export { CriarPersonagemScreen };
