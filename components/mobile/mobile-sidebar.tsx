'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const MobileSidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const close = () => {
    setSheetOpen(false);
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Menu className='text-white' />
      </SheetTrigger>
      <SheetContent className='z-[100] p-0' side={'left'}>
        <Sidebar close={close} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
