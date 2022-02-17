import { db } from '$lib/firebase/admin'

export const get = async () => {
  let users = null

  const usersRef = db.collection('whatzapp_users')
  const snapshot = await usersRef.get()

  let tempUsers = []
  snapshot.forEach(doc => {
    tempUsers.push(doc.data())
  })
  users = tempUsers

  return {
    body: {
      users
    }
  }
}