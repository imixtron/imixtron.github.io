import {MediumHandler} from '@/components/blog/medium-utils';

export async function GET(request: Request) {
	const posts = await MediumHandler.fetchLatestFromFeed()
	// For example, fetch data from your DB here

	return new Response(JSON.stringify(posts), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function POST(request: Request) {
	// Parse the request body
	const body = await request.json();
	const { name } = body;

	// e.g. Insert new user into your DB
	const newUser = { id: Date.now(), name };

	return new Response(JSON.stringify(newUser), {
		status: 201,
		headers: { 'Content-Type': 'application/json' }
	});
}
