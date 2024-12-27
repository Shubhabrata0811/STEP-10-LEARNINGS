/*
There are two arrays. The first array consisting of countries, the second array 
consisting of the corresponding capitals. Write a function that can take a 
country and return its respective capital
*/

const countries = [
  "India",
  "United States",
  "France",
  "Japan",
  "Brazil",
  "Australia",
  "Germany",
  "Canada",
  "Italy",
  "South Korea",
];

const capitals = [
  "New Delhi",
  "Washington, D.C.",
  "Paris",
  "Tokyo",
  "Brasília",
  "Canberra",
  "Berlin",
  "Ottawa",
  "Rome",
  "Seoul",
];

const capital = (country) => {capital[countries.indexOf(country)]};