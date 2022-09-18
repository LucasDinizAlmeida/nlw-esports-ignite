import React from 'react';
import { ColorValue, Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  label: string,
  value: string,
  color?: ColorValue
}

export function DuoInfo({ label, value, color = 'white' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {label}
      </Text>
      <Text
        style={[styles.subTitle, { color }]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}