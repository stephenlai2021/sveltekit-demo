<script>
  import { loggedInUser } from '$lib/store'
  import { auth, provider } from '$lib/firebase/client'
  import { signOut, signInWithPopup } from 'firebase/auth'
  import { goto } from '$app/navigation';

  let user
  let email
  let errorCode
  let errorMessage
  
  const handleLogin = async () => {    
    try {
      const result = await signInWithPopup(auth, provider)
      user = await result.user
      console.log(user)
      loggedInUser.set(user)
      goto('/projects/blog')
    } catch (error) {
      errorCode = error.code
      errorMessage = error.errorMessage
      email = error.email
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    console.log('signout successfully !')
    loggedInUser.set(null)
    goto('/projects/blog')
  }
</script>

<div class="layout">
  <ul>
    <li><a sveltekit:prefetch href="/projects/blog">Blog</a></li>
    {#if $loggedInUser}
    <li><a sveltekit:prefetch href="/projects/blog/profile">Profile</a></li>
    {/if}
    {#if !$loggedInUser}
    <li><span on:click={handleLogin}>Login</span></li>
    {/if}
    {#if $loggedInUser}
    <li><span on:click={handleLogout}>Logout</span></li>
    {/if}
  </ul>
</div>

<style>
  :global(.dark) a {
    color: #bfc2c7; 
  }
  span {
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .layout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
    padding: 5px;
  }
</style>