// gets create post page
async function createPostHandler(event) {
  event.preventDefault();
  document.location.replace('/dashboard/create');
}

document.querySelector('.btn-create-post').addEventListener('click', createPostHandler);
