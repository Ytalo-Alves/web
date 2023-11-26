import {User} from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/*Left */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/*Blur */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full h-[288px] w-[526px] bg-purple-700 blur-full"/>

        {/*Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/*SingIn */}
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className='h-5 w-5 text-gray-500'/>
          </div>
          <div className='w-36'>
          <p className='text-sm leading-snug text-gray-100'><span className='underline hover:text-gray-50 transition-colors'>Crie sua conta</span> e salve suas memórias</p>
          </div>
        </a>
        

         {/*Hero */}
         <div className='space-y-5'>
          <Image src={logo} alt='NLW Spacetime' />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='mt-5 text-5xl text-gray-50 font-bold leading-tight'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>
          <a className='hover:bg-green-700 transition-colors inline-block bg-green-500 px-3 py-3 rounded-full text-gray-950 font-bold font-alt text-sm uppercase leading-none' href="">CADASTRAR LEMBRANÇA</a>
         </div>

         {/*Copyright*/}
         <div className='text-sm leading-relaxed text-gray-200'>
         Feito com 💜 no NLW da <a target='_blank' rel='noreferrer' className='underline hover:text-gray-100' href="">Rocketseat</a>
         </div>

        </div>

      {/*Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center w-[360px] leading-relaxed">Você ainda não registrou nenhuma lembrança, comece a{' '} 
            <a href='' className="underline hover:text-gray-50">criar agora!</a></p>
        </div>
      </div>
    </main>
  )
}
