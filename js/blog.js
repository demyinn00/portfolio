/* <template id="post-template">
    <dialog id="dialog">
      <h1>New Post!</h1>
      <label for="post-title">Post Title:</label>
      <input id="post-title" type="text">
      <label for="post-summary">Post Summary:</label>
      <input id="post-summary" type="text">
      <button id="cancel-btn">Cancel</button>
      <button id="ok-btn">Ok</button>
    </dialog>
  </template> */

let posts = []; // JSON.parse(localStorage.getItem("post-list")) || [];

function addPost(callback) {
  const postTemplate = document.querySelector('#post-template');
  const postClone = postTemplate.content.cloneNode(true);
  const dialog = postClone.querySelector('#dialog');

  const postTitle = postClone.querySelector('#post-title');
  const postSummary = postClone.querySelector('#post-summary');
  const cancelBtn = postClone.querySelector('#cancel-btn');
  const okBtn = postClone.querySelector('#ok-btn');

  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    const post = {
      title: postTitle.value,
      summary: postSummary.value,
      date: new Date().toLocaleDateString("en-US")
    };
    posts.push(post);
    listPosts();
    console.log(post);
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    // callback(`User clicked cancel`);
  });
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

function deletePost(intIndex) {
  posts.splice(intIndex, 1);
  listPosts();
}

function listPosts() {
  let list = '';
  console.log(`from list posts: ${posts}`)
  for (let i = 0; i < posts.length; i++) {
    list += `
      <li>
        <h2>${posts[i].title}</h2>
        <p>${posts[i].summary}</p>
        <p>${posts[i].date}</p>
        <button class="delete-btn">delete</button>
      </li>
    `;
  }
  document.querySelector('#list-posts').innerHTML = list;
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      deletePost(i);
    });
  });
}

export { addPost, deletePost, listPosts };