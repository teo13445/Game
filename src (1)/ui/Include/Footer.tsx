'use client';

import Link from "next/link";
import { ReactElement } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
library.add(fas)

interface footerItem{
    name:string,
    link:string
}

interface footerEntity{
    title:string,
    link:string,
    list:Array<footerItem>
}

const items : Array<footerEntity> = [
    {
        title:'Hỗ Trợ',
        link:'/contact',
        list:[
            {name: 'TP. Hồ Chí Minh',link:'https://goo.gl/maps/nbaZSFE2ZDTr9hqR7'},
            {name:'email@yourmail.com',link:'mailto:email@yourmail.com'},
            {name:'+84 0123456789',link:'tel:0123456789'}
        ]
    },
    {
        title:'Tài Khoản',
        link:'/member',
        list:[
            {name:'Cài Đặt',link:'/member/account'},
            {name:'Đăng Nhập / Đăng Ký',link:'/auth'},
            {name:'Giỏ Hàng',link:'/cart'},
            {name:'Yêu Thích',link:'/member/wishlist'},
            {name:'Mua Sắm',link:'/products'},
        ]
    },
    {
        title:'Liên kết',
        link:'#',
        list:[
            {name:'Chính Sách Bảo Mật',link:'/legal/privacy'},
            {name:'Điều khoản sử dụng',link:'/legal/term'},
            {name:'Câu hỏi thường gặp',link:'/legal/faq'},
            {name:'Liên Hệ',link:'/contact'},
        ]
    },

]

const footerList = items.map((item,index)=>(
    <div key={index} className='space-y-6'>
        <Link href={item.link} className='text-xl font-medium'>{item.title}</Link>
        <ul className="space-y-4">
            {item.list.map((e,index)=>(
                <li key={index}><Link href={e.link}>{e.name}</Link></li>
            ))}
        </ul>
    </div>
))

function Footer():ReactElement {
    return ( 
        <footer className="bg-black pt-20 pb-6 text-gray-50">
            <div className="max-w-7xl mx-4 md:mx-auto">
                <div className="flex justify-between flex-wrap">
                    <div className='space-y-6'>
                        <Link href={'/'} className='text-xl font-medium'>S-market</Link>
                        <ul className="space-y-4">
                            <li className="font-medium"><Link href={'/auth/register'}>Đăng Ký</Link></li>
                            <li>Để được giảm 10% cho đơn hàng đầu tiên</li>
                            <li className="relative">
                                <input type="email" className="bg-black border-gray-50 border-2 rounded w-full py-3 px-4" placeholder="Nhập email của bạn"/>
                                <div className="absolute inset-y-0 right-2">
                                    <button className="flex items-center h-full">
                                        <FontAwesomeIcon icon='caret-right' className="w-6 h-6 text-gray-50"/>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {footerList}
                    <div className='space-y-6'>
                        <Link href='#' className='text-xl font-medium'>Tải App</Link>
                        <ul className="space-y-4">
                            <li>Giảm thêm 50,000 VNĐ khi dùng App</li>
                            <li className="space-y-2">
                                <Image src="/images/app-store.jpg" alt="app store" width={100} height={30}/>
                                <Image src="/images/google-play.jpg" alt="google play" width={100} height={30}/>
                            </li>
                            <li>
                                <div className="flex gap-x-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 !fill-gray-50"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 !fill-gray-50"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 !fill-gray-50"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-24 text-center">
                © Copyright HuTra 2023. All right reserved
            </div>
        </footer>
     );
}

export default Footer;