import { PageProps } from "@/lib/type";

function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <div className="max-w-7xl mx-4 md:mx-auto">
                {children}
            </div>
        </>
     );
}

export default Layout;