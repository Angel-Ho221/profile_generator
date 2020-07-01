const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?', (answer) => {
  console.log(`Hello ${answer}!`);

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`${answer}?! That sounds like fun!`);

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`${answer}? Great taste in music you got there!`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`${answer}? Tell me more about it!`);

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`${answer}? mmms, I agree!`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`${answer} such a cool sport!`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`I wish I got your ability! Thank you for taking the time doing this!`);

              rl.close();

            });
          });
        });
      });
    });
  });
});