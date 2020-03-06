import { createClient } from 'contentful'

console.log(process.env.REACT_APP_SPACE)
 export default createClient({
 accessToken: process.env.REACT_APP_API_ACCESS_TOKEN,
 space: process.env.REACT_APP_SPACE
 
})


