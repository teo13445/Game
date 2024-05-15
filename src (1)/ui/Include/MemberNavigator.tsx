'use client'
import { INavigation } from "@/lib/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const navbar:Array<INavigation> = [
    {
        title:'Tổng Quan',
        slug: '',
        subNav:[]
    },
    {
        title:'Tài Khoản',
        slug:'account',
        subNav:[
            {
                title:'Trang Cá Nhân',
                slug:'/profile',
            },
            {
                title:'Địa Chỉ Giao Hàng',
                slug:'/address',
            },
            {
                title:'Thanh Toán',
                slug:'/payment',
            }
        ]
    },
    {
        title:'Đơn Hàng',
        slug:'order',
        subNav:[
            {
                title:'Đang Vận Chuyển',
                slug:'?filter=isPending',
            },
            {
                title:'Đã Thanh Toán',
                slug:'?filter=done',
            },
            {
                title:'Hoàn Trả',
                slug:'?filter=back',
            },
            {
                title:'Hủy Đơn',
                slug:'?filter=cancel',
            }
        ]
    },
    {
        title:'Yêu Thích',
        slug:'wishlist',
        subNav:[]
    }
]

function DropDown({navigation}:{navigation:INavigation}){
    return (
        <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? 'font-semibold bg-gray-100': ''} w-full text-left p-2 rounded-lg hover:bg-gray-100 group flex justify-between items-center`}>
              <Link className=" group-hover:font-semibold"
              href={`/member/${navigation.slug}`}>{navigation.title}</Link>
              <FontAwesomeIcon icon={`${open ? 'chevron-up' :'chevron-down'}`} className="w-4 h-4"/>
            </Disclosure.Button>
            <Disclosure.Panel className="pl-4">
                {
                    navigation?.subNav?.map((subnav:INavigation,index:number)=>{
                        return(
                            <div key={index} className="relative before:absolute before:inset-y-0 before:-left-2 before:border-l before:hover:border-black p-2 rounded-lg hover:bg-gray-100 group">
                            <Link className="group-hover:font-semibold"
                                href={`/member/${navigation.slug+subnav.slug}`}>{subnav.title}</Link>
                            </div>
                        )
                    })
                }
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
}

export default function MemberNavigator() {
    return ( 
        <div className="flex flex-col gap-y-2">
            {navbar.map((navItem,index:number)=>
                {return navItem.subNav?.length === 0 ? 
                <div key={index} className="  p-2 rounded-lg hover:bg-gray-100 group">
                    <Link className="group-hover:text-gray-600 group-hover:font-semibold"
                        href={`/member/${navItem.slug}`}>{navItem.title}</Link>
                </div>
                : <DropDown navigation={navItem} key={index}/>
                }
                
            )}
        </div>
     );
}