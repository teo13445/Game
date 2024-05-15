const URL = process.env.URL_API

export default async function getProducts() {
    
    const products = await fetch(`${URL}/api/products`)
    
    if (!products.ok) {
        throw new Error("Kết nối thất bại");
    }    
    return products.json()
};
