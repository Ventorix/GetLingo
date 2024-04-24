import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({ title, id, imageSrc, onClick, disabled, active }: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-3 pb-6 shadow-[0_5px_0_#e2e8f0] transition hover:bg-slate-50 active:translate-y-[5px] active:shadow-none',
        disabled && 'pointer-events-none opacity-50'
      )}
    >
      <div className='flex min-h-[24px] w-full items-center justify-end'>
        {active && (
          <div className='flex items-center justify-center rounded-md bg-green-500 p-1.5'>
            <Check className='h-4 w-4 stroke-[4] text-white' />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className='rounded-lg border border-neutral-300 object-cover drop-shadow-lg'
      />
      <p className='mt-3 text-center font-bold text-neutral-700'>{title}</p>
    </div>
  );
};
