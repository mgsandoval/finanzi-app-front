'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const handleLogin = () => {
   alert('Hola mundo!');
}

export default function Login() {
   return (
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-[#0e4d90] via-[#3b82f6] to-[#1c56ca] p-4'>
         <Card className='w-full max-w-sm shadow-lg bg-white'>
            <CardHeader className='space-y-1 text-center'>
               <CardTitle className='text-2xl font-bold'>
                  Iniciar sesión
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className='space-y-2'>
                  <Label htmlFor='username'>
                     Nombre de usuario
                  </Label>
                  <Input
                     id='username'
                     type='text'
                     placeholder='Nombre de usuario'
                     required
                     aria-required='true'
                     className='hover:bg-blue-50'
                  />
                  <Label htmlFor='password'>
                     Contraseña
                  </Label>
                  <Input
                     id='password'
                     type='password'
                     placeholder='••••••••'
                     required
                     aria-required='true'
                     className='hover:bg-blue-50'
                  />
               </div>
            </CardContent>
            <CardFooter>
               <Button
                  className='w-full bg-emerald-400 hover:bg-green-400 text-black hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                  onClick={ handleLogin }
               >
                  <LogIn className='ml-1 mr-1 h-4 w-4' />
                  <span className='sm:inline'>
                     Ingresar
                  </span>
               </Button>
            </CardFooter>
         </Card>
      </div>
   );
}