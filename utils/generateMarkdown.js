const api = require('./api');
async function generateMarkdown(data) {
  let table = ``;
  table = `## Table of Contents`
  let install = ``;
  if (data.install != "") {
    install = `
## Installation
\`\`\`${data.install}\`\`\``
table += `
* [Installation](#Installation)`
  }
  let usage = ``;
  if (data.usage != "") {
    usage = `
## Usage
\`\`\`${data.usage}\`\`\``
table += `
* [Usage](#Usage)`
}
  let test = ``;
  if (data.test != "") {
    test = `
## Test
\`\`\`${data.test}\`\`\``
table += `
* [Testing](#Testing)`
}
  table += `
* [Credits](#Credits)
* [Contributing](#Contributing)
* [License](#License)`

if (data.table == "No") {
  table = '';
}
const contributers = [];
  await Promise.all(api.getUsers(data.contributers)).then(function(results) {
    results.forEach(function(user){
      let contributerName = user.data.login
      if (user.data.name != null) {
        contributerName = user.data.name;
      }
      contributers.push(`[<img src="${user.data.avatar_url}" width="50"/> ${contributerName}](${user.data.html_url})`)
    })
  })
    
    const vals = [];
    data.badges.forEach(function (e) {
        vals.push(
            e
            .replace("${githubUsername}", data.contributers[0])
            .replace("${title}", data.title.replace(new RegExp(' ', 'g'),'-'))
        )
    })
    data.badges = vals;

return `# ${data.title} ${data.projectVersion}
${data.badges.join(' ')}
## Description
${data.pages}

${data.desc}
${table}${install}${usage}${test}
## Credits
${contributers.join(' ')}
${data.contribute}
## License
Licensed under the ${data.license} license.`;
}
module.exports = generateMarkdown;