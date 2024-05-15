import Link from 'next/link';
import Timer from '../Include/Timer';
import getProductsByFilter from '@/lib/fetchData/getProductsByFilter';
import ProductSwiper from './ProductSwiper';
import { IVariant } from '@/lib/interface';

export default async function ProductSection(props:any) {
    
  const productsData: Promise<Array<IVariant>> = getProductsByFilter(props.query)
  const products = await productsData
    const time = props.countTime - new Date().getTime()
    return ( 
        <section className='py-5 md:py-20'>
            <div className="max-w-7xl mx-4 md:mx-auto border-b-2 border-gray-100 ">
                <div className="section-title">
                    {props.title}
                </div>
                <div className={`flex md:items-end gap-x-2 md:gap-x-20 items-center mt-3 ${props.timer ? 'justify-start' :'justify-between'}`}>
                    <span className="text-lg md:text-4xl  font-semibold capitalize">{props.about}</span>
                    {props.timer && <Timer duration={time ? time : 0} />}
                    {props.btnTop &&<button className="btn bg-rose-600 text-gray-50 before:border-rose-600"> Xem thêm
                    </button>}
                </div>
                <div className="mt-10">
                    <ProductSwiper products={products} />
                </div>
                {
                    props.btnBottom && <div className="mt-14 flex justify-center">
                    <Link href={'/products'} className="btn bg-rose-600 text-gray-50 before:border-rose-600">
                        Xem thêm
                    </Link>
                </div>
                }
            </div>
        </section>
     );
}