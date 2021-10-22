const links = {
  github: "dayannealcantara",
  facebook: "dayanne.alcantara.3",
  twitter: "DayanneAlcanta2",
  instagram: "dayanneal",
};

function getGitHubInfos () {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImagem.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubInfos()