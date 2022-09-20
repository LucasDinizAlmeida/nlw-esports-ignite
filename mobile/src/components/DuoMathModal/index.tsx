import { View, Modal, ModalProps, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface Props extends ModalProps {
  discord: string,
  closeModal: () => void
}

export function DuoMathModal({ discord, closeModal, ...rest }: Props) {

  const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscordClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    setIsCopping(false)
  }

  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >

      <View style={styles.container}>
        <View style={styles.content}>

          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <MaterialIcons
              name='close'
              size={22}
              color={THEME.COLORS.CAPTION_400}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            weight="bold"
            color={THEME.COLORS.SUCCESS}
          />

          <Heading
            style={styles.headingStyle}
            title='Let’s play!'
            subTitle='Agora é só começar a jogar!'
          />

          <Text style={styles.discordText}>
            Adicione no Discord
          </Text>

          <TouchableOpacity style={styles.discordContainer} onPress={handleCopyDiscordClipboard}>
            <Text style={styles.discordTitle}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    </Modal>
  );
}