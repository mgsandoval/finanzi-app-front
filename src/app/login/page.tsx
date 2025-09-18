import type { Metadata } from 'next';
import Login from '@/components/auth/login-page';

export const metadata: Metadata = {
   title: 'Iniciar sesión - Finanzi',
   description: 'Finanzi app',
};
export default function() {
   return (
      <Login />
   );
}