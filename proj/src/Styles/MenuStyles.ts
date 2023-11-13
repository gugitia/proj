import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MenuStyles = StyleSheet.create({

  // CONTAINERS
  containerMaster: {
    flex: 1,
    alignItems: 'center',
  },
  storiesContainer: {
    width: screenWidth * 0.9,
  },
  //CONTAINERS

  // BUTTONS
  newStoryButton: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.08,
    backgroundColor: '#FFC004',
    borderRadius: screenWidth * 0.05,
    justifyContent: 'center',
    marginBottom: screenHeight * 0.03,
    marginTop: screenHeight * 0.01,
  },
  storiesButton: {
    width: screenWidth * 0.65,
    height: screenHeight * 0.07,
    left: screenWidth * 0.07,
    backgroundColor: '#BFC4D9',
    borderRadius: screenWidth * 0.05,
    justifyContent: 'center',
    marginBottom: screenHeight * 0.01,
    marginTop: screenHeight * 0.02,
  },
  //BUTTONS

  // INPUTS
  input: {
    flex: 1,
    color: 'white',
    position: 'absolute',
    left: screenWidth * 0.1,
    width: screenWidth * 0.65,
    fontSize: screenHeight * 0.025,
    fontFamily: 'LilitaOne',
  },
  searchBar: {
    borderColor: '#BFC4D9',
    borderWidth: screenWidth * 0.01,
    borderRadius: screenWidth * 0.1,
    width: screenWidth * 0.8,
    height: screenHeight * 0.06,
    justifyContent: 'center',
    marginBottom: screenHeight * 0.02,
  },
  //INPUTS

  // TEXTS
  newStoryText: {
    color: 'white',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.035,
    textAlign: 'center',
  },
  storiesText: {
    color: 'white',
    fontFamily: 'LilitaOne',
    fontSize: screenHeight * 0.03,
    textAlign: 'center',
  },
  //TEXTS

  // ICONS
  searchIcon: {
    left: screenWidth * 0.015,
    top: screenHeight * 0.001,
    fontSize: screenHeight * 0.035,
  },
  trashIcon: {
    position: 'absolute',
    left: screenWidth * 0.76,
    bottom: screenHeight * 0.025,
    fontSize: screenHeight * 0.05,
  },
  //ICONS

  // MISCELLANEOUS
  background: {
    position: 'absolute',
    width: screenWidth * 1,
    height: screenHeight * 1,
  },
  logo: {
    width: screenWidth * 1,
    height: screenHeight * 0.3,
  },
  //MISCELLANEOUS
  
});

export { MenuStyles };