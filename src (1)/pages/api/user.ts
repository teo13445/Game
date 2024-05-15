import prisma from '@/lib/prismadb';
import { NextApiRequest,NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'POST'){
        return res.status(405).end();
    }

    try {
        const{email,name,password,address}=req.body;

        const hashedPassword = await bcrypt.hash(password,12);
        const user =  await prisma.user.create({
            data:{
                email,name,address,hashedPassword
            }
        })

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).end()
    }
};