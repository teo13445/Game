import useMember from "@/hook/useMember";
import useWishlist from "@/hook/useWishlist";
import axios from "axios";
import { useEffect, useState } from "react";
import { mutate } from "swr";



export default function WishListButton({ variantId, type }: { variantId: string, type: string }) {

    const { data: wishlist, } = useWishlist();
    const { data: member, error, isLoading } = useMember();
    const found = wishlist?.find((item: any) => item.variant.id === variantId);
    const [isLike, setLike] = useState<boolean>(false);

    async function addToWishList(payload: any) {

        axios.post(`/api/wishlist`, payload).then((res) => {setLike(true),mutate('/api/wishlistByEmail')}
        ).catch(err => console.log(err));
    }

    async function removeFromWishList(payload: any) {

        axios.delete(`/api/wishlist`, { data: payload }).then(
            res => {setLike(false),mutate('/api/wishlistByEmail')}
        ).catch(err => console.log(err));

    }

    useEffect(() => {
        if (found) {
            setLike(true);
        } else {
            setLike(false);
        }
    }, [found, variantId])

    if (isLike) return (
        <button onClick={() => removeFromWishList({ id: found.id })}
            className={`${type == 'product' ? 'border rounded-md py-2 px-2.5 border-red-600 bg-red-600' : `${type == 'horizontal' ? 'flex-1 bg-red-600' : ' '}`}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${type == 'product' ? 'w-6 h-6 ' : 'w-4 h-4'} ${type == 'vertical' ? ' text-red-600 ' : ' text-white '} mx-auto `}>
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </button>
    )

    return (
        <button onClick={() => addToWishList({ email: member.email, variantId: variantId })}
            className={`${type == 'product' ? 'border rounded-md py-2 px-2.5 border-gray-900' : `${type == 'horizontal' ? 'flex-1 bg-gray-200' : ' '}`}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${type == 'product' ? 'w-6 h-6 ' : 'w-4 h-4'} text-gray-900 mx-auto`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </button>
    )
};
