var person = {
  name: "Austin",
  representation: "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg",
  height: "500px",	
  favoriteColor: "red",
  catchphrase: "Blah"
}
drawPerson(person)

function drawPerson(person) {
  $(".name").html(person.name);
  $("#image").attr("src", person.representation);
  $("#image").attr("height", person.height);
  $("#image").css("border-color", person.favoriteColor);
  $(".quote").html(person.catchphrase)
}