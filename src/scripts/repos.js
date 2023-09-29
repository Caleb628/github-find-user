import { baseUrl, numberOfRepos } from "./variables.js";
async function getRepos(name) {
  const repos = await fetch(
    `${baseUrl}/${name}/repos?per_page=${numberOfRepos}`
  );
  return await repos.json();
}
export { getRepos };
