<script>
  import { loggedInUser } from '$lib/store'
</script>

<div class="profile">
  <div class="layout">
    {#if $loggedInUser}
    <div class="img-container">
      <img src={$loggedInUser.photoURL} alt="user avatar">
    </div>
    <p>{$loggedInUser.displayName}</p>
    <p>{$loggedInUser.email}</p>
    <p>Last loggedin: </p>
    {:else}
    <p>You are not logged in !</p>
    {/if}
  </div>
</div>

<style>
  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    /* border: 1px solid; */
  }
  .profile {
    display: grid;
    place-content: center;
  }
</style>