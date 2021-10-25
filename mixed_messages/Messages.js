// Generate random num
function generateRandomNumber(num) {
    //Gets # from 0 -> num -1
    return Math.floor(Math.random() * num)
}

//wisdom
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

//store the wisdom
let personalWisdom = []

// Iterate over 'wisdom' in an array
for(let prop in collectiveWisdom) {
    let optionInx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionInx]}".`)
            break
        case 'fortunateOutput':
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionInx]}".`)
            break
        case 'advice':
            personalWisdom.push(`You should "${collectiveWisdom[prop][optionInx]}".`)
            break
        default:
            personalWisdom.push('There is not enough info.')
    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);