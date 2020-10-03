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



        const userPhoto = data.profile_picture;
        document.getElementById('user-profile__container').innerHTML += ` 
        <img src="${userPhoto}" />
        `;

    // end fetch request    
    });