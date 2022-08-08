let inputNum = document.querySelector("#input-num");
let btnExecute = document.querySelector("#btn-execute");
let btnClear=document.querySelector("#btn-clear")
let outputDiv = document.querySelector("#output");


btnExecute.addEventListener("click", () => {

    let inputValue = inputNum.value;
    if (inputValue <= 0) {
        outputDiv.innerText = inputValue+" is not a prime number"
    }
    else if (inputValue == 1) {
        outputDiv.innerText = inputValue+" is not a prime number"
    }

    else {
        let isPrime = true;
        for (let i = 2; i < inputValue; i++) {
            if (inputValue % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            outputDiv.innerText = inputValue+" is a prime number"
        }
        else {
            outputDiv.innerText = inputValue +" is not a prime number"
        }

    }
})

btnClear.addEventListener("click",()=>{
    location.reload()
})