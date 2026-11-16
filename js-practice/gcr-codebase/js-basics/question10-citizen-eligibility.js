/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 10: Citizen Eligibility Validator
 * ============================================================================
 * Problem Statement:
 * Evaluate whether an individual can vote, drive, and apply for civic services
 * (such as passport issuance) based on age and citizenship status.
 *
 * Requirements:
 * 1. Input: age (number) and isCitizen (boolean).
 * 2. Use nested if-else and logical operators to determine:
 *    - "Eligible for all services." if citizen and age >= 21 (all civic services open)
 *    - "Eligible to vote only." if citizen and age between 18–20
 *    - "Only age criteria met." if not citizen but age >= 18
 *    - "Not eligible yet." otherwise (under 18)
 * 3. Use console.log() for all outcomes.
 * ============================================================================
 */

function validateCitizenEligibility(age, isCitizen) {
  let outcomeMessage = "";
  let evaluationDetail = "";

  // Outer Condition 1: Check Citizenship status
  if (isCitizen) {
    // Nested Condition: Evaluate Age tiers for verified citizens
    if (age >= 18 && age <= 20) {
      // Citizen aged 18 to 20: eligible to vote, but not yet for all advanced services
      outcomeMessage = "Eligible to vote only.";
      evaluationDetail = `Citizen aged ${age} (in the 18–20 tier): Voting franchise granted.`;
    } else if (age > 20) {
      // Citizen aged 21 or older: full eligibility across all civic services
      outcomeMessage = "Eligible for all services.";
      evaluationDetail = `Citizen aged ${age} (>= 18): Full voting, driving & passport eligibility.`;
    } else {
      // Citizen below 18
      outcomeMessage = "Not eligible yet.";
      evaluationDetail = `Citizen aged ${age} (< 18): Under minimum legal threshold.`;
    }
  } else {
    // Outer Condition 2: Non-citizen branch
    // Nested Condition: Check if age threshold is fulfilled
    if (age >= 18) {
      outcomeMessage = "Only age criteria met.";
      evaluationDetail = `Non-citizen aged ${age} (>= 18): Age benchmark passed, but citizenship required for voting/passport.`;
    } else {
      outcomeMessage = "Not eligible yet.";
      evaluationDetail = `Non-citizen aged ${age} (< 18): Neither citizenship nor minimum age criteria met.`;
    }
  }

  // Requirement: Use console.log() for all outcomes
  console.log(`[Input: age = ${age}, isCitizen = ${isCitizen}] -> "${outcomeMessage}"`);
  console.log(`  Detail: ${evaluationDetail}`);

  return {
    age,
    isCitizen,
    outcomeMessage,
    evaluationDetail,
  };
}

// ---------------------------------------------------------------------------
// Execution: Primary Test Run & Console Log
// ---------------------------------------------------------------------------
console.log("=== Question 10: Citizen Eligibility Validator ===");

console.log("\n--- Primary Verification Outputs ---");
validateCitizenEligibility(25, true);  // Eligible for all services.
validateCitizenEligibility(19, true);  // Eligible to vote only.
validateCitizenEligibility(22, false); // Only age criteria met.
validateCitizenEligibility(16, true);  // Not eligible yet.
validateCitizenEligibility(15, false); // Not eligible yet.

// ---------------------------------------------------------------------------
// Systematic Test Matrix Table
// ---------------------------------------------------------------------------
console.log("\n--- Eligibility Outcomes Matrix Table ---");
const testPersons = [
  { label: "Adult Citizen (28y)", age: 28, isCitizen: true },
  { label: "Young Citizen (19y)", age: 19, isCitizen: true },
  { label: "Boundary Citizen (18y)", age: 18, isCitizen: true },
  { label: "Adult Non-Citizen (32y)", age: 32, isCitizen: false },
  { label: "Minor Citizen (16y)", age: 16, isCitizen: true },
  { label: "Minor Non-Citizen (14y)", age: 14, isCitizen: false },
];

const eligibilityTable = testPersons.map((p) => {
  const res = validateCitizenEligibility(p.age, p.isCitizen);
  return {
    Profile: p.label,
    Age: p.age,
    "Citizen?": p.isCitizen ? "Yes" : "No",
    Outcome: res.outcomeMessage,
  };
});

console.table(eligibilityTable);

