const inquirer = require('inquirer');
const q = require('./utils/questions');
// const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown')
const questions = [
    q.title,
    q.projectVersion,
    q.badges,
    q.desc,
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
        data.contributers.push(Object.values(ans));
    })
    generateMarkdown(data);
}
    init();