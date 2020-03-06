const inquirer = require('inquirer');
const README_PATH = `${process.cwd()}\\README.md`;
const q = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown')
var fs = require('fs');
const questions = [
    q.title,
    q.projectVersion,
    q.badges,
    q.desc,
    q.image,
    q.table,
    q.license,
    q.install,
    q.usage,
    q.test,
    q.contribute,
    q.githubUsername,
    q.numOfCont,
];
async function init() {
    const data = await inquirer.prompt(questions);
    data.contributers = [data.githubUsername]
    const githubQuestions = []
    for (var i = 0; i < data.numOfCont; i++) {
        githubQuestions.push({
            message: `Please input #${i + 2} contributer's GitHub`,
            type: "input",
            name: `${i}`
        })
    }
    await inquirer.prompt(githubQuestions).then(ans => {
        Object.values(ans).forEach(
            function(user){
                data.contributers.push(user)
            }
        )
    })
    const markdown = await generateMarkdown(data);
    writeToFile(README_PATH, markdown)
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    });
}
init();