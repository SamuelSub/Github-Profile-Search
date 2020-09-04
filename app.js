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
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
})