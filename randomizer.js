function returnNum(){
    var entity = [];
    entity.push(Math.floor(Math.random() * 10))
    document.getElementById("write").innerHTML = (Math.floor(Math.random() * 10));
}
//I want this to keep adding a random number into the html element