export const handle = async ({ request, resolve }) => {
  console.log(request)

  const response = await resolve(request)

  return {
    ...response
  }
}

// export const getSession = ({ url, headers, method, rawBody, body, params, locals }) => {
export const getSession = (request) => {
  console.log(request)

  return {
    user: {
      id: "@#$@#$",
      name: "Stephen Lai",
      access: "admin"
    }
  }
}