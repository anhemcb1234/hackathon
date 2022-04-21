import {Axios} from './Axios';


function postLogin(payload) {
   return Axios.post(`/login`,payload);
}
function postSignIn(payload) {
    return Axios.post(`/signup`,payload);
}
function postMess(payload) {
   return Axios.post(`/add-message`,payload);
}
function getMess() {
   return Axios.get(`/list-messages`);
}
function getUser() {
   return Axios.get(`/user`);
}
export const userServices = {
postLogin,
postSignIn,
postMess,
getMess,
getUser
};