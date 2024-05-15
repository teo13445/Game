'use client'

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import axios from 'axios';
import { signIn } from "next-auth/react";
import { State }  from 'country-state-city';
import { Form } from "@/lib/interface";
library.add(fas)

const cities = State.getStatesOfCountry('VN')

function Page() {

    const [formData,setFormData] = useState<Form>({ email:"", name:"", password:"",address:""})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        try {
            const response = await axios.post('/api/user', formData);
            if (response) {
                const email = formData.email;
                const password = formData.password;

                await signIn("credentials",{
                    email,
                    password,
                    redirect:true,
                    callbackUrl:'/'
                })
            }
        } catch (error) {
            console.error(error);
        }
      }

    return ( 
        <>
            <div className="text-4xl font-medium text-center">
                Đăng Ký
            </div>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="email" className="text-lg font-medium capitalize">
                        Email 
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'at'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input onChange={(e)=> setFormData({...formData,email:e.target.value})} value={formData.email}
                        type="email" name="email" id="email" placeholder="Nhập email..."
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="name" className="text-lg font-medium capitalize">
                        Tên
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'user'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input  onChange={(e)=> setFormData({...formData,name:e.target.value})} value={formData.name}
                        type="text" name="name" id="name" placeholder="Nhập họ và tên..."
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="address" className="text-lg font-medium capitalize">
                        Địa Chỉ
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'location-dot'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <select name="address" id="address" onChange={(e)=> setFormData({...formData,address:e.target.value})}
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500">
                            {cities.map((city)=>{
                                return(
                                    <option value={city.name} key={city.isoCode}>
                                        {city.name}
                                    </option>
                                )
                            })}    
                        </select> 
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="password" className="text-lg font-medium capitalize">
                        Mật Khẩu 
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'lock'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input  onChange={(e)=> setFormData({...formData,password:e.target.value})} value={formData.password}
                        type="password" name="password" id="password" placeholder="Nhập mật khẩu tại đây"
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="re-password" className="text-lg font-medium capitalize">
                        Nhập lại mật khẩu
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'lock'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input type="password" name="re-password" id="re-password" placeholder="Nhập lại mật khẩu"
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="!mt-5">
                    <button type="submit" className="py-2 px-4 w-full bg-rose-600 text-gray-50 rounded-md hover:bg-rose-700 duration-500">Đăng Ký</button>
                </div>
                {/* <div className="!mt-5">
                    <LoginWithGoogle/>
                </div> */}
                <div className="text-sm mt-4 text-center text-gray-600">
                    <span>Đã có tài khoản</span><Link href={'/auth'} className='text-gray-900 hover:underline duration-700 ml-2'> Đăng nhập thôi</Link>
                </div>
            </form>
        </>
     );
}

export default Page;
