let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector('#toy-collection');


  fetch('http://localhost:3000/toys')
    .then (res => res.json())
    .then(toys => {
      let toysHTML = toys.map(function(toy) {
        return `
        <div class="card">
        <h2>${toy.name}</h2>
        <img src=${toy.image} class="toy-avatar" />
        <p>${toy.likes} Likes</p>
        <button class="like-btn" id="${toy.id}">Like ❤️</button>
        </div>
        `
      })
      toyCollection.innerHTML += toysHTML.join(' ');
    })

  toyFormContainer.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e.target.name);
    const toyName = e.target.name.value;
    const toyImage = e.target.image.value;
    // console.log(toyName, toyImage);
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(newToy => {
      newToyHTML = `
      <div class="card">
        <h2>${newToy.name}</h2>
        <img src=${newToy.image} class="toy-avatar" />
        <p>${newToy.likes} Likes</p>
        <button class="like-btn" id="${newToy.id}">Like ❤️</button>
        </div>
      `
      toyCollection.innerHTML += newToyHTML;
      e.target.reset;
    });
    
  })

  // Like functionality
  toyCollection.addEventListener('click', (e) => {
    if (e.target.className === 'like-btn') {
      let currentLikes = parseInt(e.target.previousElementSibling.innerText);
      let newLikes = currentLikes + 1;
      e.target.previousElementSibling.innerText = newLikes + ' likes';
      fetch(`http://localhost:3000/toys/${e.target.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          likes: newLikes
        })
      })
    }
  })


  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
