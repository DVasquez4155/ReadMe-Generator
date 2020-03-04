const axios = require('axios');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
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
  writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    });
}
};

module.exports = api;
