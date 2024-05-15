'use client'
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from "next/link";
import { useAppDispatch } from '@/app/store';
import { increment} from '@/app/store/cartSlice'
import { ICartItem, IProductCard, IVariant } from "@/lib/interface";
import WishListButton from "@/app/products/[slug]/WishListButton";
import { useSession } from "next-auth/react";

const calculateDiscount = (price:number,discount:number):number=>{
    return 100-Math.round((discount/price) * 100) ;
}

function ProductHorizontal({product}:{product:IVariant}) {
    
    const productCard:IProductCard =  {
        id:product?.id,
        name:product?.product?.name,
        slug:product?.product?.slug,
        detail:product?.product?.detail,
        price: product?.price,
        discount: product?.discount,
        quantity:product?.quantity,
        count:product?.count,
        color:product?.color,
        images:product?.images
    }
    
    const dispatch = useAppDispatch()

    const stateProduct : ICartItem = {
        product:productCard,
        inCart:1,
    }
    const image = (productCard?.images ?? [])[0]
    const {status} = useSession()

    return ( 
        <div className="md:flex p-4 bg-gray-50 mb-2 gap-x-2 justify-between items-center">      
            <div className="md:flex gap-x-3">
                <Image src={image?.url} alt={productCard?.name} width={100} height={100} className="border w-full md:w-auto"/>
                <div className="flex-col md:flex max-w-sm justify-between">
                    <div>
                        <div className="font-medium capitalize text-sm md:text-base">{productCard?.name} - {productCard?.color?.name}</div>
                        <div className="flex items-center gap-x-2">
                            <Rating value={5} readOnly size='small' />
                            <span className="text-xs md:text-sm">({productCard?.quantity})</span>
                        </div>
                    </div> 
                    <div className="truncate text-sm text-gray-600">{productCard?.detail}</div>
                </div>
                <div className="md:flex flex-col gap-y-2">
                    {
                        productCard?.discount ?
                        <>
                            <span className="text-rose-600 text-base md:text-xl mr-3 md:mr-0">{productCard?.discount?.toLocaleString()} VNĐ</span> 
                            <span className="text-gray-600 line-through text-sm">{productCard?.price?.toLocaleString()} VNĐ</span>
                        </>:
                        <span className="text-rose-600 text-xl">{productCard?.price?.toLocaleString()} VNĐ</span> 
                    }
                    {productCard?.discount &&
                        <div className="mb-2 md:mb-0">
                            <span className="bg-rose-600 py-1 px-3 rounded-md text-gray-50 text-xs">
                                -{calculateDiscount(productCard?.price, productCard?.discount)}%
                            </span>
                        </div>
                    }
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex gap-x-2">
                    {status === 'authenticated' && <WishListButton variantId={product.id} type="horizontal"/>}
                    <button onClick={() => dispatch(increment(stateProduct))}
                    className="flex-1 bg-gray-200 p-1 rounded-sm">
                            <FontAwesomeIcon icon={'shopping-cart'} className='w-4 h-4 text-gray-600' />
                    </button>
                </div>
                <div className="">
                    <Link href={`products/${productCard?.slug}`} className="md:px-6 py-1 w-full md:w-auto inline-block text-center border-gray-600 border rounded-md hover:border-rose-600 hover:text-rose-600 duration-300">
                        Chi tiết
                    </Link>
                </div>
            </div>  
        </div>
    );
}

export default ProductHorizontal;