// sidebar.tsx
import { HomeIcon, DollarSign, BoxIcon, Settings } from "lucide-react";
import { ReactNode } from "react";
import { useRouter } from 'next/navigation';

export const SideBar = () => {
   return (
      <div
         className="fixed top-0 left-0 h-screen w-16 flex flex-col
                 bg-white dark:bg-gray-900 shadow-lg"
      >
         <SideBarIcon icon={<HomeIcon size={28} />} text='Home' href="/" />
         <Divider />
         <SideBarIcon icon={<DollarSign size={28} />} text="Finanzi" href="/finanzi" />
         <SideBarIcon icon={<BoxIcon size={28} />} text="Inventario" href="/inventory" />
         <Divider />
         <SideBarIcon icon={<Settings size={28} />} text="Settings" href="/settings" />
      </div>
   );
};

type SideBarIconProps = {
   icon: ReactNode;
   text?: string;
   href?: string;
};

export const SideBarIcon = ({ icon, text = "Tooltip 💡", href }: SideBarIconProps) => {
   const router = useRouter();
   return (
      <div
         onClick={() => href && router.push(href)}
         className="sidebar-icon group relative"
      >
         {icon}
         <span
            className="sidebar-tooltip absolute left-14 top-1/2 -translate-y-1/2 
                 opacity-0 group-hover:opacity-100 group-hover:scale-100"
         >
            {text}
         </span>
      </div>
   );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
