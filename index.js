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
    q.numOfCont,
];

async function init() {
    inquirer.prompt(questions).then(answers => {
        const questions = [q.githubUsername];
        for (var i = 0; i < answers.numOfCont; i++) {
            questions.push({
                message: `Please input #${i + 2} contributer's GitHub`,
                type: "input",
                name: `${i}`
            })
        }
        inquirer.prompt(questions).then(ans => {
            const answerArray = [];
            answerArray.push(Object.values(ans))
            answers.contributers = answerArray;
            generateMarkdown(answers);
        })
    })
}
    init();