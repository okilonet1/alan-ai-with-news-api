intent(
  "what does this app do?",
  "what can i do here?",
  reply("This is a news app.")
);

// intent('Start a command', (p) => {
//     p.play({ command: 'testCommand'})
// })

const API_KEY = "16a8e5fc6f0b4d69bb82357f1ff92546";

// News by Source
intent("Give me the news from $(source* (.*))");
