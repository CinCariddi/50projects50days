import "./Style/Day28.css";

export default function Day28() {
    const APIURL = "https://api.github.com/users/";

    async function getUser(username) {
        try {
            const res = await fetch(APIURL + username);
            const data = await res.json();
            createUserCard(data);
            getRepos(username);
        } catch (err) {
            console.log("error", err);
            if (err.response.status === 404) {
                createErrorCard("No profile with this username");
            }
        }
    }

    async function getRepos(username) {
        try {
            const res = await fetch(APIURL + username + "/repos?sort=created");
            const data = await res.json();
            addReposToCard(data);
        } catch (err) {
            createErrorCard("Problem fetching repos");
        }
    }

    function createUserCard(user) {
        const main = document.getElementById("main");
        const userID = user.name || user.login;
        const userBio = user.bio ? `<p>${user.bio}</p>` : "";
        const cardHTML = `
            <div class="card28">
                <div>
                    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
                </div>
                <div class="userInfo">
                    <h2>${userID}</h2>
                    ${userBio}
                    <ul>
                        <li>${user.followers} <strong>Followers</strong></li>
                        <li>${user.following} <strong>Following</strong></li>
                        <li>${user.public_repos} <strong>Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
        `;
        main.innerHTML = cardHTML;
    }

    function createErrorCard(msg) {
        const main = document.getElementById("main");
        const cardHTML = `
            <div className="card28">
                <h1>${msg}</h1>
            </div>
        `;
        main.innerHTML = cardHTML;
    }

    function addReposToCard(repos) {
        const reposEl = document.getElementById("repos");
        repos.slice(0, 5).forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");
            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
    }

    function handleSubmit(e) {
        const search = document.getElementById("search");
        e.preventDefault();
        const user = search.value;
        if (user) {
            getUser(user);
            search.value = "";
        }
    }

    return (
        <div className="contenedorDia28">
            <form className="userForm" id="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="Search a Github User"
                />
            </form>
            <main id="main"></main>
        </div>
    );
}
