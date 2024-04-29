import MobileHeader from '@/components/mobile/mobile-header';
import Sidebar from '@/components/sidebar/sidebar';
import RightBar from './learn/right-bar';

type Props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className='hidden lg:flex' />
      <main className='h-full pt-[50px] lg:pl-[256px] lg:pt-0'>
        <div className='max-width-[1056px] flex justify-center gap-3 p-6 sm:pt-10 md:ml-24 lg:ml-0 lg:gap-12'>
          {children}
          <RightBar />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
