const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

    textNode.story.forEach(story => {
        if (showAudio(story)) {
            const story = document.createElement('audio')
            story.innerText = option.text
            story.classList.add('audio')
            story.addEventListener('click', () => selectAudio(story))
            optionButtonsElement.appendChild(story)
        }
    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

function selectAudio(story) {
    const nextTextNodeId = story.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, story.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'After a long hard day at your boring office job, you arrive at home. Before you walk into your house, ' +
            'you see a letter in your mailbox; an unusual occurrence as bill day is Thursday not Monday. As you draw ' +
            'closer towards the mailbox, you see the envelope inside is red. Red envelopes are quite suspicious and ' +
            'ominous. Rarely does one see red envelopes in their daily mail. Make a choice. Do you open the red ' +
            'envelope or do you ignore it and go inside of your home?',
        options: [
            {
                text: 'Open the envelope.',
                setState: { blueGoo: true },
                nextText: 3
            },
            {
                text: 'Go inside.',
                nextText: 2
            }
        ],
        story:[

        ]
    },
    {
        id: 2,
        text: 'A red envelope—Ha! You decide that it is too suspicious and plausibly a poor taste joke rendered by youth' +
            ' in the neighborhood. You choose to ignore the envelope and to go inside of your home. Half way up the ' +
            'driveway, you slip and fall head first on a rock. Your body mysteriously disappeared from the driveway that' +
            ' day. No one knows or saw what happened. No traces of you or your body were ever found. Who would’ve moved ' +
            'a dead body? Were there any witnesses? Could the deliverer of the red envelope have anything to do with ' +
            'your missing body?',
        options: [
            {
                text: 'Go back?',
                nextText: 8
            },
            {
                text: 'THE END',
                nextText: -1
            }
        ]

    },
    {
        id: 3,
        text: 'As the saying goes, “Curiosity killed the cat.” You are too curious not to open and read the contents of ' +
            'the red envelope. You grab it out of your mailbox and anxiously open it. Typed on a red sheet of ' +
            'stationary, you see seven words. ‘Meet me on the docks at twelve.’ Should you follow the instructions? Who ' +
            'would want you to meet them at the docks? This is a very odd request; nothing short of some stereotypical ' +
            'horror story set up that’s usually told around the camp fire. Make a choice. Do you drive to the dock to ' +
            'meet the mysterious person who left you the red envelope and letter or do you ignore the letter and go ' +
            'inside of your home.',
        options: [
            {
                text: 'Drive to the dock?',
                nextText: 4
            },
            {
                text: 'Go inside your house?',
                nextText: 2
            },
        ]
    },
    {
        id: 4,
        text: 'Looking down at your watch, it read 11:55 pm. Great! A short walk down the street and you’ll arrive at ' +
            'the docks. Punctuality is key. Hopefully this mysterious person will explain their strange, red envelope ' +
            'invitation. You arrive at the docks. Checking your watch again, it reads11:59 pm. No one is on the dock ' +
            'but you. Where is this mystery person? Do you think he forgot? Or is this a childish prank? A car motor ' +
            'rumbles in the distance. Your eyes squint at a pair of bright yellow headlights heading towards you. The ' +
            'motor of the car grows louder and louder. Make a choice. Do you wait for the driver of the car to reveal ' +
            'themselves or do you run away as fast as you can?',
        options: [
            {
                text: 'Run!?',
                nextText: 6
            },
            {
                text: 'Wait?',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'You wait. The car gets dangerously close to you. The past five seconds feel like an hour. The closer the ' +
            'car gets, the more you regret not running away. This is madness! How could someone be so foolish to meet ' +
            'with an unknown person who invites you with the most ominous looking letter?  You can see the car has a ' +
            'red hood with a distinct white stripe. Closer and closer, the car in barely a foot in front of you. You ' +
            'brace yourself for the car’s impact anticipating the shock of pain you would feel as the car meets your ' +
            'body. The car stops. You open one eye, then the other, to see a well-dressed man exiting the car. In his ' +
            'hand is a gun. “Where is the money?” shouts the dapper mysterious mobster. Make a choice. Do you run away ' +
            'to safety or do you do try to reason with him?',
        options: [
            {
                text: 'Run away!',
                nextText: 6
            },
            {
                text: 'Try to reason!',
                nextText: 7
            }
        ]
    },
    {
        id: 6,
        text: 'You take off! Running like the Olympians competing in the 100-yard dash. The car motor roars to life. ' +
            'The car’s headlights light your way. You take a left turn onto a dark alleyway that leads to a small boat ' +
            'house. The car speeds past you. For now, you’re safe. Hightailing it down several streets, you find the ' +
            'nearest police station. Inside, you quickly tell your story. Everything from the red envelope to your ' +
            'arrival at the police station. You’re placed into an interrogation room. Hopefully for your safe-keeping. ' +
            'Thirty minutes past and police sergeant who you told your story to, returns. A sly look appears across his ' +
            'face. He faintly looks amused. As the sergeant opens his mouth, your hands grow cold.  You learn that you ' +
            'were set up. The red envelope was the bait. The next 20 years of your life will be spent in prison as the ' +
            'city’s largest drug dealer was finally caught. Thinking back to the red envelope, you wonder. Did you make ' +
            'the right choice?',
        options: [
            {
                text: 'Replay?',
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'As you begin to speak, you feel a throbbing pain at your left temple. You fall to your knees in ' +
            'body-racking pain. You try to compose yourself but it seems as if the earth is moving below your feet. ' +
            'Someone or something touches your arm. In a panic, you open your eyes, praying the mobster is offering ' +
            'mercy and a helpful hand to you. Standing over you, is your neighbor, Bill. “Looks like you took a little ' +
            'tumble there Alex. You gotta get these loose rocks out of your driveway! I called an ambulance and came ' +
            'right over to check on you. Help will be here soon.” A dream. There was no red envelope. No meeting at ' +
            'the docks. No gun-toting mobster looking for money. A dream. Rising up on your elbows, you hear sirens in ' +
            'the distance. You look to your mailbox. Something’s inside. A red envelope. Make a choice.',
        options: [
            {
                text: 'Replay?',
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'After a long hard day at your boring office job, you arrive at home. Before you walk into your house, you see a letter in your mailbox; an unusual occurrence as bill day is Thursday not Monday. As you draw closer towards the mailbox, you see the envelope inside is red. Red envelopes are quite suspicious and ominous. Rarely does one see red envelopes in their daily mail. Make a choice. Do you open the red envelope or do you ignore it and go inside of your home?',
        options: [
            {
                text: 'OPEN THE ENVELOPE!',
                nextText: 3
            }
        ]
    }
]

startGame()