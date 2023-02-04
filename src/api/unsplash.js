import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FS9jQwCzC82afIEcOiSsvMdBKUi48FE4WcWmKiL8JI4'
    }
})