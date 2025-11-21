function updateBoxes(overskrift, efficiency, requirement) {
    document.getElementById("overskriftboks").textContent = overskrift;
    document.getElementById("efficiency").textContent = efficiency;
    document.getElementById("requirement").textContent = requirement;

}

// ------- Moon Button -------
const moonBtn = document.getElementById("moon-button");
const moonTarget = document.getElementById("the-moon");

moonBtn.addEventListener("mouseover", () => {
    moonTarget.classList.add("moon");
});
moonBtn.addEventListener("mouseout", () => {
    moonTarget.classList.remove("moon");
});
moonBtn.addEventListener("click", () => {
    updateBoxes("VENNER I MÅNELYS", "Venner kan komme i mange former!", "I en verden fyldt med ukendte varer, kan det være en fordel at have velkendte farer på sin side. Som enhver snu seer af hit film serien TWILIGHT, ved du at vampyrer og varulve er naturlige fjender. Derfor kan det være en god idé at alliere sig med en af dem for at overleve natten.");
});


// ------- Vampire Button -------
const vampireBtn = document.getElementById("vampire-button");
const vampireTarget = document.getElementById("the-vampires");

vampireBtn.addEventListener("mouseover", () => {
    vampireTarget.classList.add("sweater");
});
vampireBtn.addEventListener("mouseout", () => {
    vampireTarget.classList.remove("sweater");
});
vampireBtn.addEventListener("click", () => {
    updateBoxes("MØRKETS MONSTRE", "Øjnene i mørket, grunden til du ikke vil være alene.", "For dem af os som har oplevet det overnaturlige, eller har indset sandheden, er vampyre ikke bare en historie. De skulker i mørket ligesom i historierne, men de gør også meget mere end det. Vampyrer har inficeret hver eneste del af vores liv, om det så er staten, din arbejdsplads, eller din daglige hjemtur. Hold øjnene åbne, og hvis du ville have mere nyttig info, kig gennem vores 10 tips og tricks for at overleve natten.")
});


// ------- Clothes Button -------
const clothesBtn = document.getElementById("clothes-button");
const sweaterTargets = document.querySelectorAll("#the-sweater");


clothesBtn.addEventListener("mouseover", () => {
    sweaterTargets.forEach(el => el.classList.add("sweater"));
});


clothesBtn.addEventListener("mouseout", () => {
    sweaterTargets.forEach(el => el.classList.remove("sweater"));
});


clothesBtn.addEventListener("click", () => {
    updateBoxes("DE NYESTE TRENDS", "I en verden med umenneskelige monstre, kan mode rede liv!", "Vi plejede at tro at den bedste måde at afskrække overnaturlige væsner, var ved at benytte ritualer, eller mystiske objekter. Nu, ved vi bedre. Ja, hvidløget er vigtigt, korset i lommen er vigtigt, det hellige vand ka altid bruges. MEN! En nymoderne modesans er næsten ligeså vigtigt - og praktisk. Turtlenecks med hellige sølv fibre, store støvler, hvidløgs halskæder, shorts, alle disse kan og har reddet liv. Se vores modetips for mere info.");
});