'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Pencil } from 'lucide-react';

export default function DetailsDialog() {
   return (
      <Dialog >
         <DialogHeader>
            <DialogTitle>
               Nombre de objeto
            </DialogTitle>
            <Button>
               <Pencil />
               Editar
            </Button>
            <DialogDescription>
               Descripción del objeto...
            </DialogDescription>
         </DialogHeader>
         <DialogContent>
            <img></img>
            Cantidad:
            Nombre específico:
         </DialogContent>
      </Dialog>
   );
}