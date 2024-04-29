import { navbarLinks } from '@/config/navbar';
import { cn } from '@/lib/utils';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SidebarItem from './sidebar-item';

type Props = {
  className?: string;
  close?: () => void;
};

const Sidebar = ({ className, close }: Props) => {
  return (
    <nav
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]',
        className
      )}
    >
      <Link href={'/learn'}>
        <div className='flex items-center gap-x-3 pb-7 pl-4 pt-8'>
          <Image src={'/mascot.svg'} alt='Mascot' height={48} width={48} />
          <h1 className='text-2xl font-extrabold tracking-widest text-green-500'>GetLingo</h1>
        </div>
      </Link>
      <div className='flex flex-1 flex-col gap-y-2'>
        {navbarLinks.map((item) => (
          <SidebarItem
            href={item.href}
            iconSrc={item.iconSrc}
            label={item.label}
            key={item.id}
            onClick={close}
          />
        ))}
      </div>
      <div className='p-4'>
        <ClerkLoading>
          <Loader className='h-5 w-5 animate-spin text-green-500' />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: { userButtonPopoverCard: { pointerEvents: 'initial' } },
            }}
          />
        </ClerkLoaded>
      </div>
    </nav>
  );
};

export default Sidebar;
