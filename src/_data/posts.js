const url = "http://jsonplaceholder.typicode.com/posts";
const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.log(error);

    return [];
  }
};
