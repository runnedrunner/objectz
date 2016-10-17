var person = {
  name: "Austin",
  representation: "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg",
  height: "500px",	
  favoriteColor: "red",
  catchphrase: "Get pumped!"
}

drawPerson(person)

function drawPerson(person) {
  $(".person-container").append(person.name);
//  $(".person-container").append("<img src='" + person.representaion + "'>");
  $(".person-container").append("<img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'");


}