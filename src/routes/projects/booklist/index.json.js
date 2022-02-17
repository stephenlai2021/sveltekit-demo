import { db } from '$lib/firebase/admin'

let books = null

export const get = async ({request}) => {  
  // const token = request.headers.authorization.split('')[1]
  // console.log('token | endpoint', token)

  // const user = auth.currentUser
  // console.log('user | server', user)

  const booksRef = db.collection('books')
  const snapshot = await booksRef.get()
  
  let tempBooks = []
  snapshot.forEach(doc => {
    tempBooks.push(doc.data())
  })
  books = tempBooks

  return {
    body: {
      books
    }
  }
}

// export const post = async ({ req }) => {
//   const token = req.headers.authorization

//   try {
//     const decodedToken = auth.verifyIdToken(token)
//     if (decodedToken) { 
//       console.log('decodedToken', decodedToken)
//     } 
//     return {
//       body: {
//         message: 'Unauthorized'
//       }
//     }
//   } catch (err) {
//     return {
//       body: {
//         message: 'Internal Error'
//       }
//     }
//   }
// }