const nome = "LoKAOs";

document.getElementById("name").textContent = nome;

document.getElementById("currentTime").textContent = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date());