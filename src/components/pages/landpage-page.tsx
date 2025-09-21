'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Navbar from '../ui/navbar';

export default function LandPage() {
   const router = useRouter();

   const onSubmit = () => {
      router.push('/login');
   }

   return (
      <div>
         <Navbar />
         <div className='min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-[#071727] via-[#151563] to-[#1c56ca] p-6'>
            <main className='flex-1 flex flex-col items-center justify-center text-center max-w-4xl px-4'>
               <h2 className='text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                  Organiza tus finanzas y pertenencias
               </h2>
               <div className='mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-white border-solid '>
                  <Button className='text-white text-lg sm:text-4xl px-6 py-6 w-full hover:bg-blue-950 cursor-pointer'
                     onClick={onSubmit}
                  >
                     Inicia sesión
                  </Button>
               </div>
            </main>
            <footer className="text-white text-xs sm:text-sm opacity-70 py-4">
               <div>
                  © {new Date().getFullYear()}&nbsp;
                  <a href='https://github.com/mgsandoval' target='_blank'>
                     mgsandoval.
                  </a>
                  Todos los derechos reservados.
               </div>
            </footer>
         </div>
      </div>
   );
}
