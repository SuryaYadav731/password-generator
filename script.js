const resultEl = document.getElementById("result")
const lenghtEl = document.getElementById('length')
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById("number")
const symbolsEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const randomFun ={
    lower : getRandomLowercase,
    upper : getRandomUppercase,

    number : getRandomNumbers,
    symbol : getRandomSymbols
}
    generateEl.addEventListener("click" , ()=>{
    const length = +lenghtEl.value
     const hasLower = lowercaseEl.checked
     const hasUpper = uppercaseEl.checked;
     const hasNumber = numbersEl.checked;
     const hasSymbol = symbolsEl.checked;

     resultEl.innerText = generatePassword( hasLower, hasNumber, hasUpper, hasSymbol, length)


    })
    function generatePassword(lower, upper, number, symbols, length){
        let generatePassword = ""
        let typeCount = lower+upper+number+symbols
        const typesArr = [ {lower}, {upper}, {number},{symbols}].filter((item)=>{
            Object.values(item)[0]
        })
        if(typeCount === 0){
            return '';

        }
        for (let i=0 ; i,length ; i+=typeCount){
            typesArr.forEach((type)=>{
                const keyFromRandomFun = Object.keys(type)[0]
                generatePassword += randomFun[keyFromRandomFun]()
            })
        }
        const finalPassword = generatePassword.slice(0, length)
        return finalPassword
    }

function getRandomLowercase(){
    return String.fromCharCode(Math.random()*26)+97
}

function getRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48 )
}

function getRandomSymbols(){
    const symbols = "! @ # $ % ^ & * () {} < > , . ";
    return symbols[Math.floor()*symbols.length]

}