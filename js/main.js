let menu = document.getElementById("menu-toggle");
let qualquerCoisa = document.getElementById("qualquer-coisa");
let features = document.getElementById("features");
let featuresDropdown = document.getElementById("features-dropdown");
let company = document.getElementById("company");
let companyDropdown = document.getElementById("company-dropdown");
let featuresArrowUp = document.querySelector(".features-arrow-up");
let featuresArrowDown = document.querySelector(".features-arrow-down");
let companyArrowUp = document.querySelector(".company-arrow-up");
let companyArrowDown = document.querySelector(".company-arrow-down");

menu.addEventListener("click",  ()=>{
    if (qualquerCoisa.style.right == "0px") {
    qualquerCoisa.style.right = "-250px";
  } else {
    qualquerCoisa.style.right = "0";
  }
});

features.addEventListener("click", ()=>{
    if (featuresDropdown.style.display == ""){
        featuresDropdown.style.display = "flex";
        featuresArrowUp.style.display = "flex";
        featuresArrowDown.style.display = "none";
    } else {
        featuresDropdown.style.display = "";
        featuresArrowUp.style.display = "";
        featuresArrowDown.style.display = "flex";
    }
}
)
company.addEventListener("click", ()=>{
    if (companyDropdown.style.display == ""){
        companyDropdown.style.display = "flex";
        companyArrowUp.style.display = "flex";
        companyArrowDown.style.display = "none";
    } else {
        companyDropdown.style.display = "";
        companyArrowUp.style.display = "";
        companyArrowDown.style.display = "flex";
    }
}
)