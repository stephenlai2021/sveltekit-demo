<script context="module">
	export const load = ({ session }) => {
		console.log('session | ssr: ', session);
		return {
			props: {
				session
			}
		};
	};
</script>

<script>
	// Read session from hooks 
	// import { session } from '$app/stores'

  // Read session passed from sersver side
	export let session;

	console.log('session | client', session);
</script>

<h2>Hooks runs before server, we can get session info from <i>getSession function in hooks</i>, and import session on server (load function), then pass session to client to render</h2>

<pre>
  {JSON.stringify(session, null, 2)}
</pre>

