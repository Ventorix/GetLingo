import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useExitModal } from '@/store/use-exit-modal';
import { InfinityIcon, X } from 'lucide-react';
import Image from 'next/image';

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

const Header = ({ hearts, percentage, hasActiveSubscription }: Props) => {
  const { open } = useExitModal();

  return (
    <header className='mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]'>
      <Button onClick={open}>
        <X className='h-6 w-6 text-slate-500' />
      </Button>
      <Progress value={percentage} />
      <div className='flex items-center font-bold text-rose-500'>
        <Image src={'/heart.svg'} alt='Hearts' height={28} width={28} className='mr-2' />
        {hasActiveSubscription ? <InfinityIcon className='h-6 w-6 stroke-[3]' /> : hearts}
      </div>
    </header>
  );
};

export default Header;
