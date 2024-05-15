import getCategory from "@/lib/fetchData/getCategory";
import { redirect } from "next/navigation";
import Breadcrumbs from "@/ui/Include/BreadCrumb";
import GridLayout from "@/ui/GridLayout";
import Navigator from "@/ui/Include/Navigator";
import { ICategory, IVariant } from "@/lib/interface";
interface IDataFetch {
  category:ICategory,
  products:Array<IVariant>
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const dataFetch : Promise<IDataFetch> = getCategory(params.slug)
    
  const data = await dataFetch
  
  if (data) {
      return {
          title: data.category.name,
      };
  } else {
      redirect('/')
  }
}

export default async function Page({ params }: { params: { slug: string } }) {

  const dataFetch: Promise<IDataFetch> = getCategory(params.slug)
  const data = await dataFetch
  
  const paths = [
    {
      name: 'Danh Mục',
      slug: '/categories'
    },
    {
      name: data.category.name,
      slug: '#'
    }
  ]
  return (

    <section className='py-4 lg:py-10'>
        <Breadcrumbs paths={paths}/>
      <div className='md:grid grid-cols-5 md:pt-10 gap-x-2'>
        {/* @ts-expect-error Async Server Component */}
        <Navigator />
        <GridLayout title={data.category.name} products={data.products}/>
      </div>
    </section>
  )
}
