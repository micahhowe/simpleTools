function returnNum(){
    //alert(Math.floor(Math.random() * 10)) 
    var entity = [];
    entity.push(Math.floor(Math.random() * 10))
    document.getElementById("write").innerHTML = entity;
}
//I want this to keep adding a random number into the html element