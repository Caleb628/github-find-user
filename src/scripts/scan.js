const screen = {
  userProfile: document.querySelector(".profile-data"),
  screener(user) {
    this.userProfile.innerHTML = `<div class="info">
  <img src="${user.avatarUrl}" alt="imagem do usuario não encontrado" />
  <div class="data">
  <h1>${user.name ?? "usuario não tem nome cadastrado"}</h1>
    <p>${user.bio ?? "usuario não tem bio cadastrado"}</p>
    <p>seguidores: ${user.followers}</p>
    <p>seguindo: ${user.following}</p>
  </div> 
  </div>
  `;
    let eventsItems = "";
    user.events.forEach((events) => {
      eventsItems += `<p><span>${events.repo.name} </span> -${events.type}</p>`;
    });
    document.querySelector(
      ".profile-data"
    ).innerHTML += `<div class="events section">
    <h2>ultimos eventos</h2>
    <ul>${eventsItems}</ul>                                      
    </div>`;

    let repoItems = "";
    user.repositories.forEach((repo) => {
      repoItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <div class="abouts">
      <div>🍴 ${repo.forks}</div> 
      <div>⭐ ${repo.stargazers_count}</div>
      <div>👀 ${repo.watchers}</div>
      <div>💻 ${repo.language}</div>
    </div></a> 
      
      
      </li>`;
    });
    document.querySelector(
      ".profile-data"
    ).innerHTML += `<div class="repositories section">
    <h2>Repositorios</h2>
    <ul>${repoItems}</ul>                                      
    </div>`;
  },
};
export { screen };
