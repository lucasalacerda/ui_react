import axios from 'axios';

 export const api = axios.create({
     baseURL: process.env.API_GATEWAY,
     headers: {
       Accept: 'application/json, text/javascript',
       'Content-Type': 'application/json',
     },
     
     fetchResult (content) {
       var uri = window.encodeURI('https://api.github.com/search/respositories?q=stars:>1+language: ' + content + ' &sort=stars&order=desc&type=Repositories');
       return axios.get(uri)
         .then(function(response) {
           return response.data.item;
       });
       }
     });

// export function fetchResults(content) {
//   var uri = window.encodeURI('https://api.github.com/search/respositories?q=stars:>1+language: ' + content + ' &sort=stars&order=desc&type=Repositories');
//   return axios.get(uri)
//     .then(function (response) {
//       return response.data.item;
//     });
// }