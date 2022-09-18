
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'
import { Background } from '../../components/Background';

import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo-nlw-esports.png'

import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { GameParms } from '../../types/navigation';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react';

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  yearsPlaying: number,
  weekDays: string[],
  useVoiceChannel: boolean
}



export function Games() {

  const [ads, setAds] = useState<DuoCardProps[]>()

  const route = useRoute()
  const game = route.params as GameParms

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }


  useEffect(() => {
    async function loadGames() {
      try {
        const response = await fetch(`http://<windows ip>:3333/games/${game.id}/ads`)
        const data = await response.json() as DuoCardProps[]

        setAds(data)
      } catch (error) {
        console.log(error)
      }

    }

    loadGames()
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.right}
            onPress={handleGoBack}
          >
            <Entypo
              name='chevron-thin-left'
              size={20}
              color={THEME.COLORS.CAPTION_400}
            />
          </TouchableOpacity>

          <Image
            source={logo}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <View style={{ paddingHorizontal: 32, width: '100%' }}>
          <Image
            style={styles.gameImg}
            source={{ uri: game.bannerUrl }}
            resizeMode="cover"
          />
        </View>


        <Heading
          title={game.title}
          subTitle={'Conecte-se e comece a jogar!'}
        />

        <FlatList
          style={[{ paddingHorizontal: 32 }, styles.containerList]}
          horizontal
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <DuoCard
                onConnect={() => { }}
                {...item}
              />
            )
          }}
          contentContainerStyle={ads?.length === 0 ? styles.containerListEmpty : styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.contentListEmpty}>
              Sem anúncios para esse game ainda.
            </Text>
          )}
        />


      </SafeAreaView>
    </Background>

  );
}