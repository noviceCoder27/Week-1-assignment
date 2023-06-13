/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  transactions.forEach((transaction) => {
    if (result[transaction.category]) {
      result[transaction.category] += transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  });
  return Object.entries(result).map(([category, totalSpent]) => ({ category, totalSpent }));
}

module.exports = calculateTotalSpentByCategory;

/** 
 Object.entries(result) takes the result object and returns an array of its own enumerable string-keyed property [key, value] pairs. For example, if result is { Food: 30, Clothing: 40 }, then Object.entries(result) returns [["Food", 30], ["Clothing", 40]].

.map(([category, totalSpent]) => ({ category, totalSpent })) takes the array of [key, value] pairs returned by Object.entries(result) and maps it to a new array of objects where each object has a category property and a totalSpent property. The first element of each [key, value] pair is assigned to the category property and the second element is assigned to the totalSpent property. For example, if the input array is [["Food", 30], ["Clothing", 40]], then the output array is [{ category: "Food", totalSpent: 30 }, { category: "Clothing", totalSpent: 40 }].

In the map function’s callback, array destructuring is used to extract the first and second elements of each [key, value] pair and assign them to the category and totalSpent variables, respectively. This allows us to easily access the category and total spent for each pair and use them to create a new object with category and totalSpent properties.
 */
