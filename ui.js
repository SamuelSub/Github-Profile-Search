class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user,user_repos) {
    this.profile.innerHTML = `
      <div class="main-card card card-body mb-3">
        <div class="row">
          <div class="col-mb-3">
            <img style="height: 150px; width: 150px; display: block;" class="img-fluid" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="button-view btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            <br><br>
            <span class="badge badge-success">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-success">Following: ${user.following}</span>
          </div>  
        </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
      <div id="repos">${user_repos}</div>
    `;
    const err = document.querySelector('.display-error');
    err.innerHTML = '';
  }

  showAlert() {
    this.profile.innerHTML = '';
    const err = document.querySelector('.display-error');
    err.innerHTML = `
    <div class="alert alert-dismissible alert-danger">
    <strong>User Not Found!!</strong>
    </div>`;
  }
  
  clearProfile() {
    profile.innerHTML = '';
  }
}