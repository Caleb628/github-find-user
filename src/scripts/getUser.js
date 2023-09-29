import { baseUrl } from "./variables.js";
async function getUseFromGithub(nameOfUser) {
  const perfil = await fetch(`${baseUrl}/${nameOfUser}`);

  return await perfil.json();
}

export { getUseFromGithub };
