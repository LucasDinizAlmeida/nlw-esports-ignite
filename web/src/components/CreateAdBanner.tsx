import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {

  return (
    <div className='self-stretch mt-8 rounded-lg overflow-hidden pt-1 bg-gradient'>
      <div className='bg-[#2A2634] px-8 py-6 flex flex-row items-center justify-between'>
        <div>
          <strong className='block text-white font-black text-2xl'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 font-normal'>Publique um anúncio para encontrar novos players!</span>
        </div>


        <Dialog.Trigger className='px-4 py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 transition-colors rounded-lg'>
          <MagnifyingGlassPlus size={24} color="white" />
          <span className='text-white font-medium'>Publicar anúncio</span>
        </Dialog.Trigger>
      </div>
    </div>
  )
}