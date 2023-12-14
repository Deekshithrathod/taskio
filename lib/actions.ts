"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "./db";

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

	// revalidate Path
	revalidatePath("/");
};

export const deleteAllCompletedTasks = async () => {
	const deletedTasks = await prisma.task.deleteMany({
		where: {
			completed: true,
		},
	});
	revalidatePath("/");
};

export const updateTask = async (id: number, completed: boolean) => {
	const task = await prisma.task.update({
		where: {
			id: id,
		},
		data: {
			completed: completed,
		},
	});

	revalidatePath("/");
};
