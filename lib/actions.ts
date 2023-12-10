"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
	id: z.number(),
	text: z.string().nullable(),
	completed: z.boolean().default(false),
	createdAt: z.date(),
});

const CreateTask = FormSchema.omit({
	id: true,
	createdAt: true,
	completed: true,
});

const prisma = new PrismaClient();

export const submitTask = async (formData: FormData) => {
	const { text } = CreateTask.parse({
		text: formData.get("text"),
	});

	// Create task i.e. Insert into DB
	const task = await prisma.task.create({
		data: {
			text: text,
		},
	});

	console.log(task, `from submitTask`);

	// revalidate Path
	revalidatePath("/");
};

export const deleteAllCompletedTasks = async () => {
	console.log(`from deleteAllCompletedTasks`);

	const deletedTasks = await prisma.task.deleteMany({
		where: {
			completed: true,
		},
	});
};
