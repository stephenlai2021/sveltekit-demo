<script context="module">
	const PROJECT_ID = 'chat-app-9ff7a';
	const COLLECTION = 'whatzapp_users';
	
	export const load = async ({ fetch }) => {
		const res = await fetch(
			`https://firestore.googleapis.com/v1/projects/${VITE_PROJECT_ID}/databases/(default)/documents/${COLLECTION}`
		);

		if (res.ok) {
			const users = await res.json();	
			return {
				props: {
					users
				}
			};
		}
	};
</script>

<script>
	export let users;
</script>

<!-- <div class="page">	
	<h1>Fetch Firestore using REST API</h1>
	<p>Besides Firebase SDK, we can also fetch Firestore using REST API on either server or client side</p>
	<p>In this example we fetch Firestore on server side</p>
	<div class="user-list">
		{#each users.documents as user}
			<p>{user.fields.name.stringValue}</p>
		{/each}
		<pre>
			{JSON.stringify(users.documents, null, 2)}
		</pre>
	</div>
</div> -->

<section>
	In this demo, I fetch firestore on server side with firestore REST API, the rest are the same
	<div class="users">
	{#each users.documents as user}
		<div class="user-list">
			<div class="img-container">
				<img src={user.fields.avatar.stringValue} alt="user avatar" />
			</div>
			<div class="text">
				<main>
					<p>{user.fields.name.stringValue}</p>
					<p>{user.fields.email.stringValue}</p>
				</main>
				<div class="status">
					<div class="box" class:online={user.fields.isOnline.booleanValue} />
				</div>
			</div>
		</div>
	{/each}
	</div>
</section>