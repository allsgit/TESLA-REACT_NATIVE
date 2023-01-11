import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

export default function StyledButton(props) {
  const type = props.type;

  const { textOnBtn} = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? 'white' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => console.warn('patience je serais fonctionnel prochainement')}>
        <Text style={[styles.btnText, { color: textColor }]}>{textOnBtn}</Text>
      </Pressable>
    </View>
  );
}
