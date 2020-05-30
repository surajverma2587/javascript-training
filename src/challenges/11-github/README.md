# GitHub

## Challenge

Write a function which fetches data from the GitHub endpoint related to repositories of a given username along with another endpoint to fetch data about the user.

```
https://api.github.com/users/<username>
https://api.github.com/users/<username>/repos?per_page=10
```

When you receive the data from both endpoints analyze the data and transform each the data to match the schema shown below:

```javascript
{
  author: {
    login: "surajverma2587",
    id: 10376859,
    urls: {
      avatar_url: "https://avatars3.githubusercontent.com/u/10376859?v=4",
      url: "https://api.github.com/users/surajverma2587",
      html_url: "https://github.com/surajverma2587",
    },
    social_media: {
      blog: "",
      twitter_username: null,
    },
    name: null,
    company: null,
    email: null,
    public_repos: 14,
    followers: 5,
    following: 0,
    created_at: "2nd March 2020",
    updated_at: "2nd March 2020",
  },
  repositories: [
    {
      id: 157112210,
      name: "javascript-basics",
      description: null,
      meta: {
        private: false,
        created_at: "2nd March 2020",
        updated_at: "2nd March 2020",
        pushed_at: "2nd March 2020",
        language: "JavaScript",
        default_branch: "master",
        size: 14,
        license: MIT,
        forks: 20,
        open_issues: 0,
        watchers: 0,
      },
      urls: {
        forks_url:
          "https://img.shields.io/badge/Fork-20-lightgrey?logo=github&style=social",
        license_url: "https://img.shields.io/badge/license-MIT-green",
        html_url: "https://github.com/surajverma2587/javascript-basics",
        git_url: "git://github.com/surajverma2587/javascript-basics.git",
        ssh_url: "git@github.com:surajverma2587/javascript-basics.git",
        clone_url: "https://github.com/surajverma2587/javascript-basics.git",
      },
      owner: {
        id: 10376859,
        login: "surajverma2587",
      },
    },
  ],
}
```
