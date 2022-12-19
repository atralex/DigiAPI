const urlCharacters = "https://digimoncard.io/api-public/search.phpz";
const n = document.getElementById("nombre");
const color = document.getElementById("color");
const type = document.getElementById("type");
const boton = document.getElementById("enviar");
const formu = document.getElementById("formulario");
const template = document.getElementById("oculto").content;
const card = document.getElementById("card");
const cacho = document.createDocumentFragment();
var valida = true;


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
formu.addEventListener("submit", e => {
  e.preventDefault();
  console.log(color.value);
  console.log(type.value);
  if ((color.value == "") && (type.value == "")) {
    var name = n.value;
    console.log(name);
    fetch("https://digimoncard.io/api-public/search.php?n=" + name, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        pintarCard(result);
      })
      .catch(error => console.log('error', error));
  } else if ((color.value == "") && (type.value != "")) {
    var name = n.value;
    console.log(name);
    fetch("https://digimoncard.io/api-public/search.php?n=" + name + "&type=" + type.value, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        pintarCard(result);
      })
      .catch(error => console.log('error', error));
  } else if ((color.value != "") && (type.value == "")) {
    var name = n.value;
    console.log(name);
    fetch("https://digimoncard.io/api-public/search.php?n=" + name + "&color=" + color.value, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        pintarCard(result);
      })
      .catch(error => console.log('error', error));
  } else {
    var name = n.value;
    console.log(name);
    fetch("https://digimoncard.io/api-public/search.php?n=" + name + "&color=" + color.value + "&type=" + type.value, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        pintarCard(result);
      })
      .catch(error => console.log('error', error));
  }

}
)
pintarCard = result => {
  card.innerHTML = " ";
  result.forEach(el => {
    const nombre = el.name;
    const img = el.image_url;
    const tipo = el.type;
    const color = el.color;

    template.querySelector("img").setAttribute("src", img);
    template.querySelector("#nombre").textContent = nombre;
    template.querySelector("#tipo").textContent = tipo;
    template.querySelector("#colors").textContent = color;

    const copia = template.cloneNode(true);
    cacho.appendChild(copia);
  })
  card.appendChild(cacho);

}



