import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';

import logoSvg from './assets/logo.svg'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react';
import { Input } from './components/Input';

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
    async function loadGames() {
      const response = await fetch('http://localhost:3333/games')
      const data = await response.json() as Game[]

      setGames(data)
    }

    loadGames()
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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

            <Dialog.Content className='fixed bg-[#2A2634] py-6 px-6 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/40'>
              <Dialog.Title className='text-3xl font-black'>
                Publique um anúncio
              </Dialog.Title>


              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <Input
                    id='game'
                    type="text"
                    placeholder='Selecione o game que deseja jogar.'
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO.' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <Input id='discord' type="text" placeholder='Usuário#00000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        D
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        S
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        T
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        Q
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        Q
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        S
                      </button>
                      <button className='w-8 h-8 rounded bg-zinc-900'>
                        S
                      </button>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual o horário do jogo?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id='hourStart' type="time" placeholder='De' />
                      <Input id='hourEnd' type="time" placeholder='Até' />
                    </div>
                  </div>
                </div>

                <div className='mt-6 text-sm flex gap-2'>
                  <Input type="checkbox" />
                  <span>Costumo me conectar ao chat de voz</span>
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close
                    className='bg-zinc-500 font-semibold px-5 h-12 rounded hover:bg-zinc-600 transition-colors'
                    type='button'
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    type='submit'
                    className='bg-violet-500 font-semibold px-5 h-12 rounded flex gap-2 items-center hover:bg-violet-600 transition-colors'
                  >
                    <GameController className='w-6 h-6' />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>


    </div>
  )
}

export default App
