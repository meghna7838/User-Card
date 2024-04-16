const divEle = document.querySelector('.card-container');

const request = new XMLHttpRequest();

//Open let us interact with server
//What kind of request--first parameter
//Second parameter is URL.
request.open('GET',`https://dummyjson.com/users/1`);
//Sending it to server
request.send();
//To display content when it is loaded
request.addEventListener('load',function(){
    console.log(typeof request.responseText);//String
    //To convert to json
    console.log(JSON.parse(this.responseText));
    const data  = JSON.parse(this.responseText);

    const card=`<div class= "user-card">
    <img src="http://robohash.org/hicveldicta.png" alt="Profile Image">
    <h3>John</h3>
    <h3>Doe</h3>
    <p class="email">j,doe@gmail.com</p>
    <button class = "btn">View Profile</button>
    </div>`

    divEle.innerHTML = card;
});