const Combat = document.querySelector(".Combat");

//création du bouton fermeture iframe

let closeIframe = `
<label class = "closeiframe">
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
</label>
`;


console.log(Combat);

Combat.addEventListener("click", (e) => {
    Combat.classList.add("popup");
    Combat.classList.remove("giftDim");

    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","https://www.erkul.games/");
    Combat.appendChild(newiframe);
    Combat.innerHTML +=closeIframe;
    
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
    commerce.innerHTML +=closeIframe;

    
});

const minage = document.querySelector(".minage")

console.log(minage);

minage.addEventListener("click", (e) => {
    minage.classList.add("popup");
    minage.classList.remove("giftDim");
    
    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","http://outofspace.fr/RafineryCalcJs/");
    minage.appendChild(newiframe);
});

const Soutiens = document.querySelector(".Soutiens")

console.log(Soutiens);

Soutiens.addEventListener("click", (e) => {
    Soutiens.classList.add("popup");
    Soutiens.classList.remove("giftDim");
    
    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","http://outofspace.fr/Image-gen/");
    Soutiens.appendChild(newiframe);
    Soutiens.innerHTML +=closeIframe;
});