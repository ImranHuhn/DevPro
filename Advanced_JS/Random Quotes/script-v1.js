const quoteObj = [
    {
        name: 'Andrew Tate (Top-G)',
        image: 'https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/pxzr4hqfklhsuhfda55w/andrew-tate',
        quotes: [
            'My unmatched perspicacity, coupled with sheer indefatigability, makes me a feared opponent in any realm of human endeavor.',
            'What color is your Bugatti?',
            'Depression isn&#39;t real. You feel sad, you move on. You will always be depressed if your life is depressing. Change it.',
            'As a man trauma and difficulty are extremely important because they&#39;re the building blocks for mental fortitude and physical fortitude.',
            'Resist the slave mind.',
            'Arrogance is the cause of most first world poverty.',
            'You famoose a goose, and you famees the geese',
            'Cost is the enemy of the poor man, so the poor try to save money.',
            'Time is the enemy of the rich man, so the rich try to save time.',
            'Find a person who is as successful as you&#39;d like to be, ask them what to do, do it and work hard.',
            'Freedom will only come when you no longer trade your time for money.'
        ]
    }, 
    {
        name: 'Jim Rohn',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Jim_rohn.jpg',
        quotes: [
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
        ]
    }, 
    {
        name: 'Voltaire (Francois-Marie Arouet)',
        image: 'https://www.onthisday.com/images/articles/voltaire.jpg',
        quotes: [
            'Common sense is not so common.',
            'Judge a man by his questions rather than his answers.',
            'God gave us the gift of life; it is up to us to give ourselves the gift of living well.',
            'Those who can make you believe absurdities can make you commit atrocities.',
            'It is better to risk saving a guilty man than to condemn an innocent one.',
            'No problem can withstand the assault of sustained thinking.',
            'Opinion has caused more trouble on this little earth than plagues or earthquakes.',
            'When it is a question of money, everybody is of the same religion.',
            'It is not enough to conquer; one must learn to seduce',
            'Give me 10 minutes to talk away my ugly face and I&#39;ll bed the Queen of France'
        ]
    }
];

const currName = document.querySelector('.current-name');
const selNames = document.querySelector('.select-names');
const quote = document.querySelector('.right__quote');
const button = document.querySelector('.button');
const image = document.querySelector('.image');
let state = 0;


function randomQuote(changeQuote) {
    quote.innerHTML = quoteObj[changeQuote].quotes[Math.ceil(Math.random() * quoteObj[changeQuote].quotes.length - 1)];
}

function currentName(changeName) {
    currName.innerText = changeName;
}

function currentImage(changeImage) {
    image.src = quoteObj[changeImage].image;
}

window.addEventListener('load', () => {
    state = 1;
    randomQuote(state);
});

selNames.addEventListener('click', (e) => {
    const y = e.target.innerText;
    switch(y) {
        case 'Andrew Tate':
            state = 0;
            currentName(y)
            randomQuote(state);
            currentImage(state);
            return;
        case 'Jim Rohn':
            state = 1;
            currentName(y)
            randomQuote(state);
            currentImage(state);
            return;
        case 'Voltaire':
            state = 2;
            currentName(y)
            randomQuote(state);
            currentImage(state);
            return;
    }
});

button.addEventListener('click', () => {
    randomQuote(state);
    console.log(state);
});










