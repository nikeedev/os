
/// The root:
const root = document.getElementById("root");

///

const welcome_nikos = document.createElement("h1");
welcome_nikos.innerText = "Welcome to NikOS!";
welcome_nikos.id = "welcome-nikos";
welcome_nikos.style.display = "none";
root.appendChild(welcome_nikos);

const nikos_version = document.createElement("span");
nikos_version.id = "nikos-version";
nikos_version.innerText = "0.1.0a";
const version = document.createElement("p");
version.innerText = "NikOS - version ";
version.id = "nikos-info";
version.appendChild(nikos_version);

let onbutton = document.createElement("button");
onbutton.id = "onbutton"
let img = document.createElement("img");
img.src = "assets/onbutton.svg";
img.width = 24;
img.style.color = "black";
onbutton.appendChild(img);
onbutton.onclick = () => OSStart(false);

root.appendChild(onbutton);
root.style.backgroundColor = "black";

window.onkeydown = (e) => {
    if (e.key == " ") {
        OSStart(false);
    } else if (e.key == "Enter" && e.shiftKey) {
        OSStart(true)
    }
}
function OSStart(_local) {
    if (_local) {
        root.style.transitionDuration = "0s";
        root.style.transitionDelay = "0s";
        nikos_version.style.transitionDuration = "0s";
        nikos_version.style.transitionDelay = "0s";
        welcome_nikos.style.transitionDuration = "0s";
        welcome_nikos.style.transitionDelay = "0s";
        welcome_nikos.style.display = "block";
    }
    root.appendChild(version);
    onbutton.style.display = "none";
    root.style.backgroundColor = "white";

    root.ontransitionend = () => {
        welcome_nikos.style.display = "block";
    }
} 
