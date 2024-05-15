import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const comments:any = await prisma.comment.findMany({
        where: {
            variantId:params.slug
        },
        select:{
            id:true,
            comment:true,
            rating:true,
            createdAt:true,
            user:{
                select:{
                    name:true,
                }
            }
        }
    })
    return  NextResponse.json(comments);
}