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