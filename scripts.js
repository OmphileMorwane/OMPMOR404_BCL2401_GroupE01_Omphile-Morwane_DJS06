//EXERCISES
// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

//ForEach Basics-log each name
names.forEach((name) => {
  console.log(name);
});

//ForEach Basics-log each Province
provinces.forEach((province) => {
  console.log(province);
});

//ForEach Basics- loging each name with matching province in the format "Name (Province)".
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Creating an Uppercase Transforamtion for Provinces using the map method.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//Function to calculate the length of each name
const nameLength = names.map((name) => name.length);
      console.log(nameLength);

//Alphabetically sorting the Provinces
const alphabeticallySortedProvinces = [...provinces].sort();
 console.log(alphabeticallySortedProvinces);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
