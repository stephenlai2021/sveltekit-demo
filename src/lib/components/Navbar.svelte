<script>
	import { page } from '$app/stores';
	// import { lang, isChinese } from '$lib/store'
	import DarkMode from 'svelte-dark-mode'
	import { afterUpdate } from 'svelte'

	let theme

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Demo1',	path: '/demo1' },
		{ title: 'Demo2',	path: '/demo2' },
		{ title: 'Demo3',	path: '/demo3' },
		{ title: 'Demo4',	path: '/demo4' },
		{ title: 'Demo5',	path: '/demo5' },
		{ title: 'Demo6',	path: '/demo6' },
		{ title: 'Demo7',	path: '/demo7' },
		{ title: 'Demo8',	path: '/demo8' },
		{ title: 'Demo9',	path: '/demo9' },
		{ title: 'Demo10',	path: '/demo10' },
		{ title: 'Demo11',	path: '/demo11' },
		{ title: 'Demo12',	path: '/demo12' },
		{ title: 'Todo List',	path: '/projects/todo' },
		{ title: 'Blog',	path: '/projects/blog' },
		{ title: 'Movie Database',	path: '/projects/movie' },
		{ title: 'Book List',	path: '/projects/booklist' },
		{ title: 'Ninja Gaming',	path: '/projects/ninja-gaming' },
		{ title: 'Chat',	path: '/projects/chat' },
	];

	// const toggleLang = () => {
	// 	$isChinese = !$isChinese

	// 	$isChinese ? lang.set('Chinese') : lang.set('English')
	// }

	afterUpdate(() => {
		document.body.className = theme
	})

	$: switchTheme = theme === 'dark' ? 'light' : 'dark'
</script>

<DarkMode bind:theme />
<!-- <div class="">	 -->
	<div class="nav-container">
		<ul>	
			{#each nav as item}
				<li>
					<a 
						href={item.path} 
						sveltekit:prefetch 
						class:active={$page.url.pathname === item.path}
						>
						{item.title}
					</a>
				</li>
			{/each}		
		</ul>		
	</div>
	<div class="config">
		<div class="layout">
			<div class="theme" on:click={() => theme = switchTheme}>
				{#if theme === 'light'}
					<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
						><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
					>
				{:else}
					<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
						><path
							fill-rule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clip-rule="evenodd"
						/></svg
					>
				{/if}
			</div>
			<!-- <div class="lang" on:click={toggleLang}>
				<span>{ $lang }</span>
			</div> -->
		</div>
	</div>
<!-- </div> -->

<style>
	:global(.dark) a {
		color: #bfc2c7;
	}
	/* :global(.dark) .icon-sun { */
	.icon-sun {
		color: #bfc2c7;
	}
	.lang {
		cursor: pointer;
	}
	.layout {
		display: flex;
	}
	.config {
		display: flex;
		align-items: center;
		justify-content: center;
		/* border: 1px solid; */
		margin-bottom: 20px;
	}
	.theme {
		width: 1.25rem;
		height: 1.25rem;
		cursor: pointer;
		/* margin-left: 20px; */
		margin-right: 10px;
	}
	.nav-container {
		/* border: 1px solid; */
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* padding: 10px; */
	}
	li {
		list-style: none;
		margin: 5px;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.active {
		text-decoration: underline;
	}
</style>
