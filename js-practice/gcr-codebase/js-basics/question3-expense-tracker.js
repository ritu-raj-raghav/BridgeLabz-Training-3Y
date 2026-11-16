/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 3: Monthly Expense Tracker
 * ============================================================================
 * Problem Statement:
 * Develop a script that calculates total and average monthly expenses with
 * dynamic updates, applies a 10% tax, and formats values to 2 decimal places.
 *
 * Requirements:
 * 1. Use an array of expenses for 5 categories (food, travel, rent, bills, leisure).
 * 2. Use arithmetic and assignment operators to add 10% tax to the total.
 * 3. Use toFixed(2) to round values.
 * 4. Display total, average, and final amount after tax.
 * ============================================================================
 */

// 1. Array of expense records covering the 5 required categories
const expenseCategories = [
  { category: "Food", amount: 450.75 },
  { category: "Travel", amount: 135.50 },
  { category: "Rent", amount: 1250.00 },
  { category: "Bills", amount: 210.30 },
  { category: "Leisure", amount: 185.20 },
];

// Extract just the raw numerical expense values into an array
const expenseAmounts = expenseCategories.map((item) => item.amount);

// 2. Calculate Total Expenses using arithmetic and assignment operators (+=)
let totalExpense = 0;
for (let i = 0; i < expenseAmounts.length; i++) {
  totalExpense += expenseAmounts[i]; // Addition assignment operator
}

// 3. Calculate Average Monthly Expense across the 5 categories
const categoryCount = expenseAmounts.length;
const averageExpense = totalExpense / categoryCount; // Division arithmetic operator

// 4. Calculate 10% Tax using arithmetic and assignment operators
const TAX_RATE = 0.10; // 10% tax rate
const taxAmount = totalExpense * TAX_RATE; // Multiplication arithmetic operator

let finalAmountWithTax = totalExpense;
finalAmountWithTax += taxAmount; // Addition assignment operator to add tax

// 5. Display the Formatted Report using toFixed(2)
console.log("=== Question 3: Monthly Expense Tracker Report ===");
console.log("Category-wise Breakdown:");
expenseCategories.forEach((item) => {
  console.log(` - ${item.category.padEnd(10)}: $${item.amount.toFixed(2)}`);
});

console.log("-------------------------------------------------");
console.log(`Subtotal (5 categories) : $${totalExpense.toFixed(2)}`);
console.log(`Average per Category    : $${averageExpense.toFixed(2)}`);
console.log(`Sales Tax (10%)         : $${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax  : $${finalAmountWithTax.toFixed(2)}`);
console.log("-------------------------------------------------");

// Also demonstrate with a formatted table
console.table([
  { Metric: "Subtotal", Amount: `$${totalExpense.toFixed(2)}` },
  { Metric: "Average Category Expense", Amount: `$${averageExpense.toFixed(2)}` },
  { Metric: "Applied Tax (10%)", Amount: `$${taxAmount.toFixed(2)}` },
  { Metric: "Final Total (Net)", Amount: `$${finalAmountWithTax.toFixed(2)}` },
]);

