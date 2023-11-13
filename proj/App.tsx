import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EntradaScreen } from './src/Screens/EntradaScreen.js';
import { CadastroScreen } from './src/Screens/CadastroScreen.js';
import { LoginScreen } from './src/Screens/LoginScreen.js';
import { MenuScreen } from './src/Screens/MenuScreen.js';
import { CreationScreen } from './src/Screens/CreationScreen.js';
import { PersonagensScreen } from './src/Screens/PersonagensScreen.js';
import { CriarPersonagemScreen } from './src/Screens/CriarPersonagemScreen.js';
import { DetalhesPersonagemScreen } from './src/Screens/DetalhesPersonagemScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="EntradaScreen" component={EntradaScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CadastroScreen" component={CadastroScreen} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CreationScreen" component={CreationScreen} options={{headerShown: false}}/>
                <Stack.Screen name="PersonagensScreen" component={PersonagensScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CriarPersonagemScreen" component={CriarPersonagemScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DetalhesPersonagemScreen" component={DetalhesPersonagemScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default App;
