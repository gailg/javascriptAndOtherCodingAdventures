class Github {
  constructor() {
    this.client_id = "60f8eca579b5eb7514f2";
    this.client_secret = "f222b07210d81e281f96792285febc475360677f";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    // const ltotter = 42;
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}

// user="gailg"

// client_id="60f8eca579b5eb7514f2"
// client_secret="f222b07210d81e281f96792285febc475360677f"
// curl 'https://api.github.com/users/gailg?client_id=${client_id}&client_secret=${client_secret}'


// https://api.github.com/users/gailg
// curl "https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}"