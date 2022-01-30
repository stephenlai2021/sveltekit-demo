import { auth } from '$lib/firebase/client'
import { createUserWithEmailAndPassword } from 'firebase/auth'

let error = null
let isPending = false

const signup = async (email, password) => {
  error = null
  isPending = true
  
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not complete signup !')
    }
    error = null
    isPending = false
  } catch (err) {
    console.log(err.message)
    error = err.message
    isPending = false
  }
}

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup