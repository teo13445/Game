import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const product:any = await prisma.product.findMany({
        where: {
            parentId:params.slug
        },
        select:{
            id:true,
            name:true,
            slug:true,
            image:true
        },
    })
    return  NextResponse.json(product);
}