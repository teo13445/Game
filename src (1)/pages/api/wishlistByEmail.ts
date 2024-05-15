import { NextApiRequest,NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prismadb';

const serverAuth = async (req:NextApiRequest)=>{
    const session = await getSession({req});
    
    if (!session?.user?.email) {
        throw new Error('Chưa Đăng Nhập');
    }

    const data:any = await prisma.wishlist.findMany({
        where: {
            emailUser: session?.user?.email,
        },
        select: {
            id:true,
            variant:{
                select:{
                    id:true,
                    color:{
                        select:{
                            name:true
                        }
                    },
                    product:{
                        select:{
                            name:true,
                            slug:true
                        }
                    },
                    images:{
                        take:1,
                        select:{url:true}
                    },
                    price:true,
                    discount:true,
                    quantity:true
                }
            }
         }
    })

    if (!data) {
        throw new Error('Chưa Đăng Nhập');
    }

    return {data}
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        const{data}= await serverAuth(req)
        
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).end()
    }
};