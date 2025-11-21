/*document.querySelector("#hotspotBtnHead").addEventListener("click", updateInfoboxHead); 

function updateInfoboxHead() {
console.log("updateInfoboxHead");
//document.querySelector("#efficiency").textContent = "Her er information vedrørende zombiers hoveder";
//document.querySelector("requirement").textContent = "Her er noget mere vedrørende zombiers hoveder"; 

document.querySelector(".info-text .placeholder").textContent = "Her er info";

document.querySelector("efficiency").innerHTML = "<h2>Hoved</h2><p>Info om hoved</p><img src='billede.webp'>";
document.querySelector("requirement").textContent = "<p>Her er noget mere vedrørende zombiers hoveder</p>";
} */












//Kode for dark mode


const goof = document.querySelector("html");
const darkbutton = document.getElementById("darkmodeknap");

// tjek localstorage om darkmode er på
if (localStorage.getItem("darkmode") === "enabled") {
  goof.classList.add("dark");
}

function toogledarkmode() {
  goof.classList.toggle("dark");
  // gem om dark mode er på
  if (goof.classList.contains("dark")) {
    localStorage.setItem("darkmode", "enabled");
  } else {
    localStorage.setItem("darkmode", "disabled");
  }
}

darkbutton.addEventListener("click", toogledarkmode);


