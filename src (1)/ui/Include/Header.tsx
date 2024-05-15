
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import NavHeader from "./NavHeader";
import IconsButton from "./IconsButton";

function Header() {
    return ( 
        <>
            <section className="bg-black">
                <div className="max-w-7xl mx-4 md:mx-auto">
                    <div className="flex justify-between items-center py-3">
                        <div className="text-sm space-x-2">
                            <span className="text-gray-200">Giảm giá mùa hè cho tất cả các thiết bị điện tử và chuyển phát nhanh miễn phí - GIẢM GIÁ 50%!</span>
                            <Link href={'/products'} className="font-bold text-gray-50">Xem Ngay</Link>
                        </div>
                        <div className="relative">
                            <button className="flex items-center gap-x-1 text-gray-50">
                                <span>English</span>
                                <FontAwesomeIcon icon={'angle-down'} className="w-4 h-4 text-gray-50"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <header className="shadow sticky top-0 bg-white z-10">
                <div className="max-w-7xl mx-4 md:mx-auto p-0 md:py-4">
                    <div className="md:flex justify-between items-center">
                        <Link href={'/'} className='text-2xl font-bold text-gray-900 hidden md:inline'> <span className="uppercase text-rose-600">s</span> <span>-</span> <span>m</span> <span>a</span> <span>r</span> <span>k</span> <span>e</span> <span>t</span> </Link>
                        <NavHeader/>
                        <IconsButton/>
                    </div>
                </div>
            </header>
        </>
     );
}

export default Header;
