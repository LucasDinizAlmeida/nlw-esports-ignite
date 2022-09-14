import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'

import logoSvg from './assets/logo.svg'
import game1 from './assets/game1.png'
import game2 from './assets/game2.png'
import game3 from './assets/game3.png'
import game4 from './assets/game4.png'
import game5 from './assets/game5.png'
import game6 from './assets/game6.png'

function App() {

  return (
    <div className='max-w-[1314px] mx-auto flex items-center justify-center flex-col my-20'>
      <img src={logoSvg} alt="" />

      <h1 className='text-white text-6xl font-black mt-20'>
        Seu <span className='bg-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game1} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game2} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game3} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game4} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game5} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src={game6} alt="" />

          <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>

      </div>

      <div className='self-stretch mt-8 rounded-lg overflow-hidden pt-1 bg-gradient'>
        <div className='bg-[#2A2634] px-8 py-6 flex flex-row items-center justify-between'>
          <div>
            <strong className='block text-white font-black text-2xl'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 font-normal'>Publique um anúncio para encontrar novos players!</span>
          </div>


          <button className='px-4 py-3 flex items-center gap-3 bg-violet-500 rounded-lg'>
            <MagnifyingGlassPlus size={24} color="white" />
            <span className='text-white font-medium'>Publicar anúncio</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
