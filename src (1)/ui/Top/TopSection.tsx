
import Navigator from "@/ui/Include/Navigator";
import Carousel from "./Carousel";

export default async function TopSection(){
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-4 md:py-10">
                <div className="md:grid grid-cols-5 gap-x-10">
                    {/* @ts-expect-error Async Server Component */}
                    <Navigator/>
                    <Carousel/>
                </div>
            </div>
        </section>
     );
}