import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const prisma = new PrismaClient();
	const searchParams = new URLSearchParams(request.url);

	let limit = Number(searchParams.get("limit"));
	let offset = Number(searchParams.get("offset"));

	// Check limit & offset from the request query request.
	if (!limit || limit > 50) {
		limit = 50;
	}

	if (!offset) {
		offset = 0;
	}

	const tasks = await prisma.task.findMany({
		select: {
			id: true,
			text: true,
			completed: true,
		},
		orderBy: {
			createdAt: "desc",
		},
		skip: offset,
		take: limit,
	});
	prisma.$disconnect();

	if (tasks.length === 0) {
		const notFoundResponse = {
			message: "Not Found",
		};

		return NextResponse.json(notFoundResponse, { status: 404 });
	}

	return NextResponse.json({ tasks: tasks }, { status: 200 });
}
