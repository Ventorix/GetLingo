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
        <div className='flex items-center gap-x-3 pb-7 pl-4 pt-8'>
          <Link href={'/'}>
            <Image src={'/mascot.svg'} alt='Mascot' height={48} width={48} />
          </Link>
          <h1 className='xs:block hidden text-2xl font-extrabold tracking-widest text-green-600'>
            GetLingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className='h-5 w-5 animate-spin text-muted-foreground' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <div className='flex gap-2'>
              <SignInButton
                mode='modal'
                signUpFallbackRedirectUrl={'/learn'}
                fallbackRedirectUrl={'/learn'}
              >
                <Button size={'lg'} variant={'ghost'}>
                  Login
                </Button>
              </SignInButton>
              <SignUpButton
                mode='modal'
                signInFallbackRedirectUrl={'/learn'}
                fallbackRedirectUrl={'/learn'}
              >
                <Button size={'lg'} variant={'secondary'}>
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
