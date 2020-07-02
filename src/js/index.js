/* eslint-disable */
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("hello Alex");
};

let generateExcuse = () => {
  let who = ["my car", "my dog", "my cel", "the mountains", "a ship"];
  let what = ["ate", "washed", "clean", "delete", "turn off"];
  let where = [
    "in Alaska",
    "my castle",
    "the bedroom",
    "the street",
    "the sea"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + where[whereIndex];
};
