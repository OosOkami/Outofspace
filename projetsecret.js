let LogoAccueil = document.getElementById("LogoAccueil");

let projetsecret = document.getElementById("projetsecret");

LogoAccueil.addEventListener("click", () => {
    if(getComputedStyle(projetsecret).display != "none"){
        projetsecret.style.display = "none";
    } else {
        projetsecret.style.display = "block";
    }
  })