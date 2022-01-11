import axios from "axios";
import Row from "./Row";

// base url to make requests to the movie database 
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});
// instance.get('/foo-bar')
// what we send is https://api.themoviedb.org/3/foo-bar

export default instance;


// if you use deafult then you can import stuff as any alias, so in Row.js we imported as axios.
// but you can only have one default export in a file. others must be exported as normal export things and mustbe destructured({prop} thing)
