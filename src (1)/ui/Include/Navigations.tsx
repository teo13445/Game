'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigation } from "./Navigator";

function NavigationList({navigations,opacity}:{navigations:INavigation[],opacity:number}){
    const pathname = usePathname();
    return(
        <>
        {navigations.map((navigation) => {
                const isActive = pathname?.startsWith('/categories/' + navigation.slug);
                return (
                    <div className={`group hover:bg-rose-100 px-3 py-1 rounded-lg md:bg-white  ${isActive ? 'bg-rose-100 md:bg-white' : 'bg-gray-100'}`} key={navigation.id}>
                        <Link className={`group-hover:text-rose-600 text-sm md:text-base md:text-black ${isActive ? 'text-rose-600 md:text-rose-600' : 'text-gray-600'}`}
                                href={`/categories/${navigation.slug}`}>{navigation.name}</Link>
                    </div>
                )
            })}
            </>
    )
}

export default function Navigations({navigations}:{navigations:INavigation[]}) {

    return(
        <>
            <nav className={`flex flex-row lg:flex-col gap-2 overflow-x-auto`}>
                <NavigationList navigations={navigations} opacity={900}/>
            </nav>
        </>
        
    )
};
