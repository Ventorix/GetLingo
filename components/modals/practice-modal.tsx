'use client';

import { usePracticeModal } from '@/store/use-practice-modal';
import Image from 'next/image';
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

const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close} modal>
      {/* w11/12 fix margin problem */}
      <DialogContent className='w-11/12 max-w-md rounded-lg'>
        <DialogHeader>
          <div className='mb-5 flex w-full items-center justify-center'>
            <Image src={'/heart.svg'} alt='Heart' height={100} width={100} />
          </div>
          <DialogTitle className='text-center text-2xl font-bold'>Practice lesson</DialogTitle>
          <DialogDescription className='text-balance text-center text-base'>
            Use practice lessons to regain hearts and points. While you train, your hearts
            won&apos;t go away!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='mb-4'>
          <div className='flex w-full flex-col gap-y-4'>
            <DialogClose asChild>
              <Button variant={'primary'} size={'lg'} className='w-full' onClick={close}>
                I undestand
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PracticeModal;
