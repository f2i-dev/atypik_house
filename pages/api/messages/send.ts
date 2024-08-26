import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session?.user) {
    return res.status(401).json({ message: 'Non authentifié' });
  }

  const { receiverId, content, chatId } = req.body;

  if (!receiverId || !content || !chatId) {
    return res.status(400).json({ message: 'Paramètres manquants' });
  }

  try {
    const message = await prisma.message.create({
      data: {
        content,
        senderId: session.user.id,
        receiverId,
        chatId,
      },
    });

    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erreur interne du serveur' });
  }
}
