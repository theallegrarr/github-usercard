/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
function articleMaker({ name, login, url, location, followers, following, bio, avatar_url }) {
  const card = document.createElement('div');
  const textDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const userName = document.createElement('p');
  const userLogin = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  
  card.classList.add('card');

  userName.classList.add('name');
  userLogin.classList.add('username');

  userImage.setAttribute('src', avatar_url );
  userName.innerText = name;
  userLogin.innerText = login;
  userBio.innerText = 'Bio: '+bio;
  userFollowing.innerText = 'Followers: '+ following;
  userFollowers.innerText = 'Following: '+ followers;
  userProfile.innerText = 'Profile: '+ url;
  userLocation.innerText = 'Location: '+ location;

  card.appendChild(userImage);
  textDiv.appendChild(userName);
  textDiv.appendChild(userLogin);
  textDiv.appendChild(userLocation);
  textDiv.appendChild(userFollowers);
  textDiv.appendChild(userFollowing);
  textDiv.appendChild(userBio);
  card.appendChild(textDiv);

  return card;
}


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(userId){
  axios.get(`https://api.github.com/users/${userId}`).then(response => {
    const cardsArea = document.querySelector('.cards'); 
    const userCard = articleMaker(response.data);

    cardsArea.appendChild(userCard);

  }).catch(error => {
    console.log(error);
  })
}

createCard('theallegrarr');

followersArray.forEach(follower => {
  createCard(follower);
});





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
