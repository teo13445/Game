import getProducts from '@/lib/fetchData/getProducts';
import Breadcrumbs from '@/ui/Include/BreadCrumb';
import GridLayout from '@/ui/GridLayout';
import Navigator from '@/ui/Include/Navigator';
import { IVariant } from '@/lib/interface';

export const metadata = {
  title: 'Tất Cả Sản Phẩm',
}

export default async function Page() {
  const productsData : Promise<Array<IVariant>> = getProducts()
    
  const products = await productsData
  
  const paths=[
    {
      name:'Tất Cả Sản Phẩm',
      slug:'#'
    }
  ]
  return (
    <section className='py-5 lg:py-10'>
      <Breadcrumbs paths={paths}/>
      <div className='md:grid grid-cols-5 gap-x-2'>
        {/* @ts-expect-error Async Server Component */}
        <Navigator />
        <GridLayout title={'Tất Cả Sản Phẩm'} products={products}/>
      </div>
    </section>
  )
}
