import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import SwiperCore,{ FreeMode, Navigation, Thumbs } from "swiper";
import { IImage } from "@/lib/interface";
import Image from "next/image";

export default function Slider({ images }: { images: Array<IImage> }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const sliders = images?.map((image) => {
    return (
      <SwiperSlide key={image.id} className="flex items-center justify-center p-3">
        <Image src={image.url} alt={image.alt == undefined ? '#' : image.alt} width={500} height={500} className="rounded-md"/>
      </SwiperSlide>
    );
  })

  return (
    <div className='space-y-4'>
      <Swiper
        loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}
        className="border rounded-md" >
        {sliders}
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}
       className="divide-x-2" >
        {sliders}
      </Swiper>
    </div>
  );
}
