import { ReactNode } from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';
import backgroundImg from '../../assets/background-galaxy.png'

interface Props {
  children: ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      defaultSource={backgroundImg}
      source={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}