import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const EntradaStyles = StyleSheet.create({

  //CONTAINERS
  containerMaster: {
    flex: 1,
    alignItems: 'center',
  },
  // CONTAINERS

  //BUTTONS
  cadastrarButton: {
    backgroundColor: '#FFC004',
    width: screenWidth * 0.65,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.08,
    justifyContent: 'center',
    marginTop: screenHeight * 0.01,
  },
  // BUTTONS

  //TEXTS
  cadastrarText: {
    color: 'white',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.035,
    textAlign: 'center',
  },
  loginText: {
    color: '#FFC004',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.035,
    marginTop: screenHeight * 0.03,
  },
  // TEXTS

  //MISCELLANEOUS
  background: {
    position: 'absolute',
    width: screenWidth * 1,
    height: screenHeight * 1,
  },
  logo: {
    width: screenWidth * 1,
    height: screenHeight * 0.5,
  },
  // MISCELLANEOUS
});

export { EntradaStyles };