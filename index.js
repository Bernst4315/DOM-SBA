const clicked = document.getElementById("btn");
const main = document.querySelector("#main")
let toggle = true;
let makeDiv = document.createElement("div");

clicked.addEventListener("click", (event) => {
   // event.preventDefault(); 
    if(toggle){
        toggle = false;
        makeDiv.textContent = "Hello";
        makeDiv.style.color = "red";
        main.appendChild(makeDiv);
        console.log("active");

    } else {
        toggle = true;
        main.removeChild(makeDiv);
        console.log("inactive")
    }

    console.log("Clicked Successfull");
})



console.log("Hello")