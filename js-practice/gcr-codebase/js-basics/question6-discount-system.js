/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 6: Progressive Discount System
 * ============================================================================
 * Problem Statement:
 * Build a system that applies dynamic tiered discounts based on the total
 * shopping cart amount and calculates the final payable price.
 *
 * Requirements:
 * 1. Input total purchase amount.
 * 2. If total >= 10000 -> 25% discount.
 * 3. Else if total >= 5000 -> 15% discount.
 * 4. Else if total >= 2000 -> 5% discount.
 * 5. Otherwise -> No discount (0%).
 * 6. Calculate and print:
 *    - Original total
 *    - Discount percentage
 *    - Final price after discount
 * 7. Use Math.round() for rounding values.
 * ============================================================================
 */

function calculateProgressiveDiscount(purchaseAmount) {
  let discountPercentage = 0;

  // Evaluate discount tier based on order value
  if (purchaseAmount >= 10000) {
    discountPercentage = 25; // 25% for purchases >= 10000
  } else if (purchaseAmount >= 5000) {
    discountPercentage = 15; // 15% for purchases between 5000 and 9999
  } else if (purchaseAmount >= 2000) {
    discountPercentage = 5;  // 5% for purchases between 2000 and 4999
  } else {
    discountPercentage = 0;  // 0% for purchases below 2000
  }

  // Calculate discount amount and final payable amount
  const rawDiscountAmount = (purchaseAmount * discountPercentage) / 100;
  const rawFinalPrice = purchaseAmount - rawDiscountAmount;

  // Requirement: Use Math.round() for rounding values
  const roundedDiscountAmount = Math.round(rawDiscountAmount);
  const roundedFinalPrice = Math.round(rawFinalPrice);
  const roundedOriginalTotal = Math.round(purchaseAmount);

  return {
    originalTotal: roundedOriginalTotal,
    discountPercentage: `${discountPercentage}%`,
    discountAmount: roundedDiscountAmount,
    finalPrice: roundedFinalPrice,
  };
}

// ---------------------------------------------------------------------------
// Execution & Demonstration
// ---------------------------------------------------------------------------
console.log("=== Question 6: Progressive Discount System ===");

// Single test demonstration
const sampleCartTotal = 8450.75;
const result = calculateProgressiveDiscount(sampleCartTotal);

console.log("\nSample Cart Checkout:");
console.log(` - Original Total         : $${result.originalTotal}`);
console.log(` - Discount Percentage    : ${result.discountPercentage}`);
console.log(` - Discount Savings       : $${result.discountAmount}`);
console.log(` - Final Price (Payable)  : $${result.finalPrice} (Rounded using Math.round)`);

// ---------------------------------------------------------------------------
// Tier Verification Table (Testing All Thresholds & Boundary Conditions)
// ---------------------------------------------------------------------------
console.log("\n--- Verification Across All Discount Tiers ---");
const testPurchaseAmounts = [
  { label: "High Volume Order", amount: 12500 }, // 25%
  { label: "Tier 1 Boundary", amount: 10000 },   // 25%
  { label: "Mid-Tier Order", amount: 7400 },     // 15%
  { label: "Tier 2 Boundary", amount: 5000 },    // 15%
  { label: "Low-Tier Order", amount: 3250 },     // 5%
  { label: "Tier 3 Boundary", amount: 2000 },    // 5%
  { label: "Small Purchase", amount: 1450 },     // 0%
];

const discountSummaryTable = testPurchaseAmounts.map((test) => {
  const res = calculateProgressiveDiscount(test.amount);
  return {
    Description: test.label,
    OriginalTotal: `$${res.originalTotal}`,
    DiscountRate: res.discountPercentage,
    Savings: `$${res.discountAmount}`,
    FinalPrice: `$${res.finalPrice}`,
  };
});

console.table(discountSummaryTable);

