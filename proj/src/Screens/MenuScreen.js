// IMPORTS DO REACT
import React, { useState, useCallback } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import { useFocusEffect } from '@react-navigation/native';

// IMPORTS DO PROPRIO PROJETO
import { MenuStyles } from '../Styles/MenuStyles.ts';
import { chatIdMap, generateChatId } from '../Components/ChatManager.js';

const MenuScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [chatIdArray, setChatIdArray] = useState(Array.from(chatIdMap.keys()));
    const filteredChatIdArray = chatIdArray.filter((chatId) => chatId.includes(search));

    // Atualiza o array ao entrar na tela
    useFocusEffect(
        useCallback(() => {
            setChatIdArray(Array.from(chatIdMap.keys()));
        }, [])
    );
    
    // Gera um ChatId e redireciona para a tela CreationScreen
    const handleNewStoryPress = () => {
        const emptyHistoryMessages = [];
        let chatId = generateChatId();
        navigation.navigate('CreationScreen', { chatId, historyMessages: emptyHistoryMessages });
        /*
        console.log("FUNCTION: handleNewStoryPress = ChatId:", chatId, "| ChatIdMap", chatIdMap);
        */
    };

    // Navega para uma historico com um respectivo Id
    const handleStoriesPress = (chatId) => {
        navigation.navigate('CreationScreen', { chatId });
        /*
        console.log("FUNCTION: handleNewStoryPress = ChatId:", chatId);
        */
    };

    // Funcao que, ao ser clicada, alerta a exclusao de uma historia
    const handleTrashIconPress = (chatId) => {
        Alert.alert(
          'Confirmação',
          'Tem certeza que deseja excluir esta história?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Confirmar',
                    onPress: () => {
                        chatIdMap.delete(chatId);
                        setChatIdArray(Array.from(chatIdMap.keys()));
                    },
                },
            ],
            { cancelable: false }
            );
        };

    // Renderizacao de historias
    const StoryList = ({ stories, onPressStory, onPressTrashIcon }) => {
        return (
            <View>
                {stories.map((chatId) => (
                <View style={MenuStyles.storiesContainer} key={chatId}>
                    <TouchableOpacity
                        style={MenuStyles.storiesButton}
                        onPress={() => onPressStory(chatId)}>
                        <Text style={MenuStyles.storiesText}>{chatId}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onPressTrashIcon(chatId)}>
                    <Fontisto
                        style={MenuStyles.trashIcon}
                        name='trash'
                        color='#E13737'
                    />
                    </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      };

    return (
        <View style={MenuStyles.containerMaster}>
            <Image
                style={MenuStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <Image
                style={MenuStyles.logo}
                source={require('../Assets/logo.png')}
            />
            <TouchableOpacity
                style={MenuStyles.newStoryButton}
                onPress={() =>
                    navigation.navigate('PersonagensScreen')
                }>
                <Text style={MenuStyles.newStoryText}>PERSONAGENS</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={MenuStyles.newStoryButton}
                onPress={handleNewStoryPress}>
                <Text style={MenuStyles.newStoryText}>NOVA HISTÓRIA</Text>
            </TouchableOpacity>

            <View style={MenuStyles.searchBar}>
                <Fontisto
                    style={MenuStyles.searchIcon}
                    name='search'
                    color='#BFC4D9'>
                </Fontisto>
                <TextInput
                    style={MenuStyles.input}
                    onChangeText={(text) =>
                        setSearch(text)
                    }
                    value={search}
                    placeholder='Pesquisar'
                    placeholderTextColor="#BFC4D9"
                    keyboardType='default'>
                </TextInput>
            </View>
            <ScrollView>
                <StoryList
                    stories={filteredChatIdArray}
                    onPressStory={handleStoriesPress}
                    onPressTrashIcon={handleTrashIconPress}
                />
            </ScrollView>
        </View>
    );
};

export { MenuScreen };