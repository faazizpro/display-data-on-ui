function loadData(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    console.log(users);
}