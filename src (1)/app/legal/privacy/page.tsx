import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Privacy from "./Privacy";

export const metadata = {
  title: 'Chính sách bảo mật',
}
const paths =[
  {
      name:'Bảo Mật',
      slug:'#'
  }
]
export default function Page() {
  return(
    <section className="py-10">
      <Breadcrumbs paths={paths}/>
      <Privacy/>
    </section>
  )
};
