import AsyncStorage from '@react-native-async-storage/async-storage';
import { enviarMensagemAPI } from './ApiService.js';

// Criacao de um Map para armazenar os chatIds
const chatIdMap = new Map();

// Logistica para gerar id para o chat
const generateChatId = () => {
    const chatIdLength = 8;
    let chatId = '';

    do {
        for (let i = 0; i < chatIdLength; i++) {
            chatId += Math.floor(Math.random() * 10);
        }
    } while (chatIdMap.has(chatId));

    chatIdMap.set(chatId, true);
    return chatId;
};

// Remove o último chatId do mapa
const removeLastChatId = () => {
    const chatIdsArray = Array.from(chatIdMap.keys());

    if (chatIdsArray.length > 0) {
        const lastKey = chatIdsArray[chatIdsArray.length - 1];
        chatIdMap.delete(lastKey);
        /*
        console.log(`FUNCTION: handleNewStoryPress = Último chatId removido: ${lastKey}`, chatIdMap);
        */
    } else {
        console.log('O Map está vazio.');
    }
    
};

// Obtém as mensagens armazenadas para um determinado chatId
const getStoredMessages = async (chatId) => {
    try {
        const key = `chatMessages_${chatId}`;
        const storedMessages = await AsyncStorage.getItem(key);
        return storedMessages !== null ? JSON.parse(storedMessages) : [];
    } catch (error) {
        console.error('Erro ao recuperar as mensagens: ', error);
        return [];
    }
};

// Envia uma mensagem, atualiza o estado e salva as mensagens no AsyncStorage
const sendMessage = async (chatId, message, historyMessages, setHistoryMessages, setMessage) => {
    if (message.trim() !== '') {
        const newMessage = { text: message, fromUser: true };
        const updatedMessages = [...historyMessages, newMessage];
        setHistoryMessages(updatedMessages);
        setMessage('');
        /*
        console.log("FUNCTION: sendMessage = ChatId: ", chatId)
        */
        try {
            const apiMessage = await enviarMensagemAPI(message);
            const responseData = apiMessage.gptResponse;
            const parts = responseData.split('\n');
            const response = parts[2].trim();
            const updatedMessagesWithAPIResponse = [...updatedMessages, { text: response, fromUser: false }];

            const key = `chatMessages_${chatId}`;

            setHistoryMessages(updatedMessagesWithAPIResponse);
            await AsyncStorage.setItem(key, JSON.stringify(updatedMessagesWithAPIResponse));
        } catch (error) {
            console.error('Erro ao enviar ou salvar as mensagens: ', error);
        }
    }
};

// Carrega as mensagens armazenadas para um determinado chatId
const loadStoredMessages = async (chatId, setHistoryMessages) => {
    const storedMessages = await getStoredMessages(chatId);
    setHistoryMessages(storedMessages);
    /*
    console.log(`FUNCTION: loadStoredMessages = Mensagens armazenadas para o chatId ${chatId}:`, storedMessages);
    */
};

// Realiza a limpeza quando o componente é desmontado
const cleanUpOnUnmount = (historyMessagesRef) => {
    /*
    console.log("FUNCTION: cleanUpOnUnmount = comprimento de historyMessagesRef: ", historyMessagesRef.current.length);
    */
    if (historyMessagesRef.current.length === 0) {
        removeLastChatId();
    }
};
  
export { chatIdMap, generateChatId, sendMessage, loadStoredMessages, cleanUpOnUnmount };