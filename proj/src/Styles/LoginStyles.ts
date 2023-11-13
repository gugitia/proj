import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginStyles = StyleSheet.create({

    //CONTAINERS
    containerMaster: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginTop: screenHeight * 0.05,
    },
    body: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.77,
        backgroundColor: '#FFC004',
        marginTop: screenHeight * 0.04,
        borderRadius: screenWidth * 0.1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: screenWidth * 0.75,
        height: screenHeight * 0.05,
    },
    // CONTAINERS

    //BUTTONS
    loginButton: {
        backgroundColor: '#AB8103',
        width: screenWidth * 0.6,
        height: screenHeight * 0.07,
        borderRadius: screenWidth * 0.07,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    // BUTTONS
    
    //INPUTS
    input: {
        flex: 1,
        color: 'white',
        position: 'absolute',
        left: screenWidth * 0.14,
        width: screenWidth * 0.6,
        fontSize: screenHeight * 0.025,
        fontFamily: 'LilitaOne',
    },
    // INPUTS

    //TEXTS
    titleText: {
        color: 'white',
        fontSize: screenHeight * 0.04,
        fontFamily: 'LilitaOne',
        top: screenHeight * 0.01,
    },
    credencialsTitle: {
        color: '#AB8103',
        fontSize: screenHeight * 0.025,
        fontFamily: 'LilitaOne',
        marginTop: screenHeight * 0.05,
        marginLeft: screenWidth * 0.06,
    },
    dontHaveAccountText: {
        color: '#AB8103',
        fontFamily: 'LilitaOne',
        fontSize: screenHeight * 0.022, 
        textAlign: 'center',
        marginTop: screenHeight * 0.35,
        marginBottom: screenHeight *0.01,
    },
    loginText: {
        color: 'white',
        fontFamily: 'LilitaOne',
        fontSize: screenHeight * 0.035,
        textAlign: 'center',
    },
    // TEXTS

    //ICONS
    arrowIcon: {
        right: screenWidth * 0.23,
        position: 'absolute',
        fontSize: screenHeight * 0.07,
    },
    emailIcon: {
        left: screenWidth * 0.055,
        fontSize: screenHeight * 0.04,
    },
    lockIcon: {
        left: screenWidth * 0.06,
        fontSize: screenHeight * 0.04,
    },
    // ICONS

    //MISCELLANEOUS
    background: {
        position: 'absolute',
        width: screenWidth * 1,
        height: screenHeight * 1,
    },
    underline: {
        borderBottomColor: '#AB8103',
        borderBottomWidth: screenWidth * 0.01,
        width: screenWidth * 0.68,
        alignSelf: 'center',
    },
    // MISCELLANEOUS

});

export { LoginStyles };