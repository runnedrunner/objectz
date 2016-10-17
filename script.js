var person = {
  name: "Austin",
  representation: "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg",
  height: "500px",	
  favoriteColor: "red",
  catchphrase: "Get pumped!"
}

drawPerson(person)

function drawPerson(person) {
  $(".name").html(person.name);
  $("#image").attr("src", perso  $("#image").attr({
    src: person.representation,
    height: person.height,
  });
  

}