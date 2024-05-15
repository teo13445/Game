import { PageProps } from "@/lib/type";
import MemberNavigator from "@/ui/Include/MemberNavigator";

function Layout({ children, params }: PageProps) {
    return ( 
        <section>
            <div className="max-w-7xl mx-4 lg:mx-auto md:pt-10 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4">
                    <div className="hidden lg:block md:col-span-1">
                        <MemberNavigator />
                    </div>
                    <div className="lg:col-span-4">
                        {children}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Layout;