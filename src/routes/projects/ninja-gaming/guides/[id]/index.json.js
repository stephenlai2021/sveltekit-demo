export const get = async ({ params }) => {
  console.log('params: ', params.id)
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  
	if (res.ok) {
    const post = await res.json();
		return {
			status: 200,
			body: { post }
		};
	}

	return {
		status: res.status
	};
};
