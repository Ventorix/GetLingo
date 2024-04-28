'use client';

import { useHeartsModal } from '@/store/use-hearts-modal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push('/store');
  };

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close} modal>
      {/* w11/12 fix margin problem */}
      <DialogContent className='w-11/12 max-w-md rounded-lg'>
        <DialogHeader>
          <div className='mb-5 flex w-full items-center justify-center'>
            <Image src={'/mascot-bad.svg'} alt='Mascot' height={80} width={80} />
          </div>
          <DialogTitle className='text-center text-2xl font-bold'>
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className='text-center text-base'>
            Get Pro for unlimited hearts, or
            <br />
            purchase them in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='mb-4'>
          <div className='flex w-full flex-col gap-y-4'>
            <Button variant={'primary'} size={'lg'} className='w-full' onClick={onClick}>
              Get unlimited hearts
            </Button>
            <DialogClose asChild>
              <Button variant={'primaryOutline'} size={'lg'} className='w-full' onClick={close}>
                No, thanks
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeartsModal;
