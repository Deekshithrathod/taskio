// IDEALLY THIS FILE SHOULD BE RUN ONLY ONCE
import { Task } from "./types";

export const defaultTasks = [
	{
		id: 1,
		text: "Task 1 lorem ipsum dolor sit amet consectetur adipisicing elilorem ipsum dolor sit amet consectetur adipisicing elilorem ipsum dolor sit amet consectetur adipisicing elit. dipisicing elilorem ipsum dolor sit amet consectetur adipisicing elit.  asdfa  ",
		completed: false,
	},
	{
		id: 2,
		text: "Task 2 lorem ipsum dolor sit amet consectetur adipisicing elit. ",
		completed: true,
	},
	{
		id: 3,
		text: "Task 3",
		completed: false,
	},
	{
		id: 4,
		text: "Task 4 lorem ipsum dolor sit amet consectetur adipisicing elit. ",
		completed: false,
	},
	{
		id: 5,
		text: "Task 5",
		completed: true,
	},
];

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum auctor nisl fringilla porttitor. Ut eu leo ut ante commodo eleifend. Fusce imperdiet fermentum ante vel porttitor. Ut ac nunc id eros hendrerit ultricies ut vel felis. Nullam ac metus in mi finibus iaculis. Donec laoreet mi purus, eu dapibus velit consequat ut. Nam semper nisl metus, in lacinia orci vehicula sollicitudin. Sed ut nulla in felis iaculis dignissim. Nulla auctor dolor non urna tempor, in auctor quam interdum. Quisque quis varius ipsum. Mauris lacinia quam nec hendrerit gravida. Nam et efficitur metus. Mauris orci velit, pretium a consequat sed, aliquet et velit. Aliquam in semper nibh. Integer pharetra tellus odio, in condimentum nunc placerat vel.`;

type TaskInput = Omit<Task, "id">;

const addSeedDataToDB = async () => {
	// Random function that generates, for each task, a random boolean
	for (let i = 0; i < 500; i++) {
		// create a random meaningful string
		const len = longText.length;
		const randInt = Math.floor(Math.random() * len);
		const currString = longText.substring(
			randInt,
			randInt + Math.floor((len - randInt) * Math.random())
		);

		const currTask: TaskInput = {
			text: currString,
			completed: Math.random() < 0.5,
		};

		// Get prisma client & add it to the DB here
	}

	// defaultTasks[i].completed = Math.random() < 0.5;
};
