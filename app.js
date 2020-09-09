const git = new GitHub;

const ui = new UI;

const search = document.querySelector('#searchUser');


search.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    // Removes the spaces from the string and joins the string together so that it shows in the search field 
    removedSpacesText = () => userText.split(" ").join("");
    git.getUser(removedSpacesText())
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert();
        } else {
          // Show Profile
          let output = '';
          data.repos.forEach(repo => {
            output +=
            `<div class="card mb-3">
              <h3 class="card-header">${repo.name}</h3>
              <div class="card-body">
                <p class="card-text">${repo.description}</p>
              </div>
              <div class="card-body">
                <a href="${repo.html_url}" target="_blank" class="card-link">Visit Repo</a>
              </div>
            </div>`;
          });
          ui.showProfile(data.profile,output);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
})