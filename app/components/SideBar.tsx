'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building,
  ShieldCheck,
  Users,
  CreditCard,
  ClipboardList,
  Archive,
  Layers,
  BadgeCheck,
  Clock,
  Settings,
  User,
  LogOut,
} from 'lucide-react';

type MenuItem = {
  name?: string;
  icon?: React.ElementType;
  href?: string;
  type?: 'label';
  text?: string;
};

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { type: 'label', text: 'Main Menu' },
  { name: 'Branches', icon: Building, href: '/branches' },
  { name: 'Roles', icon: ShieldCheck, href: '/roles' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Card Scheme', icon: CreditCard, href: '/card-scheme' },
  { name: 'Card Profile', icon: ClipboardList, href: '/card-profile' },
  { name: 'Card Request', icon: ClipboardList, href: '/card-request' },
  { name: 'Stock', icon: Archive, href: '/stock' },
  { name: 'Cards', icon: Layers, href: '/cards' },
  { name: 'Authorization List', icon: BadgeCheck, href: '/auth-list' },
  { name: 'Authorization Queue', icon: Clock, href: '/auth-queue' },
  { name: 'Trail', icon: Settings, href: '/trail' },
  { name: 'Account', icon: User, href: '/account' },
];
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-65 bg-white flex flex-col justify-between border-r p-6 relative">
      <div>
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold text-center block text-blue-800">
            <Image src="/LAPO_Logo.png" alt="Lapo Logo" width={100} height={100} className="h-9 " />
            {/* <span className="text-sm block text-gray-700 items-start">Card Issuance</span> */}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            if (item.type === 'label') {
              return (
                <p key={`label-${index}`} className="text-sm font-medium text-gray-700 mt-4 mb-2 px-4">
                  {item.text}
                </p>
              );
            }
            
            const { name, icon: Icon, href } = item;
            if (!Icon || !name) return null;
            
            return (
              <Link
                key={name}
                href={href || '/'}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === href
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-gray-700 hover:bg-blue-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="space-y-4">
        <button 
          className="flex items-center gap-4 py-4 mt-30 justify-center text-sm text-red-600 hover:underline"
          onClick={() => console.log('Logout clicked')}
        >
          <LogOut className="w-5 h-5 ml-5" />
          Logout
        </button>
        <div className="text-s text-gray-500 flex items-center justify-center">
          <span className="mr-5">Powered by</span>
          <Image src="/Vector.png" alt="Cardinfos Logo" width={70} height={10} className="h-9 mr-7" />
        </div>
      </div>
    </div>
  );
}
