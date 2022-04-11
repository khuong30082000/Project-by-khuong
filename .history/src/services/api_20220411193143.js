
import axios  from "axios";
const api = {
    call() {
   return axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
    }
}