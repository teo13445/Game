import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Cart from "./Cart";
export const metadata = {
    title:'Giỏ Hàng'
}

const paths = [
    {
        name:'Giỏ Hàng',
        slug:'/cart'
    }
]
export default function Page() {
    return(
        <>
            <Breadcrumbs paths={paths}/>
            <Cart/>
        </>
    )
};
