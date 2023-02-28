const addPostForm = document.querySelector("#add-post");
const postsContainer = document.querySelector("#posts");

const API_ENDPOINTS = {
  post: "https://testapi.io/api/audriusb/resource/newPosts",
  get: "https://testapi.io/api/audriusb/resource/newPosts",
  delete: (id) => `https://testapi.io/api/audriusb/resource/newPosts/${id}`,
};
const postTemplate = (data) => {
  const x = JSON.stringify(data);
  return `
          <div id=${data.id} class="post">
              <h3>${data.title}</h3>
              <p>${data.content}</p>
              

              <button class="edit" onClick=handlePostEdit(${data.id})>Edit</button>
              <button class="delete" onClick=deletePost(${data.id})>Delete</button>
          </div>
      `;
};

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
window.onload = async () => {
  const posts = await getData(API_ENDPOINTS.get);
  posts.data.forEach((post) => {
    postsContainer.innerHTML += postTemplate(post);
  });
};
