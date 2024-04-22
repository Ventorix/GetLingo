import MobileHeader from '@/components/mobile/mobile-header';
import Sidebar from '@/components/sidebar';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className='hidden lg:flex' />
      <main className='h-full pt-[50px] lg:pl-[256px] lg:pt-0'>
        <div className='mx-auto h-full max-w-[1056px] bg-red-500 pt-6'>{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
