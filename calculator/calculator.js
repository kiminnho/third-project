const currentInput = document.getElementById("current-input");
let input = ""; 

function updateDisplay(value) {
    if (value.length > 12) {
        currentInput.textContent = "ERR"; 
    } else {
        currentInput.textContent = value || "0"; 
    }
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value) {
            input += value; 
            updateDisplay(input);
        }
    });
});


document.querySelector("#clear").addEventListener("click", () => {
    input = ""; 
    updateDisplay("0");
});

document.querySelector("#equals").addEventListener("click", () => {
    try {
        const result = eval(input); 
        input = result.toString().slice(0, 12); 
        updateDisplay(input);
    } catch {
        updateDisplay("ERR"); 
    }
});

