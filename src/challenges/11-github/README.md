# GitHub

## Challenge

Write a function which fetches data from the GitHub endpoint related to repositories for a given `username` via a prompt along with another endpoint to fetch data about the user and then transform the 2 data objects to a single resultant data object and write that data object in to a .json file.

### Endpoints

```
https://api.github.com/users/<username>/repos?per_page=10
https://api.github.com/users/<username>
```

### Expected Data Schema

```javascript
{
  author: {
    login: "some login name",
    id: 123,
    urls: {
      avatar_url: "some URL",
      url: "some URL",
      html_url: "some URL",
    },
    social_media: {
      blog: "some blog text",
      twitter_username: "twitter username",
    },
    name: "your name",
    company: "your company",
    email: "your email",
    public_repos: 20,
    followers: 100,
    following: 20,
    created_at: "2nd March, 2020",
    updated_at: "2nd March, 2020",
  },
  repositories: [
    {
      id: 789,
      name: "repo name",
      description: "some description",
      meta: {
        private: false,
        created_at: "2nd March, 2020",
        updated_at: "2nd March, 2020",
        pushed_at: "2nd March, 2020",
        language: "JavaScript",
        default_branch: "master",
        size: 14,
        license: MIT,
        forks: 20,
        open_issues: 3,
        watchers: 12,
      },
      urls: {
        forks_url: "some URL",
        license_url: "some URL",
        html_url: "some URL",
        git_url: "some URL",
        ssh_url: "some URL",
        clone_url: "some URL",
      },
      owner: {
        id: 555,
        login: "some login name",
      },
    },
  ],
}
```

### Guide

Use the package `inquirer` to prompt the user for the `username` along with a validation on the `username` to ensure it is not an empty string.

You will also have to initialise the package.json file before you install any dependencies.

Once you have your transformed object write the data to a file called `github.json`.

Ensure that you handle any errors thrown by displaying the error messages.

Use `async/await` and `Promise.all()` where possible
