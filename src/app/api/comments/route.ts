import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { listingId, content } = body;

  const comment = await prisma.comment.create({
    data: {
      content,
      listingId,
      userId: currentUser.id,
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json(comment);
}
