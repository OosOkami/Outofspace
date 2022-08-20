///////////////////  Déploiement de section ///////////////////
const sections = document.querySelectorAll(".giftDim");

let links = {
    "soutien":"./Image-gen/", 
    "minage":"./RafineryCalcJs/", 
    "commerce":"https://sc-trade.tools/home", 
    "combat": "https://www.erkul.games/"
};

let closeIframe = `
<label class = "closeiframe">
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
</label>
`;

sections.forEach((section) => {
    section.addEventListener("click", (e) => {
        console.log("slt");
        
        section.classList.remove("giftDim");
        section.classList.add("popup");

        const newiframe = document.createElement("iframe");
        newiframe.classList.add("sitepopup");
        newiframe.setAttribute("src", links[section.id]);
        section.appendChild(newiframe);
        section.innerHTML += closeIframe;

    });
});