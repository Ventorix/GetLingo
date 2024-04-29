import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
      <div className='mx-auto flex h-full items-center justify-between lg:max-w-screen-lg'>
        <Link href={'/'}>
          <div className='flex items-center gap-x-3 pb-7 pl-4 pt-8'>
            <Image src={'/mascot.svg'} alt='Mascot' height={48} width={48} />
            <h1 className='hidden text-2xl font-extrabold tracking-widest text-green-500 xs:block'>
              GetLingo
            </h1>
          </div>
        </Link>
        <ClerkLoading>
          <Loader className='h-5 w-5 animate-spin text-green-500' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton
              afterSignOutUrl='/'
              appearance={{
                elements: { userButtonPopoverCard: { pointerEvents: 'initial' } },
              }}
            />
          </SignedIn>
          <SignedOut>
            <div className='flex gap-2'>
              <SignInButton
                mode='modal'
                signUpFallbackRedirectUrl={'/learn'}
                fallbackRedirectUrl={'/learn'}
              >
                <Button size={'sm'} variant={'primary'} className='xs:h-12 xs:px-8'>
                  Login
                </Button>
              </SignInButton>
              <SignUpButton
                mode='modal'
                signInFallbackRedirectUrl={'/learn'}
                fallbackRedirectUrl={'/learn'}
              >
                <Button size={'sm'} variant={'secondary'} className='xs:h-12 xs:px-8'>
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
