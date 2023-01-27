console.log("Keep up the good work!");

const list = document.querySelector("ul"); 
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const userInput = input.value;
    input.value = '';

    console.log(userInput);

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = userInput;
    listItem.appendChild(listButton);
    listButton.textContent = "Done";

    list.appendChild(listItem);

    listButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });
});
