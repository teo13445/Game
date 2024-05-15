import { ICategoryList } from "@/lib/interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
library.add(fas)

function Category({category}:{category:ICategoryList}) {
    return ( 
        <Link href={`/category${category.slug}`}>
            <div className="flex flex-col gap-y-2 items-center border rounded-md hover:bg-rose-600 md:p-6 group">
                <FontAwesomeIcon icon={category.icon} className="!w-14 !h-14 group-hover:text-gray-50"/>
                <div className="font-medium capitalize text-center truncate px-2 group-hover:text-gray-50">{category.name}</div>
            </div>
        </Link>
    );
}

export default Category;