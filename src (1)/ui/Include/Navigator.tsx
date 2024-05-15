
import getCategories from "@/lib/fetchData/getCategories";
import Navigations from "./Navigations";
export interface INavigation {
    id:string,
    name:string,
    slug:string,
    children:Array<INavigation>
}
export default async function Navigator() {
    const categoriesData: Promise<INavigation[]> = getCategories()
    const categories = await categoriesData

    return (
        <>
            <Navigations navigations={categories}/>
        </>
    );
}