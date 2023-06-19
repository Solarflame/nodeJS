const postDiv = document.querySelector("#post");

async function drawPosts() {
  postDiv.innerHTML = "";
  let response = await fetch("http://localhost:3000/json/parse");
  let data = await response.json();
  for (let post of data) {
    if (post.userId == localStorage.getItem("userId")) {
      postDiv.innerHTML += `
      <div>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <input type="text" id="${post.id}"></input>
        <button onclick="deletePost(${post.id})">Del</button>
      </div>
      `
    }
  }
}
drawPosts()

function deletePost(id) {
  fetch(`http://localhost:3000/json/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  setTimeout(drawPosts, 500);
}

document.querySelector("#button").addEventListener("click", async () => {
  let form = document.querySelector("form");
  console.log(form);
  let userId = localStorage.getItem("userId");
  const body = Object.fromEntries(new FormData(form).entries());
  let response = await fetch("http://localhost:3000/json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ userId, ...body }),
  });
  let data = await response.json();
  console.log(data);
  setTimeout(drawPosts, 500);
});
