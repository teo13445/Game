'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Confirm(props:any) {
    return(
        <>
            <p className="text-3xl text-center"> Cảm ơn bạn đã đặt hàng </p>
            <p className="text-center text-gray-600 mt-3">Mã đơn hàng của bạn</p>
            <div className="text-center mt-3 py-4 bg-rose-100 text-rose-600 max-w-xs mx-auto rounded-md cursor-pointer group relative"
                onClick={() => { navigator.clipboard.writeText(props.slug) }}>
                {props.slug}
                <FontAwesomeIcon icon={'copy'} className="w-5 h-5 absolute right-3 hidden group-hover:inline top-1/2 -translate-y-1/2"/>
            </div>
        </>
    )
};
