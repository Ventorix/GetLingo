import { Menu } from 'lucide-react';
import Sidebar from '../sidebar/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-white' />
      </SheetTrigger>
      <SheetContent className='z-[100] p-0' side={'left'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
