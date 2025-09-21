'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Pencil } from 'lucide-react';
import DetailsDialog from './details-dialog';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function InventoryPage() {
   return (
      <div className='min-h-screen items-center justify-center bg-gradient-to-r from-[#0e4d90] via-[#3b82f6] to-[#1c56ca] p-4'>
         <div className='mx-auto'>
            <Card className="mb-4 bg-white">
               <CardHeader>
                  <div className="w-full flex items-center justify-between">
                     <CardTitle className="text-xl font-bold">
                        Inventario
                     </CardTitle>
                     <Button className='bg-sky-400 hover:bg-blue-400 text-black hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                        <Plus />
                        <span className="hidden sm:inline ml-1">
                           Añadir objeto
                        </span>
                     </Button>
                  </div>
               </CardHeader>
               <CardContent>
                  <div className="min-h-500 max-h-[90%] w-full overflow-auto">
                     <table className="w-full text-center border-collapse">
                        <thead>
                           <tr className="bg-gray-100">
                              <th className="py-2 px-4 border text-sm md:text-base">Objeto</th>
                              <th className="py-2 px-4 border text-sm md:text-base">Cantidad</th>
                              <th className="py-2 px-4 border text-sm md:text-base"></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="hover:bg-gray-50">
                              <td className="py-2 px-4 border text-sm md:text-base"></td>
                              <td className="py-2 px-4 border text-sm md:text-base"></td>
                              <td className="py-2 px-4 border text-sm md:text-base">
                                 <Button
                                    className='bg-emerald-400 hover:bg-green-400 text-black hover:text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
                                 >
                                    <Eye className='ml-1 mr-1 h-4 w-4' />
                                    <span className='sm:inline'>
                                       Ver más...
                                    </span>
                                 </Button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>

   );
}