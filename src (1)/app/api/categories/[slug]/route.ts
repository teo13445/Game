import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {

    const category:any = await prisma.category.findUnique({
        where: {
            slug:params.slug
        },
    })

    const products:any = await prisma.variant.findMany({
        where:{
            product:{
                categoryId:category.id
            },
            quantity:{
                gt:0
            }
        },
        include: {
            product: {
                select:{
                    id:true,
                    name:true,
                    slug:true,
                    detail:true,
                    parentId:true,
                    categoryId:true
                }
            },
            color:{
                select:{
                    id:true,
                    name:true
                }
            }  ,
            images:{
                take:1
            }
        }
    })
  
    return  NextResponse.json({category,products});
}

