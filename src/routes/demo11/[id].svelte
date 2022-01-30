<!-- <script context="module">
  import { auth } from '$lib/firebase/client'
  import { onAuthStateChanged } from "firebase/auth";

  export const load = () => {
    let user = null

    onAuthStateChanged(auth, cred => {
      if (cred) user = cred
    })  
    
    if (!user) {
      console.log('no loggedin user !')
      return {
        status: 301,
        redirect: '/'
      }
    }

    return {
      props: {
        user
      }
    }
  }
</script> -->

<script context="module">
  export const load = async ({ fetch, params }) => {    
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    if (res.ok) {
      return {
        props: {
          post
        }
      }
    }

    // return {
    //   status: res.status,
    //   redirect: new Error('Could not fetch the post')
    // }

    return {
      status: 301,
      redirect: '/demo11'
    }
  }
</script>

<script>
  export let post
</script>

<pre>
  {JSON.stringify(post, null, 2)}
</pre>