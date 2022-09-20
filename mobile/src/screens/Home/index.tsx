
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';


export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGames({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }


  useEffect(() => {
    async function loadGames() {
      try {
        const response = await fetch(`http://${process.env.WINDOWSIP}:3333/games`)
        const games = await response.json()

        setGames(games)
      } catch (error) {
        console.log(error)
      }

    }

    loadGames()
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logo}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo!'
          subTitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGames(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}