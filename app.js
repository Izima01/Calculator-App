const memory = document.querySelector(".memory");
const current = document.querySelector(".current");

const signs = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");

const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
const equal = document.querySelector(".equals")


const solve = () => {
    memory.innerHTML += current.innerHTML;
    let memString = memory.innerHTML;
    // current.innerHTML = "0";
    let memArray = memString.split(" ");
    // console.log(memArray);
    
    let operand1 = parseInt(memArray[0]);
    let operand2 = parseInt(memArray[2]);
    let operator = memArray[1];
    if (operator === "+") {
        current.innerHTML = operand1 + operand2 
    }
    if (operator === "-") {
        current.innerHTML = operand1 - operand2 
    }
    if (operator === "×") {
        current.innerHTML = operand1 * operand2 
    }
    if (operator === "÷") {
        current.innerHTML = operand1 / operand2 
    }
}

equal.addEventListener('click', solve);

clear.addEventListener('click', ()=> {
    memory.innerHTML = "0"
    current.innerHTML = "0"
})

const checkMemory = () => {
    (memory.innerHTML === "0") ? memory.innerHTML = current.innerHTML
    : memory.innerHTML += current.innerHTML;
}

const updateMemory = (operator) => {
    if (operator === "multiply") {
        memory.innerHTML += " × "
    } else if (operator === "add") {
        memory.innerHTML += " + "
    } else if (operator === "subtract") {
        memory.innerHTML += " - "
    } else if (operator === "divide") {
        memory.innerHTML += " ÷ "
    };
}

let nOperator = 0
signs.forEach(sign => {
    sign.addEventListener('click', function(e) {
        nOperator ++;
        let operator = e.target.value;
        console.log(nOperator);
        if (nOperator === 1) {
            (memory.innerHTML === "0") ? memory.innerHTML = current.innerHTML
            : memory.innerHTML += current.innerHTML;
            // checkMemory
            updateMemory(operator)
            current.innerHTML = "0";
        }
        else if (nOperator > 1) {
            // alert("press equals sign");
            if (memory.innerHTML = "0") {
                memory.innerHTML = current.innerHTML
            } else {
                memory.innerHTML += current.innerHTML;
            }
            checkMemory
            current.innerHTML = "0";
            let operator = e.target.value;
            updateMemory(operator);
        }
    });
});

numbers.forEach(number => {
    number.addEventListener('click', function(e) {
        let value = e.target.value;
        if (current.innerHTML === "0") {
            current.innerHTML = value;
        } else {
            current.innerHTML += value;
        }
    });
});

del.addEventListener('click', () => {
    // get thetext inside the current div
    let currentText = current.innerHTML;

    if (parseInt(currentText) < 10) {
        current.innerHTML = "0";
    } else {
        // Convert the text to an array
        currentText = currentText.split("");
        // Delete the last element in the array
        delete currentText[currentText.length-1];
        currentText = currentText.join();
        // Replacing the comma with empty space
        currentText = currentText.replace(/,/g , "");
        current.innerHTML = currentText;
    }
})

window.addEventListener('keypress', (e)=> {
    if (e.key < 10 ) {
        key = e.key;
        console.log(key);
        current.innerHTML === "0" ? current.innerHTML = key
        : current.innerHTML += key;
    }
    else if (e.key === "/") {
        checkMemory
        updateMemory("divide")
    }
    else if (e.key === "+") {
        console.log("add");
        checkMemory
        updateMemory("add")
    }
    else if (e.key === "-") {
        console.log("minus");
        checkMemory
        updateMemory("subtract")
    }
    else if (e.key === "×") {
        console.log("times");
        checkMemory
        updateMemory("multiply")
    }
})