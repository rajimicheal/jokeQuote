const joke = document.getElementById("joke"),
    punch = document.getElementById("punch")
    btn = document.getElementById("jokeGenerator"),
    info_url = "https://official-joke-api.appspot.com/random_joke";

async function getJoke(info_url) {
    const response = await fetch(info_url);
    const data = await response.json();
    console.log(data);
    punch.innerHTML = data.punchline;
    joke.innerHTML = data.setup;
}
btn.addEventListener("click" , ()=>{
    getJoke(info_url);
})
getJoke(info_url);