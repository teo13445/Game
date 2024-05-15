import { PageProps } from "@/lib/type";

export default function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <div className="max-w-7xl mx-4 md:mx-auto">
                {children}
            </div>
        </>
     );
}
