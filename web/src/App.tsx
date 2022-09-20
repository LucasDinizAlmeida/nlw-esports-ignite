import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';

import logoSvg from './assets/logo.svg'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'

import { CreateAdModal } from './components/CreateAdModal';
import { api } from './utils/api';

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {

    try {
      async function loadGames() {
        const response = await api.get('/games')

        setGames(response.data as Game[])
      }

      loadGames()
    } catch (error) {
      console.log(error)
    }



  }, [])

  return (
    <div className='max-w-[1314px] mx-auto px-3 flex items-center justify-center flex-col my-20'>
      <img src={logoSvg} alt="" />

      <h1 className='text-white text-6xl font-black mt-20'>
        Seu <span className='bg-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        {
          games.map(item => {
            return (
              <GameBanner
                key={item.id}
                bannerUrl={item.bannerUrl}
                title={item.title}
                adsCount={item._count.ads}
              />
            )
          })
        }


      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>


    </div>
  )
}

export default App
