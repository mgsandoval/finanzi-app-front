'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Plus, Eye, Pencil } from 'lucide-react';
import { SideBar } from '@/components/ui/sidebar-nav';

export default function AccountPage() {
   return (
      <>
         <div className='flex'>
            <SideBar />
         </div>
         <div className='w-full min-h-screen items-center justify-center bg-gradient-to-r from-[#0e4d90] via-[#3b82f6] to-[#1c56ca] p-4'>
            <div className='mx-auto'>
               <Card className='mb-4 ml-15 bg-white'>
                  <CardHeader>
                     <div className='flex items-center justify-between'>
                        <CardTitle className='text-xl font-bold'>
                           Cuenta 1
                        </CardTitle>
                     </div>
                  </CardHeader>
                 <Card className='mb-6 mx-4 bg-white'>
                     <CardHeader>a</CardHeader>
                     <CardContent>b</CardContent>
                 </Card>
               </Card>
            </div>
         </div>
      </>
   );
}