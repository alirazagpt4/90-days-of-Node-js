#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// console.log(chalk.bgGreen("hi mom"));

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r , ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a javascript Millionaire?\n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
           ${chalk.bgBlue('How to Play')}
           I am a process on your computer
           If you get any questions wrong i will be ${chalk.bgRed('killed')}
           So get all the questions Right ...
           
           

    `)
}


async function askName(){
    const answers = await inquirer.prompt({
        name:"Player_name",
        type:"input",
        message:"What is your name ?",
        default(){
            return "Player";
        }
    })

    playerName = answers.Player_name;
}

async function question1(){
    const answers = await inquirer.prompt({
        name:"question1",
        type:"list",
        message: 'Javascript was created in 10 days then released on\n',
        choices: [
            '1995',
            '1996',
            '1994',
            'none of the above'
        ],
    })

    return handleAnswer(answers.question1 == '1995');
}



async function question2() {
    const answers = await inquirer.prompt({
        name: "question2",
        type: "list",
        message: "Which company developed JavaScript?",
        choices: [
            'Microsoft',
            'Sun Microsystems',
            'Netscape',
            'IBM'
        ],
    });

    return handleAnswer(answers.question2 === 'Netscape');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: "question3",
        type: "list",
        message: "What does NaN stand for in JavaScript?",
        choices: [
            'No available Number',
            'Not a Number',
            'Name as Number',
            'None applied Number'
        ],
    });

    return handleAnswer(answers.question3 === 'Not a Number');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: "question4",
        type: "list",
        message: "Which symbol is used for single-line comments in JavaScript?",
        choices: [
            '//',
            '/*',
            '<!--',
            '#'
        ],
    });

    return handleAnswer(answers.question4 === '//');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: "question5",
        type: "list",
        message: "Which of the following is a JavaScript framework?",
        choices: [
            'Laravel',
            'Django',
            'React',
            'Rails'
        ],
    });

    return handleAnswer(answers.question5 === 'React');
}

async function question6() {
    const answers = await inquirer.prompt({
        name: "question6",
        type: "list",
        message: "What is the result of typeof null in JavaScript?",
        choices: [
            'null',
            'undefined',
            'object',
            'boolean'
        ],
    });

    return handleAnswer(answers.question6 === 'object');
}


async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking Answer...').start();

    await sleep();

    if(isCorrect){
        spinner.success({text:`Nice Work ${playerName}`});

    }
    else{
        spinner.error({text:`Game Over , you lose ${playerName}`});
        process.exit(1);
    }
}

function winner(){
    console.clear();
    const msg = `Congrats ${playerName}`;

    figlet.text(msg , { font: "Standard" }, (err , data)=>{
        console.log(gradient.rainbow.multiline(data));
    })
}

 await welcome();
 await askName();
 await question1();
 await question2();
 await question3();
 await question4();
 await question5();
 await question6();
 await winner();


