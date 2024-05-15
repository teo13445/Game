import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Payment from "./Payment";
export const metadata = {
    title: 'Thanh Toán'
}

const paths = [
    {
        name: 'Giỏ Hàng',
        slug: '/cart'
    },
    {
        name: 'Thanh Toán',
        slug: '#'
    }
]
export default function Page() {
    return (
        <>
            <Breadcrumbs paths={paths} />
            <Payment />
        </>
    )
};
