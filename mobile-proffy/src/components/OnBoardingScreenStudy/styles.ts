import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 350,
    alignItems: 'center',
    backgroundColor: '#8257E5',
  },

  textsContainer: {
    width: width,
    backgroundColor: '#F0F0F7'
  },

  imageBackground: {
    position: 'absolute',
    marginTop: height * 0.05,
    resizeMode: 'contain',
  },

  imageIcon: {
    marginTop: height * 0.15,
  },

  textOnBoarding: {
    marginTop: height * 0.07,
    paddingLeft: 40,
    fontFamily: 'Archivo_400Regular',
    fontSize: 40,
    lineHeight: 44,
    color: 'rgba(100, 87, 137, 0.16)',
    paddingBottom: 20,
  },

  aboutText: {
    paddingLeft: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    lineHeight: 34,
    color: '#6A6180',
    width: 250,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },

  pages: {
    flexDirection: 'row',
    marginLeft: 20,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8257E5'
  },

  text: {
    paddingRight: 25,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 34,
    color: '#6A6180',
  },
})

export default styles