const URL = process.env.URL_API

export default async function getProduct(slug:string) {
    
    const productData = await fetch(`${URL}/api/products/${slug}`)
    const product = await productData;

    if (!productData.ok) {
        throw new Error("Kết nối thất bại");
    }  
      
    return product.json()
};
