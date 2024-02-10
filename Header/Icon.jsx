import Imo from './imo.webp'
import Insta from './instagram.webp'
import Tele from './Telegram_logo.webp'
import Whats from './whatsapp.webp'
import Start from './start.webp'

export default function Icon() {
  return (
    <div className='flex gap-2'>
        <img src={Imo} className='size-7'/>
        <img src={Insta} className='size-7'/>
        <img src={Tele} className='size-7'/>
        <img src={Whats} className='size-7'/>
        <img src={Start} className='size-7'/>
    </div>
  )
}
