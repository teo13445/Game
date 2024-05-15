import prisma from '@/lib/prismadb';
import { NextApiRequest,NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method
    switch (method) {
      case "GET":
        const session = await getSession({ req });

        if (!session?.user?.email) {
          throw new Error("Chưa Đăng Nhập");
        }
        try {
          const query = req.query;
          const { status } = query;
          const statusData = typeof status == "string" ? status : "";
          var orders;
          if (statusData === "") {
            orders = await prisma.cart.findMany({
              where: { email: session.user.email },
            });
          } else {
            orders = await prisma.cart.findMany({
              where: { email: session.user.email, status: statusData },
            });
          }
          if (!orders) {
            throw new Error("Chưa Đăng Nhập");
          }
          return res.status(201).json(orders);
        } catch (error) {
          console.log(error);

          return res.status(400).end();
        }
        break;
      case "POST":
        try {
          const cart = req.body;

          const data = await prisma.cart.create({
            data: {
              name: cart.name,
              address: cart.address,
              city: cart.city,
              email: cart.email,
              phone: cart.phone,
              status: cart.status,
              total: Number.parseInt(cart.total),
            },
          });

          return res.status(201).json({ id: data.id });
        } catch (error) {
          return res.status(400).end();
        }
        break;
      default:
        return res.status(405).end();
        break;
    }

};