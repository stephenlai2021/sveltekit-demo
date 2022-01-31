<script context="module">
	export const load = async ({ fetch, params }) => {
		// let result
		// let tempPost
		// let post = null

		// try {
		//   result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		//   post = await result.json()
		// } catch (error) {
		//   console.log(error.message)
		// }

		// if (result.ok) {
		//   return {
		//     props: {
		//       post
		//     }
		//   }
		// }

		// return {
		//   status: result.status,
		//   error: new Error(error.message)
		// }

		const res = await fetch(`/projects/blog/${params.id}.json`);
		const { post } = await res.json();

		if (res.ok) {
			return {
				props: { post }
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not fetch post id: ${params.id}`)
			// redirect: '/projects/blog'
		};
	};
</script>

<script>
	export let post;
	console.log('post: ', post);
</script>

<div class="post">
	<h2>{post.title}</h2>
	<p>{post.body}</p>
</div>

<style>
	h2 {
		margin-bottom: 20px;
	}
	.post {
		max-width: 800px;
		margin: auto;
		/* display: flex;
		justify-content: center; */
	}
	h2 {
		text-align: center;
	}
</style>
