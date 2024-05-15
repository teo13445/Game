const URL = process.env.URL_API

export default async function getCategory(slug:string) {
    
    const categoryData = await fetch(`${URL}/api/categories/${slug}`)
    const category = await categoryData.json();

    if (!categoryData.ok) {
        throw new Error("Kết nối thất bại");
    }
      
    return category
};
