import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import { Term } from '@/lib/interface';
library.add(fas)

const terms: Array<Term> = [
    {
        title:'Vận Chuyển Nhanh',
        desc:'Miễn phí vận chuyển trên 1,000,000 VNĐ',
        icon:'shipping-fast'
    },
    {
        title:'Phục vụ 24/7',
        desc:'Hỗ trợ mọi lúc mọi nơi',
        icon:'headphones'
    },
    {
        title:'Trả hàng miễn phí',
        desc:'Hoàn tiền trong 30 ngày',
        icon:'check'
    }
]

const termList = terms.map((term,index)=>(
    <div key={index} className='flex flex-col items-center'>
        <div className='w-20 h-20 rounded-full flex items-center justify-center bg-black text-gray-50 border-8 border-gray-400'>
            <FontAwesomeIcon icon={term.icon} className='w-8 h-8'/>
        </div>
        <div className='text-xl font-semibold mt-6'>{term.title}</div>
        <div className='text-sm text-gray-700 mt-1'>{term.desc}</div>
    </div>
))

function Term() {
    return ( 
        <section>
            <div className="max-w-6xl mx-4 md:mx-auto pt-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
                    {termList}
                </div>
            </div>
        </section>
     );
}

export default Term;
<div>

</div>