// IDEALLY THIS FILE SHOULD BE RUN ONLY ONCE
const { PrismaClient } = require("@prisma/client");

const longText =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum auctor nisl fringilla porttitor. Ut eu leo ut ante commodo eleifend. Fusce imperdiet fermentum ante vel porttitor. Ut ac nunc id eros hendrerit ultricies ut vel felis. Nullam ac metus in mi finibus iaculis. Donec laoreet mi purus, eu dapibus velit consequat ut. Nam semper nisl metus, in lacinia orci vehicula sollicitudin. Sed ut nulla in felis iaculis dignissim. Nulla auctor dolor non urna tempor, in auctor quam interdum. Quisque quis varius ipsum. Mauris lacinia quam nec hendrerit gravida. Nam et efficitur metus. Mauris orci velit, pretium a consequat sed, aliquet et velit. Aliquam in semper nibh. Integer pharetra tellus odio, in condimentum nunc placerat vel.";

const prisma = new PrismaClient();
const addSeedDataToDB = async () => {
	// Random function that generates, for each task, a random boolean
	for (let i = 0; i < 100; i++) {
		// create a random meaningful string
		const len = longText.length;
		const randInt = Math.floor(Math.random() * len);
		const currString = longText.substring(
			randInt,
			randInt + Math.floor((len - randInt) * Math.random())
		);

		const currTask = {
			text: currString,
			completed: true,
		};

		// Get prisma client & add it to the DB here
		const createdTask = await prisma.task.create({ data: currTask });
		console.log(`Task ${i}: ${JSON.stringify(createdTask).slice(0, 23)}`);
	}
};

addSeedDataToDB();
