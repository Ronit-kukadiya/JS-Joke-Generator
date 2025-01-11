url = "https://official-joke-api.appspot.com/random_joke";
let setup = document.querySelector(".setup");
let punch = document.querySelector(".punch");
let btn = document.querySelector(".random");
setup.innerText = "";
punch.innerText = "";
async function getfact() {
  btn.disabled = true;
  let responce = await fetch(url);
  let joke = await responce.json();
  setup.innerText = joke.setup + "...";
  setTimeout(() => {
    punch.innerText = joke.punchline;
    btn.disabled = false;
  }, 3000);
}
btn.addEventListener("click", () => {
  setup.innerText = "";
  punch.innerText = "";
  getfact();
});
