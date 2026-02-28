// ----------------------------------------------------------------------------------
// --- Retrieve elements by type and add event listeners to one of their
//     specific events

const listItems = document.querySelectorAll("li");

// Toggle classname of the corresponding li element
function toggleDone(e) {
    if (!e.target.className)  {
        e.target.className = "done";
    }
    else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

// ----------------------------------------------------------------------------------
// --- Change elements attributes at run time as a response to a click event

const label = document.getElementById("p_css");
label.addEventListener("click", () => { label.style.color = "blue"; });

const image = document.getElementById("img_boxm");
image.addEventListener("click", () => { image.src = "images/moon.jpg"; });

// ----------------------------------------------------------------------------------
// --- Store / Retrive data from/to the local storage

let last_visit = localStorage.getItem("last visit");
let nb_visits = localStorage.getItem("nb visits");

if (!nb_visits) {
    nb_visits = 1;
}
else {
    nb_visits = Number(nb_visits) + 1;
}
document.getElementById("nb_visits").textContent = nb_visits;

if (!last_visit) {
    last_visit = "/";
}
document.getElementById("last_visit").textContent = last_visit;

localStorage.setItem("nb visits",nb_visits);
localStorage.setItem("last visit",new Date().toISOString());

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
