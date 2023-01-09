import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';

export default function CarItem(props) {
  
  const { carImg, carPrice, carTitle } = props;

  return (
    <View style={styles.carContainer}>
      <View>
        <Text>Menu</Text>
      </View>
      <ImageBackground source={carImg} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{carTitle}</Text>
        <View style={{ borderBottomColor: '#171A20', borderBottomWidth: 1 }}>
          <Text style={styles.subtitle}>{carPrice}</Text>
        </View>
      </View>
      <View>
        <StyledButton type="primary" textOnBtn={'Custom Order'} />
        <StyledButton type="secondary" textOnBtn={'View inventory'} />
      </View>
    </View>
  );
}
