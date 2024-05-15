import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return(
        <div className="relative">
            <Image src={'/images/404.jpg'} width={1920} height={600} className="object-contain" alt="404"/>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/4 z-10 text-center">
                <div className="text-5xl text-white animate-bounce font-bold">Bạn đi lạc à ?</div>
                <p className="mt-3 text-sm text-gray-100">Đây là tận cùng vũ trụ mà bạn đi đâu vậy!</p>
                <div className="mt-10">
                <Link href={'/'} className="btn bg-rose-600 text-gray-50 before:border-rose-600 font-medium"> Trở Về Thôi</Link>
                </div>
            </div>
        </div>
    )
};
