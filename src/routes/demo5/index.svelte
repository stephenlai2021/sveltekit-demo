<script>
	import { db, auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { doc, collection, onSnapshot, updateDoc } from 'firebase/firestore';
	import { getAllDocs } from '$lib/functions/firebase/getDocs';

	let inputValue = '';
	let user = null
	let users = null;
	let err = null;
	let loading = false;
	let avatar;
	console.log('dom | avatar: ', avatar);
	let url = null;
	let isImgOK = false;
	let showText = true;
	let showBtn = false;
	let showError = false;
	let showUserDetails = true;
	let usersRef = collection(db, 'whatzapp_users');

	// let user = auth.currentUser
	onAuthStateChanged(auth, (_user) => { 
		// console.log('loggedin-user:', user)
		if (_user) user = _user
		else console.log('no user founed')
	});

	const handleSearch = async () => {
		const { docs, error } = await getAllDocs('whatzapp_users', ['name', '==', inputValue]);
		console.log('user | demo5: docs ', docs);
		
		loading = true;
		users = docs;
		loading = false;
		err = error;
	};

	const addFriend = async () => {
		let userDoc = doc(db, 'whatzapp_users', users[0].uid)
		await updateDoc(userDoc, {
			contactList: [...users[0].contactList, user.uid]
		})
	};

	const handleLoadImg = () => {
		let img = new Image();
		img.onload = function () {
			avatar.src = img.src;
		};
		img.src = url;
	};

	const handleReset = () => {
		inputValue = ''
		showError = false
	}

	let myUserList = null
	let myRef = collection(db, 'whatzapp_users')
	const unsub = onSnapshot(myRef, snapshot => {
		let tempUserList = []
		snapshot.docs.forEach(doc => {
			tempUserList.push(doc.data())
		})
		myUserList = tempUserList
		return () => unsub()
	})

	$: if (isImgOK)
		setTimeout(() => {
			showText = true;
			console.log('dom | avatar: ', avatar);
			showBtn = true;
		}, 1000);

	$: if (users) {
		if (users.length) {
			url = users[0].avatar;
			isImgOK = false;
			handleLoadImg();
			showText = false;
			isImgOK = true;
		} else {
			showError = true;
		}
	}

	$: if (!inputValue) {
		users = null;
		showBtn = false;
		isImgOK = false;
	}
</script>

<section>
	<div class="section1">
		<form on:submit|preventDefault={handleSearch}>
			<label for="User">Search user</label>
			<div class="form-area">
				<input type="text" name="user" bind:value={inputValue} />
				<button type="submit">Submit</button>
				<button type="reset" on:click={handleReset}>Reset</button>
			</div>
		</form>
	</div>
	{#if loading}
		<div class="loading">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
				alt="avatar"
			/>
		</div>
	{:else if !loading}
		{#if users}
			{#each users as user}
				<div class="users">
					<div class="user-list">
						{#if isImgOK}
							<div class="img-container">
								<img bind:this={avatar} alt="" />
							</div>
						{/if}
						{#if showText}
							<div class="text">
								<main>
									<p>{user.name}</p>
									<p>{user.email}</p>
								</main>
								<div class="status">
									<div class="box" class:online={user.isOnline} />
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	{/if}
	{#if showError}
		<p class="error">The user does not exist</p>
	{/if}
	{#if showBtn}
		<div class="btn-container">
			<button on:click={addFriend}>Add friend</button>
		</div>
	{/if}
</section>

<!-- <section>
	<div class="users">
		{#if myUserList}
			{#each myUserList as user}
				<div class="user-list">
					<div class="img-container">
						<img src={user.avatar} alt="user avatar" />
					</div>
					<div class="text">
						<main>
							<p>{user.name}</p>
							<p>{user.email}</p>
						</main>
						<div class="status">
							<div class="box" class:online={user.isOnline} />
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<p>...waiting</p>
		{/if}
	</div>
</section>	 -->

<style>
	button {
		margin-right: 5px;
	}
	.error {
		text-align: center;
	}
	.loading {
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}
	.loading img {
		width: 50px;
	}
	/* .section1 {
		max-width: 500px;
		margin: auto;
	} */
	form input {
		width: 100%;
		margin: 0 10px;
	}
	.form-area {
		display: flex;
	}
	.loading {
		text-align: center;
	}
	form {
		text-align: center;
	}
	.btn-container {
		text-align: center;
	}
</style>
