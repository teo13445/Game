import Confirm from "./Confirm";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: params.slug,
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return(
        <section className="py-20">
            <Confirm slug={params.slug}/>
        </section>
    )
};
