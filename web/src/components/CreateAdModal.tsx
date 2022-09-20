import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Input';
import { Check, GameController } from 'phosphor-react';
import { useEffect, useState, FormEvent } from 'react';
import { api } from '../utils/api';
interface Game {
  id: string,
  title: string,

}

export function CreateAdModal() {

  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>(['0'])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)


  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) {
      return
    }

    try {

      await api.post(`/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })


      alert('Sucesso ao cadastrar anúncio')
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar anúncio')
    }
  }

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('/games')

      setGames(response.data as Game[])
    }


    loadGames()
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

        <Dialog.Content className='fixed bg-[#2A2634] py-6 px-6 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/40'>
          <Dialog.Title className='text-3xl font-black'>
            Publique um anúncio
          </Dialog.Title>


          <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="game" className='font-semibold'>Qual o game?</label>
              <select
                name='game'
                defaultValue=""
                className='bg-zinc-900 py-3 px-4 text-sm font-normal placeholder:text-zinc-500 appearance-none rounded'>
                <option disabled value="">
                  Selecione o jogo
                </option>
                {
                  games.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
                }
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input name='name' id='name' type="text" placeholder='Como te chamam dentro do game?' />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO.' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord">Qual seu Discord?</label>
                <Input name='discord' id='discord' type="text" placeholder='Usuário#00000' />
              </div>
            </div>

            <div className='flex gap-6'>
              <div>
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <ToggleGroup.Root
                  type='multiple'
                  className='grid grid-cols-4 gap-2'
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value='0'
                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='1'
                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='2'
                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='3'
                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='4'
                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='5'
                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='6'
                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart">Qual o horário do jogo?</label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input name='hourStart' id='hourStart' type="time" placeholder='De' />
                  <Input name='hourEnd' id='hourEnd' type="time" placeholder='Até' />
                </div>
              </div>
            </div>

            <label className='mt-6 text-sm flex gap-2'>
              <Checkbox.Root
                className='w-6 h-6 rounded bg-zinc-900 p-1'
                onCheckedChange={() => setUseVoiceChannel(!useVoiceChannel)}
              >
                <Checkbox.Indicator>
                  <Check className='w-4 h-4 text-emerald-400' />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span>Costumo me conectar ao chat de voz</span>
            </label>

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
  )
}

function axios(arg0: string) {
  throw new Error('Function not implemented.');
}
