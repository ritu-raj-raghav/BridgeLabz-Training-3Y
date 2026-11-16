/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 8: Employee Salary Projection
 * ============================================================================
 * Problem Statement:
 * Calculate a 5-year salary projection compounding yearly increments and
 * display the breakdown in a formatted console table.
 *
 * Requirements:
 * 1. Declare current salary and annual increment rate (in %).
 * 2. Use a for loop to compute salary for each of 5 years.
 * 3. Print yearly salary in a formatted console table.
 * 4. Apply rounding (Math.round / toFixed) and assignment operators (+=, *=).
 * ============================================================================
 */

function generateSalaryProjection(initialSalary, annualIncrementRatePercent, totalYears = 5) {
  const projectionRecords = [];
  let currentSalary = initialSalary;

  // Use a for loop to compute salary progression for each year
  for (let year = 1; year <= totalYears; year++) {
    const startingSalary = currentSalary;

    // Calculate annual increment using arithmetic operators
    const incrementAmount = (startingSalary * annualIncrementRatePercent) / 100;

    // Apply addition assignment operator (+=) to advance current salary
    currentSalary += incrementAmount;

    // Apply Math.round() for integer currency representation
    const roundedStartingSalary = Math.round(startingSalary);
    const roundedIncrementAmount = Math.round(incrementAmount);
    const roundedProjectedSalary = Math.round(currentSalary);

    projectionRecords.push({
      "Year": `Year ${year}`,
      "Starting Salary": `$${roundedStartingSalary.toLocaleString()}`,
      "Annual Increment Rate": `${annualIncrementRatePercent}%`,
      "Increment Added": `$${roundedIncrementAmount.toLocaleString()}`,
      "Projected Salary": `$${roundedProjectedSalary.toLocaleString()}`,
    });
  }

  return {
    initialSalary,
    annualIncrementRatePercent,
    totalYears,
    finalProjectedSalary: Math.round(currentSalary),
    totalGrowth: Math.round(currentSalary - initialSalary),
    projectionRecords,
  };
}

// ---------------------------------------------------------------------------
// Execution & Tabular Output
// ---------------------------------------------------------------------------
console.log("=== Question 8: Employee Salary Projection (5-Year Plan) ===");

const startingBaseSalary = 65000;      // Starting salary: $65,000
const annualIncrementPercent = 8.5;    // Annual increment rate: 8.5%
const projectionDuration = 5;          // 5-year calculation horizon

const projectionReport = generateSalaryProjection(
  startingBaseSalary,
  annualIncrementPercent,
  projectionDuration
);

console.log(`\nBase Salary        : $${projectionReport.initialSalary.toLocaleString()}`);
console.log(`Annual Growth Rate : ${projectionReport.annualIncrementRatePercent}%`);
console.log(`Projection Horizon : ${projectionReport.totalYears} Years`);
console.log(`Final Year 5 Salary: $${projectionReport.finalProjectedSalary.toLocaleString()}`);
console.log(`Cumulative Growth  : +$${projectionReport.totalGrowth.toLocaleString()} (+${((projectionReport.totalGrowth / projectionReport.initialSalary) * 100).toFixed(1)}%)\n`);

// Print yearly salary in a formatted console table as required
console.log("Annual Salary Progression Table:");
console.table(projectionReport.projectionRecords);

