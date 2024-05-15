const URL = process.env.URL_API

export default async function getCategories() {
    
    const categories = await fetch(`${URL}/api/categories`)
    
    if (!categories.ok) {
        throw new Error("Kết nối thất bại");
    }    
    return categories.json()
};
