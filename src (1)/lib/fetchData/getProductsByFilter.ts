const URL = process.env.URL_API

export default async function getProductsByFilter(query:string) {
    
    const products = await fetch(`${URL}/api/products?${query}`)
    
    if (!products.ok) {
        throw new Error("Kết nối thất bại");
    }    
    return products.json()
};
