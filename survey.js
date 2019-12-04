console.clear();
const readline = require('readline');
let answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) =>{ answers["Q1"] = answer;
    rl.question("What's an activity you like doing? ", (answer) =>{ answers["Q2"] = answer;
        rl.question("What do you listen to while doing that? ", (answer) =>{ answers["Q3"] = answer;
            rl.question("What is your profession? ", (answer) =>{ answers["Q4"] = answer;
                rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) =>{ answers["Q5"] = answer;
                    rl.question("What's your favourite thing to eat for that meal?", (answer) => { answers["Q6"] = answer;
                        rl.question("Which sport is your absolute favourite?", (answer) => { answers["Q7"] = answer; 
                            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) =>{ answers["Q8"] = answer;
                                console.log("Thanks for your valuable input! You profile is being generated");
                                //console.log(answers)
                                console.log(`${answers.Q1} loves listening to ${answers.Q3} while ${answers.Q2}, devouring ${answers.Q6} for ${answers.Q5}, prefers ${answers.Q7} over any other sports, and is amazing at ${answers.Q8}.`)
                                rl.close();
                            })
                        })
                    })
                })
            })
        })
    })
})