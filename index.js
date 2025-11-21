const prompts = [
  'What have you worked on for months? For years?',
  'What have you trained on?',
  'What have you learned?',
  'What forces have you compounded?',
  'How many decisions are you making daily, that are part of a process?',
  'What do you see in people which makes you instantly not trust them?'
];


const buttonEl = document.querySelector("#new-question-el")
const promptEl = document.querySelector("#question")

buttonEl.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * prompts.length + 1)
    
    promptEl.textContent = prompts[randomNumber]
})
