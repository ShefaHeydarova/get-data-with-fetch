let resources = ["posts", "comments", "album", "photos"];
let resours = document.querySelector("#resours");
let tbl = document.querySelector("#tbl");

onload = function () {
  let ekran = `<option value="" disabled selected>Resurs seçin</option>`;
  for (let item in resources) {
    ekran += `<option value="${item}">${resources[item]}</option>`;
  }
  resours.innerHTML = ekran; 
};
 
function tablePost() {
  let screen="";
  screen = `<thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>`;

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>
      response
        .json()
        .then((post) => {
            post.forEach(element => {
              screen += `
                         <tr>
                           <td scope="row">${element.userId}</td>
                           <td scope="row">${element.id}</td>
                           <td scope="row">${element.title}</td>
                           <td scope="row">${element.body}</td>
                         </tr>
                      `;
            }); 
          tbl.innerHTML = screen;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => {
      console.log(err);
    });

}

function tableComment() {
  let screen = `<thead>
    <tr>
      <th scope="col">PostId</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
    </tr>
  </thead>`;

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>
      response
        .json()
        .then((comment) => {
          console.log(comment);
          comment.forEach((element) => {
            screen += `  <tr>
                           <td scope="row">${element.postId}</td>
                           <td scope="row">${element.id}</td>
                           <td scope="row">${element.name}</td>
                           <td scope="row">${element.email}</td>
                           <td scope="row">${element.body}</td>
                         </tr>`;
          });
          tbl.innerHTML = screen;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => {
      console.log(err);
    });

}
function tableAlbum() {
  let screen = `<thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
    </tr>
  </thead>`;

  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) =>
      response
        .json()
        .then((album) => {
          album.forEach((element) => {
            screen += `  <tr>
                           <td scope="row">${element.userId}</td>
                           <td scope="row">${element.id}</td>
                           <td scope="row">${element.title}</td>
                         </tr>`;
          });
          tbl.innerHTML = screen;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => {
      console.log(err);
    });
}

function tablePhotos() {
  let screen = `<thead>
    <tr>
      <th scope="col">AlbumId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>`;

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) =>
      response
        .json()
        .then((photos) => {
          photos.forEach((element) => {
            screen += `<tr>
                           <td scope="row">${element.albumId}</td>
                           <td scope="row">${element.id}</td>
                           <td scope="row">${element.title}</td>
                           <td scope="row"><img src='${element.url}' width='100'"></td>
                         </tr>`;
          });
          tbl.innerHTML = screen;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => {
      console.log(err);
    });
}

function Choose() {
  let value = resours.value;
  if (value == 0) {
    tbl.innerHTML = tablePost();
  }
  if (value == 1) {
    tbl.innerHTML = tableComment();
  }
  if (value == 2) {
    tbl.innerHTML = tableAlbum();
  }
  if (value == 3) {
    tbl.innerHTML = tablePhotos();
  }
}
