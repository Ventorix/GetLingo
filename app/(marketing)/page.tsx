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
        <div className='relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]'>
          <Image src={'/people.png'} alt='People' fill />
        </div>
        <div className='flex flex-col items-center gap-y-8'>
          <h1 className='max-w-[480px] text-center text-xl font-bold text-orange-400 lg:text-3xl'>
            <span className='text-sky-500'>Learn,</span>{' '}
            <span className='text-indigo-500'>practice,</span>{' '}
            <span className='text-rose-500'>master</span> new languages with{' '}
            <span className='text-emerald-500'>GetLingo!</span>
          </h1>
          <div>
            <ClerkLoading>
              <Loader className='h-5 w-5 animate-spin text-emerald-500' />
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
                  <Button size={'lg'} variant={'primaryOutline'} className='w-full'>
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
