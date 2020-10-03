innitHTTP = {method: 'GET',
             headers:{
                 'Content-Type':'application/json'
             },
             mode:'cors'};

let myRequest = new Request ("landscapes.json", innitHTTP);

fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){


        // display user profile information
        const userPhoto = data.profile_picture;
        const userName = data.name;
        const userEmail = data.email;   
        const userPhone = data.phone;   
        const userBio = data.bio; 


        document.getElementById('user-profile__container').innerHTML += ` 
        <img src="${userPhoto}" />
        <h1>${userName }</h1>
        ${userBio}</br>
        ${userPhone}</br>
        ${userEmail}
        `;


        //get photos
        const photosList = data.album;

        Object.keys(photosList).forEach(function (item) {
            document.getElementById('photos-card__container').innerHTML += `
            <img src="${photosList[item].img}" />
            ${photosList[item].title}<br/>
            ${photosList[item].description}<br/>
            ${photosList[item].featured}<br/>
            ${photosList[item].date}
            `;
        });    


    // end fetch request    
    });