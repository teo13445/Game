import { PageProps } from "@/lib/type";
import Breadcrumbs from "@/ui/Include/BreadCrumb";

const paths = [
    {
        name:'Giỏ Hàng',
        slug:'/cart'
    },
    {
        name:'Hoàn Tất',
        slug:'#'
    }
]
function Layout({ children, params }: PageProps) {
    return ( 
        <>  
            <Breadcrumbs paths={paths}/>
            {children}
        </>
     );
}

export default Layout;