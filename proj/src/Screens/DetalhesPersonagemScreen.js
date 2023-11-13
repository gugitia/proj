// DetalhesPersonagemScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuStyles } from '../Styles/MenuStyles';
import { apagarPersonagem } from '../Components/ApiService';
import { useNavigation } from '@react-navigation/native';

const DetalhesPersonagemScreen = ({ route }) => {
    const { personagem } = route.params;

    const navigation = useNavigation();

    const apagarPersonagemHandler = async () => {
        await apagarPersonagem(personagem.id);
        navigation.navigate('MenuScreen');
        return;
    }

    return (
        <View style={styles.container}>
            <Image
                style={MenuStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <View style={styles.containerMenu}>
                <TouchableOpacity
                    style={{ backgroundColor: '#FFC004', padding: 10, borderRadius: 5, }}
                    onPress={() =>
                        navigation.navigate('MenuScreen')
                    }>
                    <Text style={MenuStyles.newStoryText}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#FFC004', padding: 10, borderRadius: 5, }}
                    onPress={() => apagarPersonagemHandler()}>
                    <Text style={MenuStyles.newStoryText}>Apagar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{personagem.nome}</Text>
            <Text style={styles.infoText}>{`Raça: ${personagem.raca || 'Não informada'}`}</Text>
            <Text style={styles.infoText}>{`Classe: ${personagem.classe || 'Não informada'}`}</Text>
            <Text style={styles.infoText}>{`História: ${personagem.historiaPersonagem || 'Não informada'}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1c2a3a',
    },
    containerMenu: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
    },
    infoText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8,
    },
});

export { DetalhesPersonagemScreen };
