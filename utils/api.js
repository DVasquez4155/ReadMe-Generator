const axios = require('axios');
const api = {
  getUsers(usernames) {
    const users = [];
    usernames.forEach(function(username) {
      users.push(api.getUser(username));
    })
    return users;
  },
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
  },
};

module.exports = api;
