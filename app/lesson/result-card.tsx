import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  value: number;
  variant: 'points' | 'hearts';
};

const ResultCard = ({ value, variant }: Props) => {
  const imageSrc = variant === 'hearts' ? '/heart.svg' : '/points.svg';

  return (
    <div
      className={cn(
        'w-full rounded-3xl border-4',
        variant === 'hearts' && 'border-rose-500 bg-rose-500',
        variant === 'points' && 'border-orange-400 bg-orange-400'
      )}
    >
      <div
        className={cn(
          'rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white md:text-sm',
          variant === 'hearts' && 'bg-rose-500',
          variant === 'points' && 'bg-orange-400'
        )}
      >
        {variant === 'hearts' ? 'Hearts Left' : 'Total XP'}
      </div>
      <div
        className={cn(
          'flex items-center justify-center rounded-3xl border-4 bg-white p-5 text-xl font-extrabold lg:text-3xl',
          variant === 'hearts' && 'text-rose-500',
          variant === 'points' && 'text-orange-400'
        )}
      >
        <Image
          src={imageSrc}
          alt={variant === 'hearts' ? 'hearts' : 'points'}
          className='mr-1.5'
          width={42}
          height={42}
        />
        {value}
      </div>
    </div>
  );
};

export default ResultCard;
