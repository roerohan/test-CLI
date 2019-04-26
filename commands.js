#!/usr/bin/env node

const program = require('commander');
const {
    prompt
} = require('inquirer');
const {
    addUser
} = require('./index');

const questions = [{
    type: 'input',
    name: 'name',
    message: 'Name: '
}, {
    type: 'input',
    name: 'phone',
    message: 'Phone: '
}, ]

program
    .version('1.0.0')
    .description('Test CLI')

// program
//     .command('add <name> <phone>')
//     .alias('a')
//     .description('Add a User')
//     .action((name, phone) => {
//         addUser({
//             name,
//             phone
//         });
//     });

program
    .command('add')
    .alias('a')
    .description('Add a User')
    .action(() => {
        prompt(questions).then(answers => addUser(answers));
    });


program.parse(process.argv);
