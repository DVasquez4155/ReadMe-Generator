exports.githubUsername = {
    type: 'input',
    message: 'Your GitHub username (use empty value to skip)',
    name: 'githubUsername',
    default: "DVasquez4155"
};
exports.projectVersion = {
    type: 'input',
    message: 'Project version (use empty value to skip)',
    name: 'projectVersion',
};
exports.badges = {
    message: "What kind of badge do you want?",
    type: "checkbox",
    name: "badges",
    choices: [
        {
            name: 'The amount of followers you have',
            value: '![Followers](https://img.shields.io/github/followers/${githubUsername}?style=social)',
        },
        {
            name: 'The type of license you have',
            value: '![License](https://img.shields.io/github/license/${githubUsername}/${title})',
        },
        {
            name: 'The languages this repository will use',
            value: '![Language](https://img.shields.io/github/languages/top/${githubUsername}/${title})',
        },
        {
            name: 'The latest commit from this repository',
            value: '![Latest Commit](https://img.shields.io/github/last-commit/${githubUsername}/${title})',
        },
    ],
};
exports.title = {
    message: "What will your project title be?",
    type: "input",
    name: "title",
    default: "Project Title"
};
exports.desc = {
    message: "What will your project description be?",
    type: "editor",
    name: "desc",
    default: "Project Description"
};
exports.table = {
    message: "Would you like to enable the Table of Contents?",
    type: "list",
    name: "table",
    choices: [
        'Yes',
        'No'
    ],
};
exports.contribute = {
    message: "Would you like to allow people to contribute?",
    type: "list",
    name: "contribute",
    choices: [
        {
            name: 'Yes',
            value: `## Contributing
This project has adopted the code of conduct defined by [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).`,
        },
        {
            name: 'No',
            value: '',
        },
    ],
};
exports.numOfCont = {
    message: "How many additional people are contributing to this repository?",
    type: "number",
    name: "numOfCont",
    default: 0
}
exports.install = {
    message: "What are the installation requirements? (use empty value to skip)",
    type: "input",
    name: "install",
};
exports.usage = {
    message: "What will the usage be? (use empty value to skip)",
    type: "input",
    name: "usage",
};
exports.test = {
    message: "How will people test your build? (use empty value to skip)",
    type: "input",
    name: "test",
};
exports.license = {
    message: "What's will be the license?",
    type: "list",
    name: "license",
    choices: [
        {
            name: 'GNU AGPLv3',
            value: '[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)',
        },
        {
            name: 'GNU GPLv3',
            value: '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        },
        {
            name: 'GNU LGPLv3',
            value: '[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)',
        },
        {
            name: 'Mozilla Public License 2.0',
            value: '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)',
        },
        {
            name: 'Apache License 2.0',
            value: '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)',
        },
        {
            name: 'MIT License',
            value: '[MIT License](https://choosealicense.com/licenses/mit/)',
        },
        {
            name: 'Boost Software License 1.0',
            value: '[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)',
        },
        {
            name: 'The Unlicense',
            value: '[The Unlicense](https://choosealicense.com/licenses/unlicense/)',
        },
    ],
};
exports.image = {
    message: "Which kind of image are you uploading to 'assets/img/icon.(png/jpg)'?",
    type: "list",
    name: "image",
    choices: [
        {
            name: 'png',
            value: './assets/img/icon.png',
        },
        {
            name: 'jpg',
            value: './assets/img/icon.jpg',
        },
        {
            name: 'gif',
            value: './assets/img/icon.gif',
        },
        {
            name: 'svg',
            value: './assets/img/icon.svg',
        },
    ],
};