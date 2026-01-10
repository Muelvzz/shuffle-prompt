const prompts = [
  'What have you worked on for months? For years?',
  'What have you trained on?',
  'What have you learned?',
  "What your MUST DONE activities everyday?,
  'What forces have you compounded?',
  'How many decisions are you making daily, that are part of a process?',
  'What do you see in people which makes you instantly not trust them?',
  'What is your daily highlight?',
  'Whose life do I admire that is secretly miserable?',
  'What do I believe is true only because believing it puts me in good standing with my tribe?',
  'What annoys me about other people that I sometimes do myself?',
  'What do I believe the most with the least amount of evidence of it being true?',
  'Which of my current values would be different if I were raised by different parents?',
  'What do I think is a universal truth but is actually just a norm unique to my own culture?',
  'What has the right answer but I ignore because they’re a bad communicator?',
  'Who is full of it but I pay attention o because they’re a good communicator?',
  'What in your profession is impossible to know no matter how smart you become?',
  'What in my field do I think is a law but is actually just a rule?',
  'Are you taking enough risks in your life? Would you like to change your relationship to risk? If so, how?',
  'How do the opinions of others affect you?',
  'How do you feel about asking for help? ',
  'How much do your current goals reflect your desires vs someone else’s?',
  'Think about a “what if?” or worst-case scenario and work your way through the problem, identifying your options to get through it if it were to happen.',
  'What are some things that frustrate you? Can you find any values that explain why they bug you so much?',
  'What biases do you need to work on?',
  'What do you need to give yourself more credit for?',
  'What does “ready” feel like to you? How did you know you were ready for a major step that you have taken in your life?',
  'What is a boundary that you need to draw in your life?',
  'What is a made-up rule about your life that you are applying to yourself? How has this held you back and how might you change it? ',
  'What is something that you have a hard time being honest about, even to those you trust the most? Why?',
  'What sensations or experience do you tend to avoid in your life? Why?',
  'What would you do if you could stop time for two months?',
  'Who is the most difficult person in your life and why?',
  'Write about something that you would like to let go of.',
  'Who are your role models in your life and why?',
  'What would you advise to yourself five years ago?',
  'What is your universal motto in life?',
  'In three words, what will you hope that someone will say about you?',
  'How many times have you said NO to something and what did you feel afterwards?',
  'Who do you usually follow online and why?',
  'If you had all of the money in the world, what would be the first you will be doing?',
];


const buttonEl = document.querySelector("#new-question-el")
const promptEl = document.querySelector("#question")

buttonEl.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * prompts.length)
    
    promptEl.textContent = prompts[randomNumber]
})
