'use client';

import { refillHearts } from '@/actions/refill-hearts';
import { Button } from '@/components/ui/button';
import { DEFAULT_HEARTS_VALUE, DIAMONDS_PER_REFILL_HEARTS } from '@/constants';
import Image from 'next/image';
import { useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  hearts: number;
  diamonds: number;
};

const Items = ({ hearts, diamonds }: Props) => {
  const isHeartsFull = hearts === DEFAULT_HEARTS_VALUE;

  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === DEFAULT_HEARTS_VALUE || diamonds < DIAMONDS_PER_REFILL_HEARTS) return;

    startTransition(() => {
      refillHearts().catch(() => toast.error('Something went wrong'));
    });
  };
  return (
    <ul className='w-full'>
      <div className='flex w-full items-center gap-x-4 border-t-2 p-4'>
        <Image src={'/heart.svg'} alt='Heart' height={60} width={60} />
        <div className='flex-1'>
          <p className='text-base font-bold text-neutral-700 lg:text-xl'>Refill hearts</p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || isHeartsFull || diamonds < DIAMONDS_PER_REFILL_HEARTS}
        >
          {isHeartsFull ? (
            'full'
          ) : (
            <div className='flex items-center'>
              <Image src={'/diamond.svg'} alt='Diamond' height={20} width={20} />
              <p>{DIAMONDS_PER_REFILL_HEARTS}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
};

export default Items;
