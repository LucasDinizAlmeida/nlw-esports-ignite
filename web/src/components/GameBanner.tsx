import game1 from '../assets/game1.png'

interface GameBannerProps {
  bannerUrl: string,
  title: string,
  adsCount: number
}

export function GameBanner({ adsCount, bannerUrl, title }: GameBannerProps) {

  return (
    <a href="" className='relative rounded-lg overflow-hidden' >
      <img src={bannerUrl} alt="" />

      <div className='w-full pt-16 px-4 pb-4 bg-gameGradient absolute bottom-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm mt-1'>{adsCount} anúncios</span>
      </div>
    </a>
  )
}