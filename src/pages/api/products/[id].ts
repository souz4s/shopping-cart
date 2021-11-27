import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const productId = req.query.id

    if (req.method === 'GET') {
        handleGET(productId, res)
    }else if (req.method === 'DELETE') {
        handleDELETE(productId, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

//GET /api/products/:id
async function handleGET(productId, res) {
    const products = await prisma.products.findUnique({
        where: {
            id: Number(productId)
        }
    })
    res.json(products)
}

//DELETE /api/products/:id
async function handleDELETE(productId, res) {
    const products = await prisma.products.delete({
        where: {
            id: Number(productId)
        }
  }) 
  res.json(products)
} 