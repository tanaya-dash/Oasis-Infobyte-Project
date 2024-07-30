const inputValue = document.getElementById("userinput");

const operations = document.querySelectorAll(".operations");
operations.forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.slice(-1);
        
        if (e.target.innerText === "=") {
            inputValue.innerText = eval(inputValue.innerText.replace("%", "/100"));
        } else if (e.target.innerText === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerText === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else if (lastValue !== "" && !isNaN(lastValue)) {
            inputValue.innerText += e.target.innerText;
        }
    });
});

const numbers = document.querySelectorAll(".numbers");
numbers.forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText;
    });
});
