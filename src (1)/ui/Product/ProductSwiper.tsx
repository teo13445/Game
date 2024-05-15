'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import ProductVertical from "./ProductVertical";
import { IVariant } from "@/lib/interface";

export default function ProductSwiper({products}:{products:Array<IVariant>}) {
    return(
        <>
            <Swiper breakpoints={{
                768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween:8
                },
                1280: {
                    width: 1280,
                    slidesPerView: 4,
                    spaceBetween:16 
                },
            }} slidesPerView={1} spaceBetween={0}
            modules={[Navigation,Pagination]} loop={true} navigation={true} className="product-section">
                {products.map((product,index:number)=>{
                    return(
                        <SwiperSlide key={index}>
                            <ProductVertical product={product}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
};
