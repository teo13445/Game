'use client'
import useWindowSize from "@/hook/useResize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

interface navEntity{
    title:string,
    link:string
}

const navigations : Array<navEntity>=[
    {title:'Trang Chủ',link:'/'},
    {title:'Liên Hệ',link:'/contact'},
    {title:'Thông tin',link:'/about'},
    {title:'Sản Phẩm',link:'/products'},
    {title:'Tài Liệu',link:'/document'},
]

const navList = navigations.map((navigation,index)=>(
    <Link className="md:text-lg text-base"
    href={navigation.link} key={index}>{navigation.title}</Link>
))
export default function NavHeader() {
    const [toggle,setToggle] = useState<boolean>(false)
    const size = useWindowSize();
    useEffect(()=>{
        size.width >= 768 ? setToggle(true) : setToggle(false)
    },[size.width])
    return (
        <>
        <div className="flex items-center justify-between py-3 md:hidden">
                <Link href={'/'} className='text-2xl font-bold text-gray-900'>
                    <span className="uppercase text-rose-600">s</span>
                    <span>-</span>
                    <span>m</span>
                    <span>a</span>
                    <span>r</span>
                    <span>k</span>
                    <span>e</span>
                    <span>t</span>
                </Link>
                <button onClick={() => { setToggle(!toggle) }}
                    className="">
                    {
                        toggle ?
                            <FontAwesomeIcon icon={'x'} className="w-5 h-5" />:
                            <FontAwesomeIcon icon={'bars'} className="w-5 h-5" /> 
                    }

                </button>
            </div>
            <nav className={`flex flex-col md:flex-row gap-x-8 gap-y-2 pb-3 md:pb-0 ${!toggle ? 'hidden' : ''}`}>
                {navList}
            </nav>
        </>
    )
};
