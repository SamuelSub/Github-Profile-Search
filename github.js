class GitHub {
  constructor() {
    this.client_id = '13a82a0b2d0fadf34483';
    this.client_secret = 'bb481183704745fecceea08c3a7d71bc47535d64';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
  
}

