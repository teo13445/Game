import getProductsByFilter from "@/lib/fetchData/getProductsByFilter";
import Image from "next/image";
import Link from "next/link";

export default async function Review(props:any) {
       
  const productsData: Promise<any> = getProductsByFilter(props.query)
  const products = await productsData
  const positionIndex = [
    'md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2',
    'md:col-start-3 md:col-span-1 md:row-span-1 ',
    'md:col-start-4 md:col-span-1 md:row-span-1 ',
    'md:col-span-2 md:row-start-2 md:row-span-1'
  ]
    return ( 
        <section className="py-5 md:py-20">
            <div className="max-w-7xl mx-4 md:mx-auto ">
                <div className="section-title">
                    Xem Thêm
                </div>
                <div className="flex items-end gap-x-20 mt-3">
                    <span className="text-4xl font-semibold capitalize">Hàng mới</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-y-2 md:gap-8 md:max-h-[640px] mt-10">
                    {products.map((product:any,index:number)=>(
                        <div className={`${positionIndex[index]} relative`} key={index}>
                            <Image src={product.images[0].url} alt={product.images[0].alt} className='w-full md:!h-full object-contain' width={500} height={500}/>
                                <div className="absolute inset-x-0 bottom-6 px-4 text-gray-50 z-[2] space-y-2">
                                    <div className="text-l font-semibold">{product.product.name}</div>
                                    <div className="truncate text-xs text-gray-200">{product.product.detail}</div>
                                    <Link href={`/product/${product.slug}`} className='font-medium inline-block underline text-sm'>
                                        Xem Thêm
                                    </Link>
                                </div>
                            <div className="bg-black absolute inset-0 bg-opacity-50 z-[1]"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}