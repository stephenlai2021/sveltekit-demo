export const get = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await result.json()

  return {
    body: {
      posts
    }
  }
}