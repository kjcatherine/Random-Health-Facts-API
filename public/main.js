document.querySelector("#button").addEventListener("click", apiRequest);

async function apiRequest() {
  const fact = document.querySelector("#input").value;
  try {
    const response = await fetch(
      `https://random-health-facts.herokuapp.com/api/${fact}`
    );
    const data = await response.json();
    console.log(data);
    // const dataArray = [];
    // data.forEach((obj) => {
    //   console.log(obj);
    // });
    document.querySelector("h3").textContent = data.fact;
    document.querySelector("p").textContent = data.description;
  } catch (error) {
    console.log(error);
  }
}
