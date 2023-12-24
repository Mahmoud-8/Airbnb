'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import { signOut } from 'next-auth/react';

import MenuItem from './MenuItem';


import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';
import useRentModal from '../../hooks/useRentModal';


import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';


interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const router = useRouter();
    const RegisterModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
       if (!currentUser) {
        return loginModal.onOpen()};


        rentModal.onOpen();
    },[currentUser, loginModal, rentModal]);





    return (
        <div className="relative">
            <div className="flex flex-row 
            items-center gap-3">
                <div onClick={onRent}
                    className="hidden md:block 
                    text-sm font- 
                     semibold py-3 
                     py-4 rounded-full 
                     hover:bg-neutral-100 
                      transition 
                      cursor-pointer">
                    Airbnb your home
                </div>
                <div onClick={toggleOpen} 
                className="
                p-4 md:py-1 md:px-2 border-[1px]
                 border-neutral- 200 flex 
                 flex-row items-center gap-3 
                 rounded-full cursor-ponter 
                  hover:shadow-md 
                 transition ">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
       <div className="absolute top-12 
       right-0 w-[40vw] 
                 bg-white 
        shadow-md rounded-xl md-w-3/4 
        overflow-hidden text-sm">
     <div className="flex flex-col cursor-pointer">
         {currentUser ? (
         <>
     <MenuItem onClick={() => router.push("/trips") }
            label='My trips' />

        <MenuItem onClick={() => { }}
         label=' My favorites' />

     <MenuItem onClick={() => { }}
         label=' My reservations' />

        <MenuItem onClick={() => { }}
        label=' My properties' />

        <MenuItem onClick={rentModal.onOpen}
      label=' My Airbnb my home' />

          <hr />
       <MenuItem onClick={() => 
        signOut()}
      label=' Logout' />
         </>
         ) : (
          <>
          <MenuItem onClick= 
         {loginModal.onOpen}
         label='Login' />


      <MenuItem onClick= 
      {RegisterModal.onOpen}
       label='Sign up' />
      </>
      )}
     </div>
    </div>
 )}
  </div>
 );
}

export default UserMenu;