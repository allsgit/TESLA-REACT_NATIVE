import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        snapToAlignement={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
}
