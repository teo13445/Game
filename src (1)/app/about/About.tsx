import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck,faX} from '@fortawesome/free-solid-svg-icons'
import Breadcrumbs from '@/ui/Include/BreadCrumb'
const paths =[
    {
        name:'Về Chúng Tôi',
        slug:'#'
    }
]
export default function About() {
    return (
        <section className='py-10'>
            <Breadcrumbs paths={paths}/>
            <section className="pb-10 text-gray-900">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đôi chút về NextJS</h1>
                    <p className="mt-6 text-xl leading-8">
                        Next.js là một framework JavaScript cho phép bạn xây dựng các trang web tĩnh siêu nhanh và cực kỳ thân thiện với người dùng, cũng như các ứng dụng web sử dụng React. Nó được phát triển dưới dạng open-source bổ sung các khả năng tối ưu hóa như render phía máy chủ (SSR) và tạo trang web static. Next.js xây dựng dựa trên thư viện React, có nghĩa là các ứng dụng Next.js sử dụng core của React. Với việc SSR thì NextJS giới thiệu là sẽ cung cấp cho chúng ta một số thứ như hiệu năng tốt hơn so với ứng dujgn CSR; mang lại khả năng SEO tốt hơn mà CSR không có như là việc chia sẻ bài viết
                    </p>
                    <div className="mt-10 ">
                        <p className='max-w-2xl'>
                        Next.js là một framework JavaScript cho phép bạn xây dựng các trang web tĩnh siêu nhanh và cực kỳ thân thiện với người dùng, cũng như các ứng dụng web sử dụng React. Next.js cung cấp cho chúng ta các ưu điểm sau:
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 h-5 w-5 flex-none text-lime-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">SEO</strong> Mạng lại khả năng SEO tốt.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 h-5 w-5 flex-none text-lime-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">UX</strong> Trải nghiệm người dùng tốt hơn.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 h-5 w-5 flex-none text-lime-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Render</strong> Làm việc với cơ chế SSG (Static Site Generation), SSR (Server Side Rendering) và cả CSR (Client Side Rendering).
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 h-5 w-5 flex-none text-lime-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Build</strong> Khởi tạo nhanh chóng.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 h-5 w-5 flex-none text-lime-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">React</strong> Hỗ trợ nền React cực kì tốt.
                                </span>
                            </li>
                        </ul>
                        <p className="mt-8"> Tuy nhiên, Next.js cũng có một số nhược điểm như: </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faX} className="mt-1 h-4 w-4 flex-none text-red-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Plugin</strong> Không có quá nhiều plugin thích ứng.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <FontAwesomeIcon icon={faX} className="mt-1 h-4 w-4 flex-none text-red-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Router</strong> Giới hạn bởi việc chỉ sử dụng bộ định tuyến trên tệp của nó.
                                </span>
                            </li>

                        </ul>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ngành Thương Mại Điện Tử</h2>
                        <p className="mt-6 text-justify">
                        Hiện nay, thương mại điện tử đang phát triển rất nhanh chóng và trở thành một phần không thể thiếu trong cuộc sống của chúng ta. Các mô hình kinh doanh thương mại điện tử phổ biến nhất hiện nay là B2B (Business to Business), B2C (Business to Consumer), C2C (Consumer to Consumer), C2B (Consumer to Business), B2G (Business to Government), C2G (Consumer to Government).
                        <br />Theo thông tin từ Cục thương mại điện tử và Công nghệ thông tin thì ngành thương mại điện tử Việt Nam đang có mức tăng trưởng vào khoảng 25% và lượng doanh nghiệp đầu tư và lĩnh vực này ngày càng tăng.
                        </p>
                        <figure className="mt-10 border-l border-rose-600 pl-9 bg-gray-100 max-w-2xl">
                            <blockquote className="font-semibold text-gray-900">
                                <p className='pt-4'>
                                    “Chúng ta không thể cứ tiếp tục làm thứ đã từng hữu ích một thời, mọi thứ quanh bạn đều đang thay đổi. Để thành công, hãy đón đầu thay đổi.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 flex gap-x-4 pb-4">
                                <img
                                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                    src="https://i0.wp.com/perell.com/wp-content/uploads/2018/05/Perell_Sam_Walton.png?w=750&ssl=1"
                                    alt="Sam Walton"
                                />
                                <div className="text-sm leading-6">
                                    <strong className="font-semibold text-gray-900">Sam Walton</strong> – Nhà sáng lập WalMart
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
        </section>

    )
}
