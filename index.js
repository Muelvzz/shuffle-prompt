const prompts = [
  "How can you test your business idea by putting it out into the world instead of overplanning?",
  "What experiments can you run knowing that big winners pay for many attempts?",
  "How can you embrace failure and practice as the path to building your skills?",
  "What bold offer could you create that has the potential to be your grand-slam win?",
  "Who believed in you early on, and how did that shape your journey?",
  "How can you craft an offer so good that people would feel foolish saying no?",
  "What’s the difference between your passion for your business and actually knowing how to succeed in it?",
  "How can you improve the value exchange in your business so customers feel they get more than they pay for?",
  "What recent failure can you analyze deeply so you understand it better than any accidental success?",
  "What signs is the world giving you right now about the direction you should take?",
  "What executed idea could you release today and let the world give you feedback on?",
  "How can you turn your business plan into real-world execution?",
  "What can you do to make your plan both strong and flexible enough to withstand challenges?",
  "What’s something you’ve been overthinking that you could simply go and do right now?",
  "How does your personal track record of execution give value to your ideas?",
  "What prototype or tangible version of your idea could attract investor interest?",
  "What complaints have you noticed that reveal unmet needs you could solve?",
  "What’s one task or project you dislike that you could approach differently?",
  "What kind of complaint (change, expectation, void, or fraud) are you hearing most often from people?",
  "How can you use complaints of 'void' as opportunities to build something valuable?",
  "How should you gracefully handle exploitative complainers while protecting your focus?",
  "How might trying to please everyone be holding back your success?",
  "Which complaints could you solve that would create the most value and help the most people?",
  "What would it look like to quit something peacefully and confidently because it no longer feels right for you?",
  "What do you need to quit in order to start something new that aligns with your current self?",
  "How do you personally define the difference between education and schooling?",
  "What systems of discipline can you build so your progress doesn’t depend on fleeting motivation?",
  "How can you use pain or discomfort as fuel for meaningful change?",
  "How might hitting rock bottom be an opportunity for transformation rather than defeat?",
  "What limiting beliefs from your childhood might still be influencing your current behavior?"
];


const buttonEl = document.querySelector("#new-question-el")
const promptEl = document.querySelector("#question")

buttonEl.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * prompts.length + 1)
    
    promptEl.textContent = prompts[randomNumber]
})
