let menu = document.getElementById("menu-toggle");
let qualquerCoisa = document.getElementById("qualquer-coisa");
menu.addEventListener("click", () => {
    console.log(qualquerCoisa.style);
    if (qualquerCoisa.style.right == "0px") {
    qualquerCoisa.style.right = "-300px";
  } else {
    qualquerCoisa.style.right = "0";
  }
});
