'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type Props = {
  label: string;
  iconSrc: string;
  href: string;
  onClick?: () => void;
};

const SidebarItem = ({ label, href, iconSrc, onClick }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      size={'sm'}
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className='h-[52px] justify-start'
      asChild
    >
      <Link href={href} onClick={onClick}>
        <Image src={iconSrc} alt={label} className='mr-5' height={32} width={32} />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
