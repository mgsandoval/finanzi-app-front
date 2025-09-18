'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Plus, Eye, Pencil } from 'lucide-react';

export default function FinanziPage() {
   return (
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-[#0e4d90] via-[#3b82f6] to-[#1c56ca] p-4'>
         <Card className='w-full max-w-sm shadow-lg bg-white'>
            <CardHeader className='space-y-1 text-center'>
               <CardTitle className='text-2xl font-bold'>
                  Finanzi
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className='space-y-2'>
                  <Card className='w-full max-w-sm shadow-lg bg-white cursor-pointer'>
                     <CardHeader>
                        <CardTitle>
                           Balance
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        L 3,000.00
                     </CardContent>
                  </Card>
               </div>
            </CardContent>
            <CardFooter>
               <Button
                  className='w-full bg-emerald-400 hover:bg-green-400 text-black hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
               >
                  <Plus className='ml-1 mr-1 h-4 w-4' />
                  <span className='sm:inline'>
                     Ingresar
                  </span>
               </Button>
            </CardFooter>
         </Card>
      </div>
   );
}