import {Axios} from './Axios';


function postLogin(payload) {
   return Axios.post(`/login`,payload);
}
function postSignIn(payload) {
    return Axios.post(`/signup`,payload);
 }

export const userServices = {
postLogin,
postSignIn
};