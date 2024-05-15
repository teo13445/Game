import getProduct from "@/lib/fetchData/getProduct";
import { redirect } from "next/navigation";
import Product from "./Product";
import Breadcrumbs from "@/ui/Include/BreadCrumb";
import ProductSection from "@/ui/Product/ProductSection";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const productData: Promise<any> = getProduct(params.slug)
    const data = await productData
    if (data) {
        return {
            title: data.product.name,
        };
    } else {
        redirect('/')
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const productData: Promise<any> = getProduct(params.slug)
    const data = await productData

    const paths=[
        {
          name:'Sản Phẩm',
          slug:'/products'
        },
        {
          name:data.product.name,
          slug:'#'
        }
      ]
    return ( 
        <section className="py-10"> 
            <Breadcrumbs paths={paths}/>
            <Product product={data.product} child={data.children}/>
            {/* @ts-expect-error Async Server Component */}
            <ProductSection title="Tương Tự" about="Các sản phẩm tương tự" isSlider={false} query={'method=sale'} />
        </section>
     );
}
