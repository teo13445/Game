import { NextApiRequest,NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prismadb';

const serverAuth = async (req:NextApiRequest)=>{
    const session = await getSession({req});
    
    if (!session?.user?.email) {
        throw new Error('Chưa Đăng Nhập');
    }

    const currentUser = await prisma.user.findUnique({
        where:{
            email: session.user.email
        },
        include:{
            _count:{
                select:{
                    wishlist:true
                }
            }
        }
    });

    if (!currentUser) {
        throw new Error('Chưa Đăng Nhập');
    }

    return {currentUser}
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        const{currentUser}= await serverAuth(req)
        
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).end()
    }
};