export const get = async ({ params }) => {
  console.log('params: ', params.id)
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await res.json();

	if (res.ok) {
		return {
			status: 200,
			body: { post }
		};
	}

	return {
		status: 404
	};
};
