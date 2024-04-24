import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div
      className='sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3
    text-neutral-400 lg:z-50'
    >
      <Link href={'/courses'}>
        <Button size={'sm'} variant={'ghost'}>
          <ArrowLeftIcon className='h-5 w-5 stroke-2 text-neutral-700' />
        </Button>
      </Link>
      <h1 className='text-lg font-extrabold'>{title}</h1>
      <div />
    </div>
  );
};

export default Header;
