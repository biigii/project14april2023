// console.log('h1')
// document.body.style.backgroundColor = '#ff2'

// using the type selector
// document.querySelector('h1').style.color = 'red'
// document.querySelector('h1').style.border = '10px solid #000'

// you can also get the element using its class or  id
// document.querySelector(".heading").style.backgroundColor = "red";
// document.querySelector("#header").style.color = "#fff";

// const box = document.querySelector('.box')

// box.style.width = '200px'
// box.style.height = '200px'
// box.style.backgroundColor = '#ff2'
// box.style.border = '10px solid'

// const h2 = document.createElement('h2')
// h2.innerHTML = 'hello world'
// document.body.appendChild(h2)

// const li = document.createElement('li')
// li.innerHTML = 'apple'
// document.querySelector('#ul').appendChild(li)

// const li2 = document.createElement('li')
// li2.innerHTML = 'orange'
// document.querySelector('#ul').appendChild(li2)

function myFirstFunction() {
  document.body.style.backgroundColor = "#ff2";
}

// myFirstFunction()

document.querySelector("#btn-1").addEventListener("click", myFirstFunction);

function btnFunction() {
  document.querySelector("h1").style.border = "10px solid";
}

document.querySelector("#btn-2").addEventListener("click", btnFunction);

function btn3Function() {
  document.querySelector("h1").style.rotate = "45deg";
}

function submit() {
  const value = document.querySelector("#input-1").value;
  // document.querySelector('h1').innerHTML = value
  const li = document.createElement("li");
  li.innerHTML = value;
  document.querySelector("#list").appendChild(li);
  document.querySelector("#input-1").value = "";
}

function addImage() {
  const figure = document.querySelector("#fig");
  const img = document.createElement("img");
  img.src = "https://picsum.photos/id/1060/500";
  img.width = 400;
  img.height = 400;
  img.style.border = "10px solid pink";
  figure.appendChild(img);
}

function updateHeading() {
  // document.querySelector('h1').classList.add('heading')
  document.querySelector("h1").classList.toggle("heading");
}

function changeTheme() {
  document.body.classList.toggle("theme");
}

const countries = ["new zealand", "australia", "japan", "china","canada"];

countries.forEach(function (name) {
  // console.log(country);
  const p = document.createElement('p')
  p.innerHTML = name
  document.body.appendChild(p)
});
