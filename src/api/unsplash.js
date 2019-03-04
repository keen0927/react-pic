import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 04397743cc9fb9dafd66250ea77a69a6f99f005bb6e556345cc94d7668ff0b21'
    }
});