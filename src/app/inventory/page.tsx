import type { Metadata } from 'next';
import React from 'react';
import InventoryPage from '@/components/pages/inventory/inventory-page';

export const metadata: Metadata = {
   title: 'Mi inventario - Finanzi',
   description: 'Finanzi app',
};

export default function () {
   return (
      <InventoryPage />
   );
}