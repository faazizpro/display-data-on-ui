function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function loadEmail() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data, true))
}

function displayUsers(users, uemail){
    const ol = document.getElementById('users-names');
    if(uemail === undefined){
    const newh2 = document.createElement('h2');
    newh2.innerHTML =  `
    <h2>Lists of User Names</h2>
    `
    ol.appendChild(newh2);
    for(const user of users){
    //    console.log(user.username);
       const li = document.createElement('li');
       li.innerText = user.username;
       ol.appendChild(li);
    }

    }
    if(uemail === true){
        const olEmail = document.getElementById('users-email');
    const emailh2 = document.createElement('h2');
    emailh2.innerHTML =  `
    <h2>Lists of User Email</h2>
    `
    ol.appendChild(emailh2);
    for(const user of users){
    
           const email = document.createElement('li');
           email.innerText = user.email;
           olEmail.appendChild(email)
        }
        
    }
    
}

/*
const olEmail = document.getElementById('users-email');
    const emailh2 = document.createElement('h2');
    emailh2.innerHTML =  `
    <h2>Lists of User NamesEmkail</h2>
    `
    ol.appendChild(emailh2);
    for(const user of users){
    
           const email = document.createElement('li');
           email.innerText = user.email;
           olEmail.appendChild(email)
        }


*/


/*
    const phone = document.getElementById('users-phone');
    const phoneh2 = document.createElement('h2')
    phoneh2.innerHTML = `
    <h2>List of Users Phone</h2>
    `
    phone.appendChild(phoneh2);
    for(const userPhone of users){
        const phoneList = document.createElement('li');
        phoneList.innerText = userPhone.phone;
        phone.appendChild(phoneList);
    }


    const websites = document.getElementById('users-website');
    const siteH2 = document.createElement('h2');
    siteH2.innerHTML = `
     <h2>List of Users Websites</h2>
    `
    websites.appendChild(siteH2);
    for( const site of users){
        const siteli = document.createElement('li');
        siteli.innerText = site.website;
        websites.appendChild(siteli);
    }

*/