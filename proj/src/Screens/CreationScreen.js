// IMPORTS DO REACT
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// IMPORTS DO PROPRIO PROJETO
import { CreationStyles } from '../Styles/CreationStyles.ts';
import { sendMessage, loadStoredMessages, cleanUpOnUnmount } from '../Components/ChatManager.js';


const CreationScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [historyMessages, setHistoryMessages] = useState([]);
    const historyMessagesRef = useRef(historyMessages);

    const route = useRoute();
    const { params } = route;
    const chatId = params ? params.chatId : null;

    // Manter a referência das mensagens históricas.
    useEffect(() => {
        historyMessagesRef.current = historyMessages;
    }, [historyMessages]);

    // Carregar mensagens armazenadas ao montar o componente.
    useEffect(() => {
        if (chatId !== null && chatId !== undefined) {
            loadStoredMessages(chatId, setHistoryMessages);
        }
    }, [chatId]);

    // Carregar mensagens armazenadas ao montar o componente.
    useEffect(() => {
        return () => {
            cleanUpOnUnmount(historyMessagesRef);
        };
    }, []);

    // Manipula o envio de mensagens quando o usuário pressiona o botão de envio.
    const handleSendMessage = async () => {
        sendMessage(chatId, message, historyMessages, setHistoryMessages, setMessage);
    };

    // Renderiza as mensagens
    const renderMessages = () => {
        return historyMessages.map((item, index) => (
            <View
                key={index}
                style={item.fromUser ? CreationStyles.userMessageContainer : CreationStyles.botMessageContainer}
            >
                <Text
                    style={item.fromUser ? CreationStyles.userMessage : CreationStyles.botMessage}
                >
                    {item.text}
                </Text>
            </View>
        ));
    };

    return (
        <View style={CreationStyles.containerMaster}>
            <View style={CreationStyles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()
                    }>
                    <FontAwesome
                        style={CreationStyles.arrowIcon}
                        name='arrow-left'
                        color='white'>
                    </FontAwesome>
                </TouchableOpacity>
            </View>
            <ScrollView style={CreationStyles.body}>
                <Image
                    style={CreationStyles.logoTranslucid}
                    source={require('../Assets/logo_translucid.png')}>
                </Image>
                <View>
                    {renderMessages()}
                </View>
            </ScrollView>
            <View style={CreationStyles.footer}>
                <View style={CreationStyles.messageBar}>
                    <TextInput
                        style={CreationStyles.input}
                        onChangeText={(text) =>
                            setMessage(text)
                        }
                        value={message} placeholder='Mande uma mensagem'
                        placeholderTextColor="#BFC4D9"
                        keyboardType='default'
                        onSubmitEditing={handleSendMessage}>
                    </TextInput>
                    <TouchableWithoutFeedback onPress={handleSendMessage}>
                        <MaterialCommunityIcons
                            style={CreationStyles.sendIcon}
                            name='send'
                            color='#BFC4D9'>
                        </MaterialCommunityIcons>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
};

export { CreationScreen };