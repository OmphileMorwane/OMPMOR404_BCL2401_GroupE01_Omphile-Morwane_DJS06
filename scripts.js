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

//Function to filter out Province names with 'Cape" 
const filteredProvinces = provinces.filter(
(province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);// logging the count of the remaining provinces.

//Boolean array using `map` and `some` to determine if a name contains the letter 'S'.
const containsSArray = names.map((name) =>
  name.split("").some((letter) => letter.toLowerCase() === "s")
);
console.log(containsSArray);

//transforming the names array into an object mapping names to their respective provinces.
const nameWithProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameWithProvinceMap);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Encapsulating Product info into a single object
const productsInfo = {

  // Iterates over the products array then logs product names
  productNames: products.map((name) => name.product).join(", "),

  // Filtering out products with names longer than 5 characters
  productsFilteredByNameLength: products
    .filter((name) => name.product.length <= 5)
    .map((name) => name.product),

  // Price
  totalPrice: products
  .filter((product) => product.price && product.price !== " ") // Filtering out products without prices.
  .reduce((acc, product) => {
    acc += parseInt(product.price); // Converting string prices to number and add to accumulator to calculate total price.
    return acc;
  }, 0),

  // Concatenating all product names into a single string using reduce method.
  concatenatedProductNames: products.reduce(
    (acc, product) => acc + product.product,
    ""
  ),

  // Identifying the highest and lowest-priced items & returns a string formated as "Highest: X. Lowest: Y.
  priceExtremes: (() => {
    const validProducts = products.filter(
      (item) => !isNaN(item.price) && item.price !== "" && item.price !== " "
    );
    const prices = validProducts.map((item) => Number(item.price));

    const highestPricedItem = validProducts.find(
      (item) => Number(item.price) === Math.max(...prices)
    );
    const lowestPricedItem = validProducts.find(
      (item) => Number(item.price) === Math.min(...prices)
    );

    return `Highest: ${highestPricedItem.product}. Lowest: ${lowestPricedItem.product}.`;
  })(),
  // Recreating the products object with keys 'name' and 'cost' with their original values.
  transformedProducts: products.reduce((acc, product) => {
    acc.push({
      name: product.product,
      cost: isNaN(parseInt(product.price)) ? 0 : parseInt(product.price),
    });
    return acc;
  }, []), // Wrapping product info in an array


};

console.log(productsInfo); // Single console.log for the product information.