import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block'>
      <div className='mx-auto flex h-full max-w-screen-lg items-center justify-evenly'>
        <Button size={'lg'} variant={'ghost'} className='w-full'>
          <Image
            src='/flags/GB-UKM - United Kingdom.svg'
            alt={'English'}
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          English
        </Button>
        <Button size={'lg'} variant={'ghost'} className='w-full'>
          <Image
            src='/flags/ES - Spain.svg'
            alt={'Spanish'}
            height={32}
            width={40}
            className='mr-4 rounded-md '
          />
          Spanish
        </Button>
        <Button size={'lg'} variant={'ghost'} className='w-full'>
          <Image
            src='/flags/FR - France.svg'
            alt={'French'}
            height={32}
            width={40}
            className='mr-4 rounded-md '
          />
          French
        </Button>
        <Button size={'lg'} variant={'ghost'} className='w-full'>
          <Image
            src='/flags/DE - Germany.svg'
            alt={'German'}
            height={32}
            width={40}
            className='mr-4 rounded-md '
          />
          German
        </Button>
        <Button size={'lg'} variant={'ghost'} className='w-full'>
          <Image
            src='/flags/JP - Japan.svg'
            alt={'Japanese'}
            height={32}
            width={40}
            className='mr-4 rounded-md border border-neutral-300'
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
