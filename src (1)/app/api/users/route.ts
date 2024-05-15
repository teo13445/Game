import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const users:any = await prisma.user.findMany({
        select: {
            name: true,
            email: true
         }
    })
  
    return  NextResponse.json({data:users});
}

