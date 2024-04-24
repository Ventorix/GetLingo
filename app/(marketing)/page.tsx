import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row'>
        <div className='relative mb-8 aspect-[1/1] w-full max-w-[273px] leading-[0] md:h-[424px] md:max-w-none lg:mb-0'>
          <Image src={'/people.svg'} alt='People' fill />
        </div>
        <div className='flex flex-col items-center gap-y-8'>
          <h1 className='max-w-[480px] text-center text-xl font-bold tracking-widest text-orange-400 lg:text-3xl'>
            <span className='text-sky-500'>Learn,</span>{' '}
            <span className='text-indigo-500'>practice</span>{' '}
            <span className='text-yellow-500'>and</span>{' '}
            <span className='text-rose-500'>master</span> new languages{' '}
            <span className='text-yellow-500'>with</span>{' '}
            <span className='text-green-500'>GetLingo!</span>
          </h1>
          <div className='flex w-full max-w-[330px] flex-col items-center gap-y-3'>
            <ClerkLoading>
              <Loader className='h-5 w-5 animate-spin text-green-500' />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode='modal'
                  signInFallbackRedirectUrl={'/learn'}
                  fallbackRedirectUrl={'/learn'}
                >
                  <Button size={'lg'} variant={'secondary'} className='w-full'>
                    Get started
                  </Button>
                </SignUpButton>
                <SignInButton
                  mode='modal'
                  signUpFallbackRedirectUrl={'/learn'}
                  fallbackRedirectUrl={'/learn'}
                >
                  <Button size={'lg'} variant={'primary'} className='w-full'>
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button size={'lg'} variant={'secondary'} className='w-full' asChild>
                  <Link href={'/learn'}>Continue Learning</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
