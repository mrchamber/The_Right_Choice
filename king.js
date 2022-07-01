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

const textNodes = [
    {
        id: 1,
        text: 'You are a magician in King Arthur’s court. You are in the fields just outside of Camelot when a black, snarling, cross-eyed, vicious-looking dragon roars overhead.',
        options: [
            {
                text: 'Beckon the dragon to partake in your tea party.',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Pull out your 9mm crossbow and clip his wings.',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'After a long day’s worth of flying the dragon was actually thirsty. He swoops down from the sky, and you two have tea together. Like a sir, the dragon asks you to aid him on his journey to Mount Makalacka.',
        options: [
            {
                text: 'Spit the tea in the dragons face and insult his mother.',
                nextText: 3
            },
            {
                text: 'Take up his plea and ride the dark dragon to Mt. Makalacka.',
                nextText: 6
            },
        ]
    },
    {
        id: 3,
        text: 'The dragon roars in pain and swirls into a nearby field. You venture to where the beast crashlanded. The dragon has many crossbow wounds in his wing and is whimpering for help.',
        options: [
            {
                text: 'Finish off the dragon, skin his corpse, and make yourself a dragon-suit with wings and stuff.',
                nextText: 5
            },
            {
                text: 'Feel sorry for the dragon and give him some of your most potent numbing herds.',
                nextText: 7
            },
        ]
    },
    {
        id: 4,
        text: 'The dragon howls with flaming laughter and melts your luscious afro off. “You are a funny mortal!” The dragon shifts to the shape of a rainbow-painted unicorn and begins to charge a blinding beam of energy from the sole horn on his head, which is aimed at you.',
        options: [
            {
                text: 'Restart',
                nextText: 8
            },
            {
                text: 'Restart',
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: 'As you finish putting on your new dragon suit, you test your flying abilities. Everything seems to be fine as you fly over the land. You spy a strange mountain below you, but also in the distance there is a floating, jeweled island.',
        options: [
            {
                text: 'Fly down and investigate the mountain.',
                nextText: 9
            },
            {
                text: 'Bypass the mountain and head for the floating, jeweled island.',
                nextText: 11
            }
        ]
    },
    {
        id: 6,
        text: 'The dragon lets you ride him to Mt. Mackalacka. After you dismount from the dragon, the beast suddenly takes off. A shadowy, hooded figure appears and begins to walk slowly towards you. “I… am Darth Merlin!” The man stops walking, and his eyes begin to glow a sinister red. “Time to die!” He fires red lasers from his eyes.',
        options: [
            {
                text: 'Deflect the lasers with force pulses from your hands.',
                nextText: 12
            },
            {
                text: 'Inhale the laser.',
                nextText: 14
            }
        ]
    },
    {
        id: 7,
        text: 'You give the dragon your most potent healing herbs and some of your leftover Skittles. You begin to pull out the arrows when suddenly the dragon flashes with dazzling color. He transforms into a beautiful damsel! “Please! Allow me to give you a hug!” the beautiful damsel says. She has something shiny in her hands. Could it be the Holy Grail?',
        options: [
            {
                text: 'Give the maiden a hug.',
                nextText: 13
            },
            {
                text: 'Decline her offer and risk offending her.',
                nextText: 15
            }
        ]
    },
    {
        id: 8,
        text: 'The both of you fire your spells simultaneously. Waves of dazzling, rainbow-colored sparks erupt from the spells impact and send you flying back. Since the unicorn wasn’t as awesome as you, it was incinerated by the explosion. Yards away, where the spells collided, now lay a golden, glimmering goblet. You have found the Holy Grail! You win!',
        options: [
            {
                text: 'Here is your cookie! Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'You swoop down low over the mountain. The peak is littered with dead corpses. You notice a path leading into what appears to be a cave. There’s a mysterious glow emitting from the cavemouth. Could it be the Holy Grail?',
        options: [
            {
                text: 'Enter the cave.',
                nextText: 17
            },
            {
                text: 'Continue exploring the mountain top.',
                nextText: 19
            }
        ]
    },
    {
        id: 10,
        text: 'The king of the Netherworld erupts from the ground and begins to wrestle the unicorn. After a dazzling battle with rainbow blasts and soul tornadoes, the demon king rips the magical horn from the unicorn’s head and drains his soul. Armed with the mystical wand of the unicorn, the mighty king of the Netherworld easily annihilates you and heads out on his quest to enslave the entire human population. You have failed miserably.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You bypass the mountain peak and continue flying toward the floating, jeweled island. Suddenly, you hear a loud roar. Another dragon is swooping down at you. It appears to be an enormous male dragon. He flies incredibly close and sniffs you. He smells the McChicken that you hid in your robes for lunch. With one huge snap, he ends your life. You are dead.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: 'Milliseconds before the blast reaches your face, you deflect it with your force palms. You charge Darth Merlin and do a spinning backflip-kick to his face. Merlin flies back and hits his head on a large slab of stone. Minutes later, the man stands and claims that he has absolutely no idea who he is. He asks, “Who am I?” You reply…',
        options: [
            {
                text: 'Darth Merlin, the Destroyer of Worlds!',
                nextText: 16
            },
            {
                text: 'Princess Izelia of the Sugarplum Fairies!',
                nextText: 18
            }
        ]
    },
    {
        id: 13,
        text: 'You happily give the maiden a hug. But you suddenly feel a strange pain in your back. The world begins to spin, and you stumble backward. The maiden is holding a bloody knife. Then, with a sweet smile, she ends your life. You are dead.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },{
        id: 14,
        text: 'You can’t just inhale Merlin’s lasers! Are you crazy? The red beams fly through your head. You are now dead, fool!',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 15,
        text: 'Furious at your refusal, the damsel rips her own face off to reveal a purple, insect-like face. “The Ant Queen!” you cry, instantly recognizing his evil sorceress. You turn to run, and you hear the clicking of the Ant Queen as she follows behind.',
        options: [
            {
                text: 'Shoot the Ant Queen with a lightning bolt.',
                nextText: 22
            },
            {
                text: 'Stop running and just stand there.',
                nextText: 21
            }
        ]
    },
    {
        id: 16,
        text: '“But the world seems so beautiful!” the wizard cries in anguish. He sprints to the nearest cliff and leaps off. I don’t want to describe the sickening crunch you heard as his body hit the ground, so I’ll just say that you never see him again. You slew the most powerful wizard of all time! You’ve won!',
        options: [
            {
                text: 'The End!!! Go back to the beginning?',
                nextText: -1
            }
        ]
    },
    {
        id: 17,
        text: 's you enter the cave, you start to sweat and find it hard to breathe. But you are determined to find the source of the glow, so you venture deeper into the cave. The cave leads to a long, thin stone bridge. What now?',
        options: [
            {
                text: 'Leave the cave and investigate the mountain top.',
                nextText: 19
            },
            {
                text: 'Continue over the bridge.',
                nextText: 20
            }
        ]
    },
    {
        id: 18,
        text: 'The man begins to dance. He gracefully bounds up close to you and agrees, “So I am.” As you turn to walk away, you hear a loud KA-BLAM. The wizard hurls a fireball at you and strikes you directly in the back of the head. You, my foolish friend, are now dead.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 19,
        text: 'You start to leave the cave behind, but a few feet away from the mouth, tentacles fly out the darkness and wrap themselves around your throat and legs. They pull you back into the shadows of the cave, and you never see the light of day again—or anything else for that matter. You are dead.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 20,
        text: 'You decide to cross the really dangerous – looking stone bridge. You are about halfway across when the glow becomes blindingly bright. An ginormous flaming demon (a.k.a. “The Balrog”) appears. You scream, “You shall not pass!” but he bats you off the bridge and you fall dramatically to your death. Your whole life passed before your eyes, twice, before you die. You are dead.',
        options: [
            {
                text: 'Go back to the beginning!',
                nextText: -1
            }
        ]
    },
    {
        id: 21,
        text: 'Don’t just stand there! Do something!',
        options: [
            {
                text: 'Do something!',
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        text: 'Lightning explodes from your fingertips, and the Ant Queen explodes into a bazillion pieces. Amid the confetti of bloodshed and insect parts, there is a slightly sticky shiny goblet. That’s where it’s been this entire time! Congratulations! You have found the Holy Grail! You Win!',
        options: [
            {
                text: 'YOU WON!!!!',
                nextText: -1
            }
        ]
    }
]

startGame()