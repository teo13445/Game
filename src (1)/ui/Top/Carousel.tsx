'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
const carousels = [
    {
        img:'/images/slide1.jpg',
    },
    {
        img:'/images/slide2.jpg',
    },
    {
        img:'/images/slide3.jpg',
    },
]
export default function Carousel() {
    return (
        <div className="col-span-4 mt-4 md:mt-0">
          <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper" >
             {
                carousels.map((carousel,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <Image src={carousel.img} alt="carousel" width={1080} height={300} className="object-contain"/>
                        </SwiperSlide>
                    )
                })
             }
          </Swiper>
        </div>
      );
};
