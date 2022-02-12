const Combat = document.querySelector(".Combat");

console.log(Combat);

Combat.addEventListener("click", (e) => {
    Combat.classList.add("popup");
    Combat.classList.remove("giftDim");

    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","https://www.erkul.games/");
    Combat.appendChild(newiframe);

    
});

const commerce = document.querySelector(".Commerce");

console.log(commerce);

commerce.addEventListener("click", (e) => {
    commerce.classList.add("popup");
    commerce.classList.remove("giftDim");

    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","https://sc-trade.tools/home");
    commerce.appendChild(newiframe);

    
});

const minage = document.querySelector(".minage")

console.log(minage);

minage.addEventListener("click", (e) => {
    minage.classList.add("popup");
    minage.classList.remove("giftDim");
    
    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","http://oos.nmgc.ovh/");
    minage.appendChild(newiframe);
});

const Soutiens = document.querySelector(".Soutiens")

console.log(Soutiens);

Soutiens.addEventListener("click", (e) => {
    Soutiens.classList.add("popup");
    Soutiens.classList.remove("giftDim");
    
    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    // newiframe.setAttribute("src","l'iens du site voulus");
    Soutiens.appendChild(newiframe);
});