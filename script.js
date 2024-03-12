/// The root:
const root = document.getElementById("root");

///

const welcome = document.createElement("h1");
welcome.innerText = "Welcome to NikOS!";
welcome.id = "welcome-nikos";
welcome.style.display = "none";
root.appendChild(welcome);

const span = document.createElement("span");
span.id = "nikos-version";
span.innerText = "0.1.0a";
const version = document.createElement("p");
version.innerText = "NikOS - version ";
version.id = "nikos-info";
version.appendChild(span);

let onbutton = document.createElement("button");
onbutton.id = "onbutton"
let img = document.createElement("img");
img.src = "assets/onbutton.svg";
img.width = 24;
img.style.color = "black";
onbutton.appendChild(img);
onbutton.onclick = OSStart;

root.appendChild(onbutton);
root.style.backgroundColor = "black";

window.onkeydown = (e) => {
    console.log(e)
    if (e.key == " ") {
        OSStart();
    }
}

function OSStart() {
    root.appendChild(version);
    onbutton.style.display = "none";
    root.style.backgroundColor = "white";

    root.ontransitionend = () => {
        welcome.style.display = "block";
    }
} 
