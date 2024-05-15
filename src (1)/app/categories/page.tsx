import Breadcrumbs from "@/ui/Include/BreadCrumb";

export const metadata = {
  title: 'Tất Cả Danh Mục',
}
const paths=[
  {
    name:'Tất Cả Danh Mục',
    slug:'#'
  }
]
export default async function Page() {
    return ( 
      <section className="py-5 lg:py-10">
        <Breadcrumbs paths={paths} />
        <div>Category list</div>
      </section>
     );
}

