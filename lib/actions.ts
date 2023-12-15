"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "./db";
import { Task } from "@prisma/client";
import { TaskProp } from "./types";

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

export const getTasks = async (
	offset: number,
	limit?: number
): Promise<TaskProp[]> => {
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
		take: limit || 50,
	});
	return tasks;
	// type task = Omit<Task, "createdAt">;

	// const fakeTasks: task[] = [
	// 	{
	// 		id: 112332,
	// 		text: "Fake Task 1",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 112333,
	// 		text: "Fake Task 2",
	// 		completed: true,
	// 	},
	// 	{
	// 		id: 112334,
	// 		text: "Fake Task 3",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 112335,
	// 		text: "Fake Task 4",
	// 		completed: true,
	// 	},
	// 	{
	// 		id: 112336,
	// 		text: "Fake Task 5",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 112337,
	// 		text: "Fake Task 6",
	// 		completed: true,
	// 	},
	// ];
	// return fakeTasks;
};

export const submitTask = async (formData: FormData) => {
	let { text } = CreateTask.parse({
		text: formData.get("text"),
	});

	if (!text) {
		text = "";
	}

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
