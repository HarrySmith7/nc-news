import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://hsncnews.herokuapp.com/api",
});

export const getTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getArticles = async (topicToGet) => {
  const { data } = await newsApi.get("/articles", {
    params: {
      topic: topicToGet,
    },
  });
  console.log(topicToGet);
  return data.articles;
};

export const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const deleteArticleById = async (article_id) => {
  await newsApi.delete(`/articles/${article_id}`).then(() => {
    return alert("You have deleted the item!");
  });
};

export const getArticlesByTopic = async (filter) => {
  const { data } = await newsApi.get(`/articles?topic=${filter}`);
  return data.articles;
};

export const getUsers = async () => {
  const { data } = await newsApi.get(`/users`);
  return data.users;
};

export const postUser = async (newUser) => {
  const { data } = await newsApi.post(`/users`, newUser);
  return data.users;
};

export const postTopic = async (newTopic) => {
  const { data } = await newsApi.post(`/topics`, newTopic);
  return data.topics;
};
export const postArticle = async (newArticle) => {
  const { data } = await newsApi.post(`/articles`, newArticle);
  return data.articles;
};

export const postComment = async (newComment) => {
  const { data } = await newsApi.post(
    `/articles/${newComment.article_id}/comments`,
    newComment
  );
  return data.comments;
};

export const getCommentsById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const deleteCommentById = async (article_id, comment_id) => {
  await newsApi
    .delete(`/articles/${article_id}/comments/${comment_id}`)
    .then(() => {
      return alert("You have deleted the comment!");
    });
};

export const getAccountByUsername = async (username) => {
  const { data } = await newsApi.get(`/users/${username}`);
  return data.user;
};

export const patchArticleVotes = async (article_id, increment) => {
  const { data } = await newsApi.patch(`/articles/${article_id}`, {
    inc_votes: increment,
  });
  return data.article;
};

export const patchUser = async (account) => {
  const { data } = await newsApi.patch(`/Users/${account.username}`, account);
  return data.user;
};
