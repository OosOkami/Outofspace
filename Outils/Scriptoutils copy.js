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
    newiframe.setAttribute("src","https://uexcorp.space/");
    minage.appendChild(newiframe);
})

const discord = document.querySelector(".discord")

console.log(discord);

discord.addEventListener("click", (e) => {
    discord.classList.add("popup");
    discord.classList.remove("giftDim");
    
    const newiframe =document.createElement("iframe");
    newiframe.classList.add("sitepopup");
    newiframe.setAttribute("src","https://discord.gg/FU8sdF9B");
    minage.appendChild(newiframe);
})