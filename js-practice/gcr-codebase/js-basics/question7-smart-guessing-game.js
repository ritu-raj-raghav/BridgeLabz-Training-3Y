/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 7: Smart Guessing Game (Number Range)
 * ============================================================================
 * Problem Statement:
 * Build a number guessing evaluator that validates guesses against a random
 * secret number (1–50) with precision range feedback (within ±3).
 *
 * Requirements:
 * 1. Generate a random secret number between 1–50 using:
 *    Math.floor(Math.random() * 50) + 1.
 * 2. Let userGuess be a variable with a test value.
 * 3. Print:
 *    - "Correct guess!" if equal
 *    - "Very close!" if within ± 3 of secret
 *    - "Too high" or "Too low" otherwise
 * 4. Use nested if conditions and logical operators.
 * ============================================================================
 */

function evaluateGuess(userGuess, secretNumber) {
  let feedback = "";
  let evaluationDetail = "";

  // Outer Condition 1: Check for exact equality
  if (userGuess === secretNumber) {
    feedback = "Correct guess!";
    evaluationDetail = `Exact match! Secret was ${secretNumber}.`;
  } else {
    // Nested Condition 2: Check if guess is within ±3 of secret using logical AND (&&)
    const difference = userGuess - secretNumber;

    if (difference >= -3 && difference <= 3) {
      feedback = "Very close!";
      if (difference > 0) {
        evaluationDetail = `Within +${difference} of secret (${secretNumber}).`;
      } else {
        evaluationDetail = `Within ${difference} of secret (${secretNumber}).`;
      }
    } else {
      // Nested Condition 3: Directional feedback ("Too high" vs "Too low")
      if (userGuess > secretNumber) {
        feedback = "Too high";
        evaluationDetail = `Guess (${userGuess}) exceeds secret (${secretNumber}) by ${difference}.`;
      } else {
        feedback = "Too low";
        evaluationDetail = `Guess (${userGuess}) falls short of secret (${secretNumber}) by ${Math.abs(difference)}.`;
      }
    }
  }

  return {
    secretNumber,
    userGuess,
    feedback,
    evaluationDetail,
  };
}

// ---------------------------------------------------------------------------
// 1. Live Execution with Random Secret Number
// ---------------------------------------------------------------------------
console.log("=== Question 7: Smart Guessing Game (Number Range) ===");

// Generate random secret between 1 and 50
const liveSecretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value variable

const liveResult = evaluateGuess(userGuess, liveSecretNumber);
console.log("\nLive Round:");
console.log(` - Secret Number (Generated) : ${liveResult.secretNumber}`);
console.log(` - User Guess (Input)        : ${liveResult.userGuess}`);
console.log(` - System Response           : "${liveResult.feedback}"`);
console.log(` - Details                   : ${liveResult.evaluationDetail}`);

// ---------------------------------------------------------------------------
// 2. Comprehensive Demonstration Testing All Logic Branches
// ---------------------------------------------------------------------------
console.log("\n--- Verification of All Nested Condition Outcomes ---");
const fixedSecret = 30; // Fixed baseline for systematic branch testing
const testGuesses = [
  { guess: 30, testCase: "Exact Match (Equal)" },
  { guess: 28, testCase: "Within Range (-2 from secret)" },
  { guess: 33, testCase: "Within Range (+3 from secret)" },
  { guess: 45, testCase: "Out of Range (> +3)" },
  { guess: 12, testCase: "Out of Range (< -3)" },
];

const testResults = testGuesses.map((t) => {
  const res = evaluateGuess(t.guess, fixedSecret);
  return {
    Scenario: t.testCase,
    Secret: res.secretNumber,
    Guess: res.userGuess,
    Feedback: res.feedback,
    Details: res.evaluationDetail,
  };
});

console.table(testResults);

