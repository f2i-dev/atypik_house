import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await prisma.comment.delete({
        where: { id: id as string },
      });
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete comment' });
    }
  }
}
