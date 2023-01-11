import { Image, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <TouchableHighlight onPress={() => console.warn('patience je serais fonctionnel prochainement')}>
        <Image source={require('../../assets/images/menu.png')} style={styles.menu} />
      </TouchableHighlight>
    </View>
  );
}
