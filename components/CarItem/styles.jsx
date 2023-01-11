import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: '#5C5E62',


  },
  buttonContainer:{
    position: 'absolute',
    width: '100%',
    bottom: 50
  }
});

export default styles;
