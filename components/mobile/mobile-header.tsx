import UserProgress from '../user-progress';
import MobileSidebar from './mobile-sidebar';

const MobileHeader = async () => {
  return (
    <nav className='fixed top-0 z-50 flex h-[50px] w-full items-center justify-between border-b bg-green-500 px-6 lg:hidden'>
      <MobileSidebar />
      <UserProgress />
    </nav>
  );
};

export default MobileHeader;
