async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single"); //fetch data
    const data = await response.json(); //convert api data to javascript object form

    const jokeData = document.getElementById("joke-Data");

    jokeData.innerHTML = data.joke;
  } catch (err) {
    console.error("Error occurred", err);
    document.getElementById("joke-Data").innerHTML =
      "Error : cannot fetch joke!";
  }
}
