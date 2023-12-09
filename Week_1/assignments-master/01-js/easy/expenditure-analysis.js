/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    // Initialize an empty object to store total spending for each category
    const categoryTotals = {};
  
    // Iterate through each transaction in the input array
    transactions.forEach(transaction => {
      // Destructure the transaction object to get category and price
      const { category, price } = transaction;
  
      // Check if the category is already in categoryTotals
      if (category in categoryTotals) {
        // If yes, update the total spending for that category
        categoryTotals[category] += price;
      } else {
        // If no, add the category to categoryTotals with the current price
        categoryTotals[category] = price;
      }
    });
  
    // Initialize an empty array to store the final result
    const result = [];
  
    // Iterate through the categories in categoryTotals
    for (const category in categoryTotals) {
      // Push an object with category and totalSpent to the result array
      result.push({ category: category, totalSpent: categoryTotals[category] });
    }
    
  return result;
}

module.exports = calculateTotalSpentByCategory;
