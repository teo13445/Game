import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Term from "./Term";

export const metadata = {
  title: 'Điều khoản',
}
const paths =[
  {
      name:'Điều Khoản',
      slug:'#'
  }
]
export default function Page() {
  return(
    <section className="py-10">
      <Breadcrumbs paths={paths}/>
      <Term/>
    </section>
  )
};
