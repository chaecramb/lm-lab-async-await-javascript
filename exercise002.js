import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (e) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
