import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { LoginStyles } from '../Styles/LoginStyles.ts';
import { autenticarUsuario } from '../Components/ApiService.js';


const LoginScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={LoginStyles.containerMaster}>
            <Image
                style={LoginStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <View style={LoginStyles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()
                    }>
                    <FontAwesome
                        style={LoginStyles.arrowIcon}
                        name='arrow-left'
                        color='white'>
                    </FontAwesome>
                </TouchableOpacity>
                <Text style={LoginStyles.titleText}>LOGIN</Text>
            </View>
            <View style={LoginStyles.body}>
                <Text style={LoginStyles.credencialsTitle}>EMAIL</Text>
                <View style={LoginStyles.inputContainer}>
                    <MaterialCommunityIcons
                        style={LoginStyles.emailIcon}
                        name='email'
                        color='#AB8103'>
                    </MaterialCommunityIcons>
                    <TextInput
                        style={LoginStyles.input}
                        onChangeText={(text) =>
                            setEmail(text)
                        }
                        value={email} placeholder='Digite seu email'
                        placeholderTextColor="#AB8103"
                        keyboardType='email-address'>
                    </TextInput>
                </View>
                <View style={LoginStyles.underline}></View>
                <Text style={LoginStyles.credencialsTitle}>SENHA</Text>
                <View style={LoginStyles.inputContainer}>
                    <FontAwesome
                        style={LoginStyles.lockIcon}
                        name='lock'
                        color='#AB8103'>
                    </FontAwesome>
                    <TextInput
                        style={LoginStyles.input}
                        onChangeText={(text) =>
                            setSenha(text)
                        }
                        value={senha} placeholder='Digite sua senha'
                        placeholderTextColor="#AB8103"
                        keyboardType='default'
                        secureTextEntry={true}>
                    </TextInput>
                </View>
                <View style={LoginStyles.underline}></View>
                <TouchableWithoutFeedback
                    onPress={() =>
                        navigation.navigate('CadastroScreen')
                    }>
                    <Text style={LoginStyles.dontHaveAccountText}>Não tenho uma conta</Text>
                </TouchableWithoutFeedback>
                <TouchableOpacity
                    style={LoginStyles.loginButton}
                    onPress={() =>
                        navigation.navigate('MenuScreen')
                    }>
                    <Text style={LoginStyles.loginText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

export { LoginScreen };