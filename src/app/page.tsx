import type { Metadata } from "next";
import LandPage from '@/components/pages/landpage-page';

export const metadata: Metadata = {
   title: "¡Te damos la bienvenida a Finanzi!",
   description: "Finanzi app",
};

export default function Home() {
   return (
      <LandPage />
   );
}
