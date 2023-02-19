const quoteArr = [
    'Don&#39;t wish it was easier, wish you were better. Don&#39;t wish for less problems, wish for more skills. Don&#39;t wish for less challenge, wish for more wisdom.',
    'The challenge of leadership is to be strong, but not rude; be kind, but not weak; be bold, but not a bully; be thoughtful, but not lazy; be humble, but not timid; be proud, but not arrogant; have humor, but without folly.',
    'We must all suffer one of two things: the pain of discipline or the pain of regret.',
    'Days are expensive. When you spend a day you have one less day to spend. So make sure you spend each one wisely.',
    'Discipline is the bridge between goals and accomplishment.',
    'If you are not willing to risk the unusual, you will have to settle for the ordinary.',
    'Motivation is what gets you started. Habit is what keeps you going.',
    'Success is nothing more than a few simple disciplines, practiced every day.',
    'Don&#39;t join an easy crowd; you won&#39;t grow. Go where the expectations and the demands to perform are high.',
    'Learn how to be happy with what you have while you pursue all that you want.'
];

const quote = document.querySelector('.right__quote');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    quote.innerHTML = quoteArr[Math.ceil(Math.random() * quoteArr.length - 1)];
    console.log(Math.ceil(Math.random() * quoteArr.length - 1))
});










