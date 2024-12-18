const clicked = document.getElementById("btn");
let toggle = true;

clicked.addEventListener("click", (event) => {
   // event.preventDefault(); 
    if(toggle){
        toggle = false;
        console.log("active");
    } else {
        toggle = true;
        console.log("inactive")
    }
    console.log("Clicked Successfull");
})



console.log("Hello")