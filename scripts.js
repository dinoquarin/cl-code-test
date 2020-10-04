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
        <div class="user-profile--img"><img src="${userPhoto}" /></div>
        <div class="user-profile--bio-container">
            <h1 class="user-profile--name">${userName }</h1>
            <div class="user-profile__bio">
                <div class="bio--title">Bio</div>
                ${userBio}
            </div>
        </div>
        <div class="user-profile--contact">
            <div class="user-profile--phone"><div>Phone</div>${userPhone}</div>
            <div class="user-profile--email"><div>Email</div>${userEmail}</div>   
        </div>
        `;


        //get photos
        const photosList = data.album;

        Object.keys(photosList).forEach(function (item) {
            document.getElementById('photos-card__container').innerHTML += `
            <div class="photos-card">
                <div class="photos-card--img">
                    <div class="photos-card--title">${photosList[item].title}</div>
                    <img src="${photosList[item].img}" />
                </div>
                <div class="photos-card--description">
                <p>${photosList[item].description}</p>
                <div class="photos-card--featured"><i class="featured-heart ${photosList[item].featured}"></i></div>
                    <div class="photos-card--date">${photosList[item].date}</div>
            </div>
            </div>
           
            `;
        });    

         // ${photosList[item].title}<br/>
            // ${photosList[item].description}<br/>
            // ${photosList[item].featured}<br/>
            // ${photosList[item].date}

    // end fetch request    
    });