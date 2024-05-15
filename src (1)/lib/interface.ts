import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IProduct {
    id: string,
    name: string,
    slug: string,
    detail: string,
    parentId?: string,
    categoryId: string
}

export interface IVariant {
    id: string,
    productId: string,
    price: number,
    discount: number,
    quantity: number,
    count: number,
    colorId: string,
    createdAt: string,
    updatedAt: string,
    product: IProduct,
    color: IColor,
    images: Array<IImage>
}

export interface IProductCard {
    id: string,
    name: string,
    slug: string,
    detail: string,
    price: number,
    discount?: number,
    quantity: number,
    count: number,
    color: IColor,
    images: IImage[]
}

export interface IColor {
    id: string,
    name: string
}

export interface ICategory {
    id: string,
    name: string,
    slug: string,
    imageId?: string,
    parentId?: string,
    createdAt: string,
    updatedAt: string
}

export interface IGridProp{
    title:string,
    products:Array<IVariant>
}

export interface ICategoryList{
    name:string,
    icon: IconProp,
    slug:string
}

export interface Term {
    title: string,
    desc: string,
    icon: IconProp
}

export interface INavigation {
    title: string,
    slug: string,
    icon?: IconProp
    subNav?: Array<INavigation>
}

export interface User {
    id: String,
    name: String,
    slug: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    role: Role
}

export interface Role {
    id: String,
    name: String
}

export interface Form {
    email: string,
    name: string,
    password: string,
    address: string
}

export interface IImage {
    id: string,
    url: string,
    alt?: string
}

export interface ICartItem {
    product: IProductCard
    inCart: number
}