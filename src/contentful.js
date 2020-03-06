import { createClient } from 'contentful'
const  dotenv = require('dotenv')
          let env = dotenv.config()


 export default createClient({
 accessToken: process.env.REACT._APP_API_ACCESS_TOKEN,
 space: process.env.REACT_APP_SPACE
 
})


