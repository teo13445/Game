import prisma from '@/lib/prismadb';
import { NextApiRequest,NextApiResponse } from 'next'
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method
    switch (method) {
        case 'POST':
            try {
                const dataPost =req.body
                await prisma.wishlist.create({
                    data:{
                        variantId:dataPost.variantId,
                        emailUser:dataPost.email
                    }
                })
        
                return res.status(201).json({message:'Thành Công'})
            } catch (error) {
                return res.status(400).end()
            }
            break;
        case 'DELETE':
            try {
                const dataDelete =req.body
                console.log(dataDelete);
                
                await prisma.wishlist.delete({
                    where:{
                        id:dataDelete.id                    
                    }
                })
                return res.status(200).json({message:'Thành Công'})
            } catch (error) {                
                return res.status(400).end()
            }
              
        default:
            return res.status(405).end();
            break;
    }

};