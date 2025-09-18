import type { Metadata } from "next";
import LandPage from '@/components/pages/landpage-page';
import FinanziPage from "@/components/pages/finanzi-page";

export const metadata: Metadata = {
   title: "Mis finanzas - Finanzi",
   description: "Finanzi app",
};

export default function Home() {
   return (
      <FinanziPage />
   );
}
