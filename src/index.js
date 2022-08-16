let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
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

// You will be writing the code to wire up the "Create Toy" button.
// needs h2, img src, p, and button.like-btn
let data = fetch('http://localhost:3000/toys')
  .then((response) => response.json())
  .then((data) => createCard(data));

  const toys = [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 5
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 8
    },
    {
      "id": 3,
      "name": "Mr. Potato Head",
      "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
      "likes": 3
    },
    {
      "id": 4,
      "name": "Slinky Dog",
      "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
      "likes": 4
    },
    {
      "id": 5,
      "name": "Rex",
      "image": "https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg/revision/latest?cb=20190313050619",
      "likes": 1
    },
    {
      "id": 6,
      "name": "Bo Peep",
      "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
      "likes": 2
    },
    {
      "id": 7,
      "name": "Hamm",
      "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
      "likes": 0
    },
    {
      "id": 8,
      "name": "Little Green Men",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
      "likes": 1
    }
  ];
// console.log(toys);
  toys.forEach(createCard);
  
  // let toy = 0;
  // function myFunction(toy, [], toys) {
  //   toys[0] = 
  // }


function createCard (data) {
  // toys[0] =
  console.log(createCard) 
  const createDiv = document.createElement('div');
    createDiv.className = 'card';
  const createH2 = document.createElement('h2');
    createDiv.appendChild(createH2);
  const toyCollection = document.getElementById('toy-collection');
    toyCollection.appendChild(createDiv);
}