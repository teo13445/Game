import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const user:any = await prisma.user.findUnique({
        where: {
            email: params.slug,
        },
        select: {
            name: true,
            email: true
         }
    })
    return  NextResponse.json({data:user});
}