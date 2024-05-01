import { Button } from '@/components/ui/button';
import { NotebookTextIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
};

const UnitBanner = ({ title, description }: Props) => {
  return (
    <article className='sticky top-14 z-10 flex min-h-[82px] max-w-2xl items-center justify-between rounded-xl bg-green-500 text-white lg:top-6'>
      <header className='flex items-center justify-between gap-4 p-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p className='text-lg'>{description}</p>
        </div>
      </header>
      <Link href={'/lesson'}>
        <Button
          size={'lg'}
          variant={'secondary'}
          className='mx-4 hidden border-2 border-b-4 active:border-transparent xs:flex'
        >
          <NotebookTextIcon className='mr-2 h-5 w-5' />
          Continue
        </Button>
      </Link>
    </article>
  );
};

export default UnitBanner;
