'use client'
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { useAppDispatch } from '@/app/store';
import { increment} from '@/app/store/cartSlice'
import { ICartItem, IProductCard, IVariant } from "@/lib/interface";
import WishListButton from "@/app/products/[slug]/WishListButton";
import { useSession } from "next-auth/react";

library.add(fas)
const calculateDiscount = (price:number,discount:number):number=>{
    return 100-Math.round((discount/price) * 100) ;
}

function ProductVertical({product}:{product:IVariant}) {
    
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
        <div className="relative space-y-1 group mb-4">
            <div className="relative border">
                <Image src={image?.url} alt={productCard?.name} width={400} height={400} className='mx-auto'/>
                <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 duration-700">
                    <button onClick={() => dispatch(increment(stateProduct))}
                    className="w-full py-2 bg-black text-gray-50">
                        Thêm vào giỏ
                    </button>
                </div>
                <div className="absolute top-2 right-2 space-y-2 ">
                    <div className="bg-gray-50 rounded-full flex items-center justify-center">
                        {status === 'authenticated' && <WishListButton variantId={product.id} type="vertical"/>}
                    </div>
                    <div className="bg-gray-50 rounded-full">
                        <Link href={`/products/${productCard?.slug}`} className="w-6 h-6 flex items-center  justify-center ">
                            <FontAwesomeIcon icon={'eye'} className='w-4 h-4 text-gray-700'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="font-medium capitalize">{productCard?.name +' - '+productCard?.color?.name}</div>
            <div className="font-medium space-x-3">
                {
                    productCard?.discount ?
                    <>
                        <span className="text-rose-600">{productCard?.discount?.toLocaleString()} VNĐ</span> 
                        <span className="text-gray-600 line-through">{productCard?.price?.toLocaleString()} VNĐ</span>
                    </>:
                    <span className="text-rose-600">{productCard?.price?.toLocaleString()} VNĐ</span> 
                }
            </div>
            <div className="flex items-center gap-x-2">
                <Rating value={5} readOnly size='small'/>
                <span>({productCard?.quantity})</span>
            </div>
            {   productCard?.discount && 
                <div className="absolute top-2 left-2">
                    <div className="bg-rose-600 py-1 px-3 rounded-md text-gray-50 text-xs">
                        -{calculateDiscount(productCard?.price,productCard?.discount)}%
                    </div>
                </div>
            }
           
        </div>
    );
}

export default ProductVertical;