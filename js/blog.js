// All the posts 
let posts =  JSON.parse(localStorage.getItem("post-list")) || [];

/**
 * addPost is a function that will allow the user to add a new post
 */
function addPost() {
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
    
    localStorage.setItem("post-list", JSON.stringify(posts));
    listPosts();
    console.log(post);
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
  });

  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

/**
 * updatePost is a function that allows the user to update their post
 * @param {int} intIndex 
 */
function updatePost(intIndex) {
  const post = posts[intIndex];
  const postTemplate = document.querySelector('#post-template');
  const postClone = postTemplate.content.cloneNode(true);
  const dialog = postClone.querySelector('#dialog');

  const postHeader = postClone.querySelector('#post-header');
  postHeader.innerText = 'Update post';
  const postTitle = postClone.querySelector('#post-title');
  postTitle.value = post.title;
  const postSummary = postClone.querySelector('#post-summary');
  postSummary.value = post.summary;
  const cancelBtn = postClone.querySelector('#cancel-btn');
  const okBtn = postClone.querySelector('#ok-btn');

  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    post.title = postTitle.value;
    post.summary = postSummary.value;
    localStorage.setItem("post-list", JSON.stringify(posts));
    listPosts();
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
  });
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

/**
 * deletePost is a function that will delete a post
 * @param {int} intIndex 
 */
function deletePost(intIndex) {
  posts.splice(intIndex, 1);
  localStorage.setItem("post-list", JSON.stringify(posts));
  listPosts();
}

/**
 * listPosts is a function that will list and display all the posts
 */
function listPosts() {
  let list = '';
  console.log(`from list posts: ${posts}`)
  for (let i = 0; i < posts.length; i++) {
    list += `
      <li>
        <h2>${posts[i].title}</h2>
        <p>${posts[i].summary}</p>
        <p>${posts[i].date}</p>
        <button class="update-btn"><i class="fas fa-pencil-alt"></i> Update</button>
        <button class="delete-btn"><i class="fas fa-trash"></i> Delete</button>
      </li>
    `;
  }
  document.querySelector('#list-posts').innerHTML = list;

  const updateBtns = document.querySelectorAll('.update-btn');
  updateBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      updatePost(i);
    });
  });

  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      deletePost(i);
    });
  });
}

export { addPost, deletePost, listPosts, posts };