const divEle = document.querySelector('.card-container');


function displayCard(id){
const request1 = new XMLHttpRequest();
//Open let us interact with server
//What kind of request--first parameter
//Second parameter is URL.
request1.open('GET',`https://dummyjson.com/users/${id}`);
//Sending it to server
request1.send();
//To display content when it is loaded
request1.addEventListener('load',function(){
    if(request1.status === 404) return;
    console.log(typeof this.responseText);//String
    //To convert to json
    const data  = JSON.parse(this.responseText);
    console.log(data);
    cardDesign(data,'beforeend');

    const req2 = new XMLHttpRequest();
    req2.open('GET',`https://dummyjson.com/users/${id-1}`);
    req2.send();
    req2.addEventListener('load',function(){
        if(req2.status ===404 )  return;
        const data = JSON.parse(this.responseText);
        cardDesign(data,'afterbegin','other');

        const req3 = new XMLHttpRequest();
        req3.open('GET',`https://dummyjson.com/users/${id+1}`);
        req3.send();
        req3.addEventListener('load',function(){
            if(req3.status ===404 )  return;
            const data = JSON.parse(this.responseText);
            cardDesign(data,'beforeend','other')
        })
    });
});


}

displayCard(2);

function cardDesign(data,pos,classname)
{
    const card=`<div class= "user-card ${classname}">
    <img src=${data.image} alt="Profile Image">
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class = "btn">View Profile</button>
    </div>`

    divEle.insertAdjacentHTML(pos,card);
}