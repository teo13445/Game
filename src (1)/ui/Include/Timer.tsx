'use client'
import { useEffect, useState } from "react";

function Timer({duration}:{duration:number}) {
    const [time,setTime] = useState(duration);

    useEffect(()=>{
        setTimeout(() => {
            setTime(time -1000)
        }, 1000);
    },[time]);

    const formatTime = (milliseconds:number)=>{
        let total_seconds = Math.floor(milliseconds/1000);
        let total_minutes = Math.floor(total_seconds/60);
        let total_hours = Math.floor(total_minutes/60);
        let days = Math.floor(total_hours/24);

        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 24;

        return(
            <div className="flex gap-x-2 md:gap-x-4 items-end">
                <div className="flex flex-col items-center">
                    <span className='text-sm font-medium'>
                        Ngày
                    </span>
                    <time className='font-bold text-lg md:text-3xl'>
                        {days}
                    </time>
                </div>
                <span className='text-rose-600 text-lg md:text-3xl'>:</span>
                <div className="flex flex-col items-center">
                    <span className='text-sm font-medium'>
                        Giờ
                    </span>
                    <time className='font-bold text-lg md:text-3xl'>
                        {hours}
                    </time>
                </div>
                <span className='text-rose-600 text-lg md:text-3xl'>:</span>
                <div className="flex flex-col items-center">
                    <span className='text-sm font-medium'>
                        Phút
                    </span>
                    <time className='font-bold text-lg md:text-3xl'>
                        {minutes}
                    </time>
                </div>
                <span className='text-rose-600 text-lg md:text-3xl'>:</span>
                <div className="flex flex-col items-center">
                    <span className='text-sm font-medium'>
                        Giây
                    </span>
                    <time className='font-bold text-lg md:text-3xl'>
                        {seconds}
                    </time>
                </div>
            </div>
        )
    }

    return ( 
        <>
            {formatTime(time)}
        </>
    );
}

export default Timer
;