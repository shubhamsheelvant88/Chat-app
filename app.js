let btn = document.querySelector("button");

btn.addEventListener("click" , () => {
    let inp = document.querySelector("input");

    let message = inp.value;

    let div = document.createElement("div");

    let chatBox = document.querySelector("#chat");

    div.innerText = message; // div inside the chat div

    chatBox.appendChild(div); // append in the chat div

    inp.value = "";
});