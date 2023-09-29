import { baseUrl } from "./variables.js";

async function events(nome) {
  const response = await fetch(`${baseUrl}/${nome}/events?per_page=5`);
  return await response.json();
}
export { events };
