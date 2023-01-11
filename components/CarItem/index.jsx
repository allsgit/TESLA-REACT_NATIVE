import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';

export default function CarItem(props) {
  const { carImg, carPrice, carTitle, btnTxtFirst, btnTxtSecond, type } = props.car;

  return (
    <View style={styles.carContainer}>
      <View>
        <Text>Menu</Text>
      </View>
      <ImageBackground source={carImg} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{carTitle}</Text>
        <View style={type === 'car' && { borderBottomColor: '#171A20', borderBottomWidth: 1 }}>
          <Text style={styles.subtitle}>{carPrice}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton type="primary" textOnBtn={btnTxtFirst} />
        <StyledButton type="secondary" textOnBtn={btnTxtSecond} />
      </View>
    </View>
  );
}
