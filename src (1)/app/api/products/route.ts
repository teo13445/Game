import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const method = searchParams.get('method');
    const limit = searchParams.get('limit');

    const limitNumber = limit != null ? parseInt(limit) : 4;
    var products:any 
    switch (method) {
      case "sale":
        products = await prisma.variant.findMany({
          where: {
            quantity: {
              gt: 0,
            },
          },
          take: limitNumber,
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                detail: true,
                parentId: true,
                categoryId: true,
              },
            },
            color: {
              select: {
                id: true,
                name: true,
              },
            },
            images: {
              take: 1,
            },
          },
          orderBy: {
            discount: "desc",
          },
        });
        break;
      case "hot":
        products = await prisma.variant.findMany({
          take: limitNumber,
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                detail: true,
                parentId: true,
                categoryId: true,
              },
            },
            color: {
              select: {
                id: true,
                name: true,
              },
            },
            images: {
              take: 1,
            },
          },
          orderBy: {
            count: "desc",
          },
        });
        break;
      case "new":
        products = await prisma.variant.findMany({
          take: limitNumber,
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                detail: true,
                parentId: true,
                categoryId: true,
              },
            },
            color: {
              select: {
                id: true,
                name: true,
              },
            },
            images: {
              take: 1,
              
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      default:
        products = await prisma.variant.findMany({
          where: {
            quantity: {
              gt: 0,
            },
          },
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                detail: true,
                parentId: true,
                categoryId: true,
              },
            },
            color: {
              select: {
                id: true,
                name: true,
              },
            },
            images: {
              take: 1,
            },
          },
        });
        break;
    }
    
  
    return  NextResponse.json(products);
}

