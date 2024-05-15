import Image from "next/image";
import Timer from "@/ui/Include/Timer";
import Link from "next/link";
const imageData = {
    url:'/images/discount.jpg',
    alt:'discount',
    width:1280,
    height:800,
    product:{
        name:'Loa bluetooth Cao cấp',
        desc:'Tăng cường trải nghiệm cho bạn',
        expired:"Jun 1, 2023 0:0:0",
        slug:'loa-jbl',
    }
}

var expiredTime =  new Date(imageData.product.expired).getTime();
var currentTime = new Date().getTime();
var countDownTime = expiredTime - currentTime;


function Discount() {
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto border-b-2 border-gray-100 py-20">
                <div className="relative">
                    <Image src={imageData.url} alt={imageData.alt} width={imageData.width} height={imageData.height} className="object-cover"/>
                    <div className='absolute top-6  left-6 z-[1]' >
                        <div className="max-w-xs">
                            <div className="text-rose-600 capitalize font-semibold">{imageData.product.name}</div>
                            <div className="text-gray-900 text-5xl font-semibold mt-3">{imageData.product.desc}</div>
                            <div className="mt-5"><Timer duration={countDownTime}/></div>
                            <div className="mt-10">
                                <Link href={`/products/${imageData.product.slug}`} className="btn bg-pink-600 before:border-pink-600 text-gray-50">Mua ngay</Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
     );
}

export default Discount;