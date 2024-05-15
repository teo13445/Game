'use client'
import Link from "next/link";
import AccountDropdown from "../Auth/AccountDropdown";
import CartIcon from "./CartIcon";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useWindowSize from "@/hook/useResize";
import WishlistIcon from "./WishlistIcon";

export default function IconsButton() {
    const size = useWindowSize();

    const { data: session, status } = useSession()
    const [toggleSearch,setToggleSearch] = useState<boolean>(false)

    useEffect(()=>{
        size.width >= 768 ? setToggleSearch(true) : setToggleSearch(false)
    },[size.width])
    return(
        <>
            <div className="md:flex gap-x-6">
                <div className={`relative ${!toggleSearch ? 'hidden' :''}`}>
                    <input type="text" className="w-full md:w-48 bg-gray-200 rounded-md py-2 focus:bg-none focus:ring-0 focus:outline-none pl-5" />
                    <div className="absolute inset-y-0 right-3">
                        <button className="flex items-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex gap-x-8 px-2 md:gap-x-12 lg:gap-x-4 items-center justify-center fixed md:relative bottom-0 inset-x-0 bg-white z-10 py-4 shadow-t md:shadow-none md:p-0 md:m-0">
                    <CartIcon/>
                    <button className="inline md:hidden"
                    type="button" onClick={()=>{setToggleSearch(!toggleSearch)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    <Link href={'/'} className="inline md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <WishlistIcon/>
                    {status == "authenticated" ?
                        <AccountDropdown />
                        :
                        <Link href={'/auth'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
};
