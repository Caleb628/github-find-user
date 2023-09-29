import { getUseFromGithub } from "./getUser.js";
import { getRepos } from "./repos.js";
import { user } from "./user.js";
import { screen } from "./scan.js";
import { events } from "./events.js";

async function adicionandoNaTela(nomeDeUsuario) {
  const userResponse = await getUseFromGithub(nomeDeUsuario);
  const reposResponse = await getRepos(nomeDeUsuario);
  const eventsResponse = await events(nomeDeUsuario);

  user.setRepos(reposResponse);
  user.setInfo(userResponse);
  user.setEvents(eventsResponse);
  [];
  screen.screener(user);
}

document.getElementById("btn-search").addEventListener("click", () => {
  let nome = document.getElementById("input-search").value;
  if (nome !== "") {
    adicionandoNaTela(nome);
  } else {
    alert("erro, escreva algo no campo de busca");
  }
});
document.getElementById("input-search").addEventListener("keyup", (e) => {
  let nome = e.target.value;

  const key = e.which || e.keyCode;

  const isKeyPressed = key === 13;
  console.log(isKeyPressed);
  if (isKeyPressed) {
    if (document.getElementById("input-search").value !== "") {
      adicionandoNaTela(nome);
    } else {
      alert("erro, escreva algo no campo de busca");
    }
  }
});
