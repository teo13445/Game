import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Faq from "./Faq";

export const metadata = {
  title: 'FaQ',
}
const paths =[
  {
      name:'Câu Hỏi Thường Gặp',
      slug:'#'
  }
]
export default function Page() {
  return(
    <section className="py-10">
      <Breadcrumbs paths={paths}/>
      <Faq/>
    </section>
  )
};
