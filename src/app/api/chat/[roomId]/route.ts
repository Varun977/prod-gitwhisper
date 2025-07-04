import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
const prisma = db;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ roomId: string }> },
) {
  const { roomId } = await params;
  const history = await prisma.chatMessage.findMany({
    where: { projectId: roomId },
    orderBy: { createdAt: "asc" },
    take: 50,
  });
  return NextResponse.json(history);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ roomId: string }> },
) {
  const { roomId } = await params;
  const { content, senderType } = (await req.json()) as {
    content: string;
    senderType: "user" | "bot";
  };

  if (!content || !senderType) {
    return NextResponse.json(
      { error: "Both content and senderType are required" },
      { status: 400 },
    );
  }

  const saved = await prisma.chatMessage.create({
    data: {
      content,
      senderType,
      projectId: roomId,
    },
  });
  return NextResponse.json(saved, { status: 201 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ roomId: string }> },
) {
  const { roomId } = await params;
  await prisma.chatMessage.deleteMany({
    where: { projectId: roomId },
  });
  return NextResponse.json({ success: true });
}
