'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link';
import Image from 'next/image';

import { useAppSelector, useAppDispatch } from '@/app/store';
import { increment, decrement, clearById, clearAll, totalPriceSelector } from '@/app/store/cartSlice'
import { ICartItem } from '@/lib/interface';

function CartList({ item }: { item: ICartItem }) {
    const total = item.product.discount ? item.inCart * item.product.discount : item.inCart * item.product.price

    const dispatch = useAppDispatch()

    function increase() {
        const stateProduct: ICartItem = {
            product: item.product,
            inCart: 1,
        }
        dispatch(increment(stateProduct))
    }

    function decrease() {
        dispatch(decrement(item.product.id))
    }
    const image = (item.product.images || [])[0];

    return (
        <div className="flex md:grid grid-cols-4 md:px-10 gap-x-3 items-center py-7 lg:border border-gray-100 hover:border-gray-600 rounded-md relative group" >
            <div className="flex gap-x-1 lg:gap-x-5  items-center min-w-[240px]">
                <Image src={image?.url} alt={item.product.name} className='w-20 h-20 object-cover' width={80} height={80} />
                <div className='space-y-1'>
                    <div className='text-sm font-bold text-gray-900'>{item.product.name}</div>
                    <div className='text-xs text-gray-600'>{item.product.color.name}</div>
                </div>
            </div>
            <div className="text-center text-sm md:text-base min-w-[140px]">{item.product.discount ? item.product.discount.toLocaleString() : item.product.price.toLocaleString()} VNĐ </div>
            <div className="flex items-center justify-center">
                <button onClick={decrease} className='w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border rounded-l-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50'><FontAwesomeIcon icon={'minus'} className='w-4 h-4' /></button>
                <input type="number" value={item.inCart} disabled className='w-10 p-0 h-8 lg:h-10 border-y text-center' />
                <button onClick={increase} className='w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border rounded-r-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50'><FontAwesomeIcon icon={'plus'} className='w-4 h-4' /></button>

            </div>
            <div className="text-right min-w-[140px]">{total.toLocaleString()} VNĐ</div>
            <button onClick={() => { dispatch(clearById(item.product.id)) }}
                className='absolute top-2 right-3 hidden group-hover:inline'><FontAwesomeIcon icon={'trash'} className='w-4 h-4 text-gray-600 hover:text-red-600' /></button>
        </div>
    )


}

export default function Cart() {
    const dispatch = useAppDispatch()

    const cartItems = useAppSelector((state) => state.cart.cartItems)
    const totalPrice = useAppSelector(totalPriceSelector)
    return (
        <>
            <Link href='/' className="inline-block">
                <div className="border border-gray-400 rounded-md py-2 px-4 flex gap-x-2 items-center hover:bg-gray-100">
                    <FontAwesomeIcon icon={'arrow-left-long'} className='w-4 h-4' />
                    <span>Trở Về</span>
                </div>
            </Link>
            <section>
                <div className="py-5 md:pt-10 md:pb-20 overflow-x-auto">
                    {cartItems.length == 0 ?
                        <div>Giỏ Hàng Trống</div> :
                        <>
                            <div className='space-y-3 overflow-x-auto'>
                                <div className="flex md:grid grid-cols-4 gap-x-3 lg:px-10 l:py-6">
                                    <div className="text-left font-medium min-w-[240px]">Sản Phẩm</div>
                                    <div className="text-center font-medium min-w-[140px]">Đơn Giá</div>
                                    <div className="text-center font-medium min-w-[110px]">Số Lượng</div>
                                    <div className="text-right font-medium min-w-[140px]">Thành Tiền</div>
                                </div>
                                {cartItems.map((item, index) => (<CartList key={index} item={item} />))}
                            </div>
                            <div className="flex justify-end mt-3">
                                <button onClick={() => { dispatch(clearAll()) }}
                                    className='inline py-3 px-6 rounded-md bg-rose-600 text-gray-50 before:border-rose-600'>Xóa Hết</button>
                            </div>
                        </>
                    }

                </div>
            </section>
            <section>
            <div className="md:grid grid-cols-3">
                        <form action="">
                            <div className="flex flex-col items-end gap-y-3">
                                <input type="text" placeholder='Gán Mã Giảm Giá Tại Đây' className='w-full border rounded-md py-2 px-4' />
                                <button type='submit' className='inline py-3 px-6 rounded-md bg-rose-600 text-gray-50 before:border-rose-600'>Sử Dụng</button>
                            </div>
                        </form>
                        <div />
                        <div className='border border-gray-900 rounded-md p-5 mt-5 md:mt-0'>
                            <div className='text-xl font-medium'>Tổng Quan</div>
                            <div className='divide-y'>
                                <div className='flex justify-between py-4'><span className='font-medium'>Tạm Tính:</span><span className='text-sm'>{totalPrice.toLocaleString()} VNĐ</span></div>
                                <div className='flex justify-between py-4'><span className='font-medium'>Giảm Giá:</span><span className='text-sm'>- 0 VNĐ</span></div>
                                <div className='flex justify-between py-4'><span className='font-medium'>Tổng:</span><span className='font-medium'>{totalPrice.toLocaleString()} VNĐ</span></div>
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Link href={'/cart/payment'} className='w-full mx-6 py-2 text-center bg-rose-600 text-gray-50 rounded-md font-medium'>Thanh Toán</Link>
                            </div>
                        </div>
                    </div>
            </section>
        </>

    );
}

