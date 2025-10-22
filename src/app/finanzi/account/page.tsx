import type { Metadata } from 'next';
import AccountPage from '@/components/pages/finanzi/account-page';

export const metadata: Metadata = {
   title: 'Mis finanzas - Finanzi',
   description: 'Finanzi app',
};

export default function() {
   return (
      <AccountPage />
   );
}
