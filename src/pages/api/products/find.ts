import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        handleGET(req, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// GET /api/products/find
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
    const products = await prisma.products.findMany()
    res.json(products)
}