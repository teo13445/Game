"use client";
import {ICategoryList} from '@/lib/interface'
import CategoryCard from "./Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const categories : Array<ICategoryList> = [
    {
        name:'Điện Thoại',
        icon: 'mobile',
        slug:'/mobile'
    },
    {
        name:'Camera',
        icon:'camera',
        slug:'/camera',
    },
    {
        name:'Máy Tính',
        icon:'computer',
        slug:'/computer',
    },
    {
        name:'Tay Cầm',
        icon:'gamepad',
        slug:'/gamepad',
    },
    {
        name:'Tai Nghe',
        icon:'headphones',
        slug:'/head-phones',
    },
    {
        name:'Đồng Hồ Thông Minh',
        icon:'clock',
        slug:'/clock',
    },
    {
        name:'Laptop',
        icon:'laptop',
        slug:'/laptop',
    },
]


function Categories() {

    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto border-b-2 border-gray-100 py-20">
                <div className="section-title">
                    Danh mục
                </div>
                <div className="flex items-end gap-x-20 mt-3">
                    <span className="text-4xl font-semibold capitalize">Tìm theo mục</span>
                </div>
                <div className="mt-10">
                    <>
                        <Swiper breakpoints={{
                            // when window width is >= 426
                            426: {
                                width: 426,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768
                            768: {
                                width: 768,
                                slidesPerView: 4,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 5,
                                spaceBetween:8 

                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 6,
                                spaceBetween:8 
                            },
                        }} slidesPerView={2} spaceBetween={4} modules={[Pagination]} loop={true}  className="">
                            {categories?.map((category, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <CategoryCard key={index} category={category} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
     );
}

export default Categories;