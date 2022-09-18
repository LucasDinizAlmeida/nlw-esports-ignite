import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DuoCardProps } from '../../screens/Games';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { GameController } from 'phosphor-react-native'

import { styles } from './styles';

interface Props extends DuoCardProps {
  onConnect: () => void

}

export function DuoCard({ name, useVoiceChannel, weekDays, yearsPlaying, hourEnd, hourStart, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={name}
      />

      <DuoInfo
        label='Tempo de jogo'
        value={yearsPlaying === 1 ? `${yearsPlaying} ano` : `${yearsPlaying} anos`}
      />

      <DuoInfo
        label='Disponibilidade'
        value={weekDays.length === 0 ? `1 dia` : `${weekDays.length - 1} anos \u2022 ${hourStart}-${hourEnd}`}
      />

      <DuoInfo
        label='Chamada de aúdio?'
        value={useVoiceChannel ? 'Sim' : 'Não'}
        color={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          size={20}
          color={THEME.COLORS.TEXT}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>

    </View>
  );
}