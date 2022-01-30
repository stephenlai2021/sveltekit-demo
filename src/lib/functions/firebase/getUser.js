import { auth } from '$lib/firebase/client'
import { onAuthStateChanged } from 'firebase/auth'
import { browser } from '$app/env'

let user = auth.currentUser

// if (browser) {
  onAuthStateChanged(auth, _user => {
    console.log('User state changed. Current user is:', _user)
    user = _user
  })
// }

export const getUser = () => {
  return { user }
}