'use client'
import { Menu, Transition ,} from '@headlessui/react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { signOut } from 'next-auth/react';
import MemberNavigator from '../Include/MemberNavigator';

function AccountDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center rounded-full bg-rose-600 w-8 h-8  text-gray-50 hover:bg-rose-700">
                <FontAwesomeIcon icon={'user'} className='w-4 h-4' />
            </Menu.Button>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="fixed inset-x-0 bottom-0 z-10 shadow-t bg-white md:absolute md:top-12 md:-translate-x-40 md:w-48 md:z-40 md:rounded-lg md:shadow md:bottom-auto">
                    <Menu.Item >
                        <Menu.Button className={'block pt-1 mx-auto md:hidden'}><FontAwesomeIcon icon={'chevron-down'} className='w-5 h-5 text-gray-600'/></Menu.Button>
                    </Menu.Item>
                    <MemberNavigator />
                    <button onClick={async () => await signOut()}
                        className={`flex w-full group rounded-md px-2 py-3 border-t text-rose-600`} >
                        <div className='flex items-center gap-x-3'>
                            <FontAwesomeIcon icon={'right-from-bracket'} className='w-4 h-4' />
                            <span>Đăng Xuất</span>
                        </div>
                    </button>
                </Menu.Items>
            </Transition>
            
        </Menu>
    )
}
export default AccountDropdown;