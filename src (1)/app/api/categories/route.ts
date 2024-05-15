import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const products:any = await prisma.category.findMany({
        select:{
            id:true,
            name:true,
            slug:true,  
            children:{
                select:{
                    children:true,
                    id:true,
                    name:true,
                    slug:true
                }
            }
        },
        
    })
  
    return  NextResponse.json(products);
}

