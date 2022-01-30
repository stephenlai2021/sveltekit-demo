<script context="module">
  export const load = ({ params }) => {
    console.log('path name: ', params.id)

    return {
      props: {
        id: params.id
      }
    }
  }
</script>

<script>
  /* Read params from server side */
  export let id

  console.log('id passed from server: ', id)

  /* Read dynmaic route on client side */
  // import { page } from '$app/stores'

  // let id = $page.params.id

  // console.log('id: ', id)
</script>

<h1>You just entered "{id}" on  address bar 😀</h1>
<a href="/demo10">Back to demo10</a>
