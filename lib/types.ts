import { Task } from "@prisma/client";

export type TaskProp = Omit<Task, "createdAt">;
