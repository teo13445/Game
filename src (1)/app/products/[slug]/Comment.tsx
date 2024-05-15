'use client'
import { Rating } from '@mui/material'
import { parseISO, formatDistance } from 'date-fns';
import { vi } from 'date-fns/locale'
import Pagination from './Pagination';
import useComments from '@/hook/useComments';
import CommentsLoading from '@/ui/Loading/Comments';

const ReviewList = ({variantId}:{variantId:string})=>{
    const { data, error, isLoading } = useComments(variantId);
    if(isLoading) return <div className='col-span-2'><CommentsLoading/></div>
    if(error) return <div className='col-span-2'><div>Lỗi không thể kết nối!</div></div>
    return(
        <div className='col-span-2'>              
            {
                data.length === 0 ?
                <div className='text-gray-700'>Chưa có bình luận</div> :
                    <>
                        <h2 className="text-xl font-medium text-gray-900">Đánh Giá</h2>
                        <div className="divide-y divide-gray-200 border-b border-t mt-3">
                            {
                                data.map((review: any) => {
                                    const date = parseISO(review.createdAt);
                                    return (
                                        <div key={review.id} className="flex gap-x-4 py-4">
                                            <div className="flex-none">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className='space-y-2'>
                                                        <p className="font-medium text-gray-900">{review.user.name}</p>
                                                        <Rating value={review.rating} readOnly={true} />
                                                    </div>
                                                    <time dateTime={review.createdAt}>{formatDistance(date, new Date(), { addSuffix: true, locale: vi })}</time>

                                                </div>
                                            </div>
                                            <div className="space-y-4 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: review.comment }} />
                                        </div>
                                    )
                                })}
                        </div>
                        <Pagination />
                    </>
            }
        </div>
    )
}

const WriteComment = ()=>{
    return (
        <form>
            <div className="space-y-3">
                <h2 className="text-xl font-medium text-gray-900">Đánh Giá</h2>
                <Rating value={5} />
                <div className="col-span-full">
                    <textarea id="about" name="about" rows={3}
                        className="block w-full resize-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" defaultValue={''} />
                    <p className="mt-3 text-sm leading-6 text-gray-600">Viết bình luận tại đây.</p>
                </div>
            </div>
            <div className="mt-2 flex justify-end">
                <button
                    type="submit"
                    className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                    Đăng
                </button>
            </div>
        </form>
    )
}

  export default  function Comment({variantId}:{variantId:string}) {
    
    
  return (
      <section className='pt-10 pb-5'>
          <div className="space-y-3">
              <div className="md:grid grid-cols-3 gap-x-4">
                  <ReviewList variantId={variantId}/>
                  <WriteComment/>
              </div>
          </div>
      </section>
  )
}
