const Journal = document.querySelector(".Journal");

console.log(Journal);

Journal.addEventListener("click", (e) => {
    Journal.classList.add("Evenement");
});


const evenementDate = document.querySelector(".evenementDate");

window.onload = function() {
    setInterval("dateEtHeure()",400)
}

function dateEtHeure() {
    const info = new Date();

    console.log();

    evenementDate.innerHTML = info.getDate() + "/" + (info.getMonth()+1) + "/" + (info.getFullYear()+930) + " " + info.getHours()+ ":" + info.getMinutes() + " Bienvenue chez les out of space";
}


function dateInfDix() {
    let styleDate;
    if (info.getDate() < 10) {
        styleDate = "0" + info.getDate();    
    }
}

dateInfDix(); //ajouter argument