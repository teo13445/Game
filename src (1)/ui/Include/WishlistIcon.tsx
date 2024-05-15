import useWishlist from "@/hook/useWishlist"
import Link from "next/link"

function Number (){
    const {data,error,isLoading}= useWishlist()
    if (isLoading||error||data.length==0) {
        return   null
    }
    return   <div className="absolute top-0 right-0 z-10 bg-red-600 text-xs -translate-y-1/2 translate-x-1/2 w-5 h-5 text-white flex items-center justify-center rounded-full">{data.length}</div>
}

export default function WishlistIcon() {
 
    return(
        <Link href={'/member/wishlist'} className="md:-order-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <Number/>
        </Link>
    )
};
