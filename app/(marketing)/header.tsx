import Image from 'next/image';

export const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
      <div className='mx-auto flex h-full items-center justify-between lg:max-w-screen-lg'>
        <div className='flex items-center gap-x-3 pb-7 pl-4 pt-8'>
          <Image src={'/mascot.svg'} alt='Mascot' height={48} width={48} />
          <h1 className='text-2xl font-extrabold tracking-widest text-green-600'>GetLingo</h1>
        </div>
      </div>
    </header>
  );
};
