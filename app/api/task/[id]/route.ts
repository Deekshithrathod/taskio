export async function POST(request: Request) {
	const { id } = await request.json();
	console.log(id);
}