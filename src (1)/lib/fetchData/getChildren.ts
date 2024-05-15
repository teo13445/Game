const URL = process.env.URL_API

export default async function getChildren(parentId:string) {
    
    const products = await fetch(`${URL}/api/products/children/${parentId}`)
    if (!products.ok) {
        throw new Error("Kết nối thất bại");
    }    
    return products.json()
};
