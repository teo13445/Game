'use client'
import { PageProps } from "@/lib/type";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

function Layout({ children, params }: PageProps) {
    const {  status } = useSession();

    return ( 
        <div className="max-w-md mx-4 md:mx-auto py-20">
            {status == 'authenticated' ? 
                redirect('/')
            :children}
        </div>
     );
}

export default Layout;