// /pages/api/comments/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const comments = await prisma.comment.findMany();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch comments' });
    }
  } else {
    // Si une méthode autre que GET est utilisée, renvoyer une erreur 405
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
