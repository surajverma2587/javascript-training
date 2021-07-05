const axios = require("axios");
const moment = require("moment");

const getDataFromGitHub = async (username) => {
  const { data: repoData } = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=1`
  );

  const { data: userData } = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return {
    repoData,
    userData,
  };
};

const constructUrls = (data) => {
  return {
    avatar_url: data.userData.avatar_url,
    url: data.userData.url,
    html_url: data.userData.html_url,
  };
};

const constructSocialMedia = (data) => {
  return {
    blog: data.userData.blog,
    twitter_username: data.userData.twitter_username,
  };
};

const formatDate = (date) => {
  return moment(date).format("Do MMMM, YYYY");
};

const constructAuthor = (data) => {
  return {
    login: data.userData.login,
    id: data.userData.id,
    urls: constructUrls(data),
    social_media: constructSocialMedia(data),
    name: data.userData.name,
    company: data.userData.company,
    email: data.userData.email,
    public_repos: data.userData.public_repos,
    followers: data.userData.followers,
    following: data.userData.following,
    created_at: formatDate(data.userData.created_at),
    updated_at: formatDate(data.userData.updated_at),
  };
};

const dataTransformation = (data) => {
  const author = constructAuthor(data);
  console.log(author);
  return {
    author,
  };
};

getDataFromGitHub("surajverma2587").then(dataTransformation);
