import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { EntradaStyles } from '../Styles/EntradaStyles.ts';

const EntradaScreen = ({navigation}) => {

    return (
        <View style={EntradaStyles.containerMaster}>
            <Image
                style={EntradaStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <Image
                style={EntradaStyles.logo}
                source={require('../Assets/logo.png')}
            />
            <TouchableOpacity
                style={EntradaStyles.cadastrarButton}
                onPress={() =>
                    navigation.navigate('CadastroScreen')
                }>
                <Text style={EntradaStyles.cadastrarText}>CADASTRE-SE</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('LoginScreen')
                }>
                <Text style={EntradaStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export { EntradaScreen };
