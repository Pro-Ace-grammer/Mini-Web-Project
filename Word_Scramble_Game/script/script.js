const scramble = document.querySelector(".word"),
hint = document.querySelector('.hint span'),
refreshBtn = document.querySelector('.refresh-word'),
inputField = document.querySelector('input'),
correct = document.querySelector('.green'),
wrong = document.querySelector('.red'),
timeCount = document.querySelector('.timer b'),
checkBtn = document.querySelector('.check-word');

let currentWord

const _timer = max_time=>{
    time = setInterval(()=>{
        if (max_time>0){
            max_time--;
            timeCount.innerHTML = max_time
        }
    },1000)
}

const initGame = ()=>{
    _timer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArr = randomObj.word.split('')
    wrong.innerHTML = ''
    correct.innerHTML = ''
    for (let i =wordArr.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1))
        let temp = wordArr[i]
        wordArr[i]=wordArr[j]
        wordArr[j]=temp
    }
    scramble.innerHTML = wordArr.join('')
    hint.innerHTML = randomObj.hint
    currentWord = randomObj.word
    currentWord = currentWord.toLocaleLowerCase();
}
initGame()

const checkWord = ()=>{
    wrong.innerHTML = ''
    correct.innerHTML = ''
    let userWord = inputField.value.toLocaleLowerCase();
    inputField.value = ''
    if(userWord==currentWord){
        console.log('correct')
        correct.innerHTML = 'Correct Answer !!'
        setTimeout(()=>{
            initGame()
        },2500)
    }else{
        console.log('wrong',currentWord,userWord);
        wrong.innerHTML = 'Wrong Answer! Try Again'
    }
}
refreshBtn.addEventListener('click',initGame)
checkBtn.addEventListener('click',checkWord)
