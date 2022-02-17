<!-- <script context="module">
	import { getAllDocs } from '$lib/functions/firebase/getDocs';

	export const load = async () => {
		const { docs } = await getAllDocs('whatzapp_users');

		return {
			props: {
				users: docs
			}
		};
	};
</script> -->
<script>
	import '$lib/style/chat.css'
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { collection, onSnapshot, query, where } from 'firebase/firestore';
	import { keyword } from '$lib/store'
	import Topside from '$lib/components/private-chat/Topside.svelte'
	import Leftside from '$lib/components/private-chat/Leftside.svelte'

	let user = null;
	let users = [];
	let show = false;
	let filteredUsers = [];

	let q = null;
	let colRef = collection(db, 'whatzapp_users');

	onMount(async () => {
		onAuthStateChanged(auth, (_user) => {
			if (!_user) {
				goto('/projects/login');
			} else {
				user = _user;
				
				/* Range filter and Ordery on different fields not working in this case */
				// q = query(colRef, where('contactList', 'array-contains', user.uid), orderBy('name', 'asc'));
				
				q = query(colRef, where('contactList', 'array-contains', user.uid));
				console.log('user | booklist', user);
				show = true;
			}
		});
	});

	$: if (q) {
		const unsub = onSnapshot(q, (snapshot) => {
			let tempUsers = [];
			snapshot.docs.forEach((doc) => {
				tempUsers.push({ ...doc.data() });
			});
			users = tempUsers;
			return () => unsub();
		});
	}

	$: filteredUsers = users.filter((item) => {
		return item.name.toUpperCase().includes($keyword) || item.name.toLowerCase().includes($keyword);
	});
</script>

<svelte:head>
	<title>Private Chat</title>
</svelte:head>

{#if show}
<div class="layout">
	<Topside />
	<div class="wrapper">
		<Leftside {user} {users} {filteredUsers} />		
		<div class="rightSide">
			<slot />
		</div>
	</div>
</div>
{/if}

<style>
  .layout {
    padding-bottom: 50px;
  }
</style>

