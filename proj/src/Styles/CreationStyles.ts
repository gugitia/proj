import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CreationStyles = StyleSheet.create({

  //CONTAINERS
  containerMaster: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151B33',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: screenHeight * 0.05,
  },
  body: {
    flex: 0.75,
  },
  footer: {
    flex: 0.15,
  },
  userMessageContainer: {
    backgroundColor: '#1E2748',
    height: screenHeight * 0.06,
    justifyContent: 'center'
  },
  botMessageContainer: {
    backgroundColor: '#151B33',
    marginVertical: screenHeight * 0.02,
    justifyContent: 'center',
  },
  // CONTAINERS

  // INPUTS
  messageBar: {
    borderColor: '#BFC4D9',
    borderWidth: screenWidth * 0.007,
    borderRadius: screenWidth * 0.03,
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    justifyContent: 'center',
    marginTop: screenHeight * 0.03,
  },
  input: {
    flex: 1,
    color: 'white',
    position: 'absolute',
    left: screenWidth * 0.01,
    width: screenWidth * 0.65,
    fontSize: screenHeight * 0.025,
    fontFamily: 'LilitaOne',
  },
  //INPUTS
  
  // TEXTS
  botMessage: {
    color: '#BFC4D9',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.025,
    marginHorizontal: screenWidth * 0.05,
  },
  userMessage: {
    color: '#BFC4D9',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.025,
    marginHorizontal: screenWidth * 0.05,
  },
  //TEXTS

  // ICON
  sendIcon: {
    left: screenWidth * 0.79,
    fontSize: screenHeight * 0.04,
  },
  arrowIcon: {
    position: 'absolute',
    right: screenWidth * 0.35,
    fontSize: screenHeight * 0.06,
  },
  //ICON

  // MISCELLANEOUS
  logoTranslucid: {
    width: screenWidth * 1,
    height: screenHeight * 0.25,
    marginBottom: screenHeight * 0.03,
  },
  //MISCELLANEOUS
});

export { CreationStyles };