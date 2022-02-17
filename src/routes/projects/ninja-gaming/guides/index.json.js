export const get = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if (res.ok) {
    const posts = await res.json()  
    return {
      status: 200,
      body: {
        posts
      }
    }
  }
  return {
    status: res.status
  }  
}