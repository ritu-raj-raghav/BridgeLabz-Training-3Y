/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 9: Random Math Quiz Generator
 * ============================================================================
 * Problem Statement:
 * Generate random arithmetic challenges, compute correct answers via switch
 * statement, and evaluate user responses automatically.
 *
 * Requirements:
 * 1. Use Math.random() to generate two numbers (1–20).
 * 2. Select a random operator from ['+', '-', '*', '/'].
 * 3. Calculate the correct answer using a switch statement.
 * 4. Display question and correct answer in the console.
 * 5. Ensure division results are rounded to two decimal places using toFixed(2).
 * ============================================================================
 */

// Available arithmetic operators
const ARITHMETIC_OPERATORS = ["+", "-", "*", "/"];

/**
 * Generates an arithmetic question with random operands and operator,
 * calculating the solution using a switch statement.
 */
function generateQuizQuestion(overrideNum1, overrideNum2, overrideOp) {
  // 1. Generate two random integers between 1 and 20
  const number1 = overrideNum1 ?? Math.floor(Math.random() * 20) + 1;
  const number2 = overrideNum2 ?? Math.floor(Math.random() * 20) + 1;

  // 2. Select a random arithmetic operator
  const operator = overrideOp ?? ARITHMETIC_OPERATORS[Math.floor(Math.random() * ARITHMETIC_OPERATORS.length)];

  // 3. Compute solution using a switch statement
  let rawAnswer = 0;
  let formattedAnswer = "";

  switch (operator) {
    case "+":
      rawAnswer = number1 + number2;
      formattedAnswer = String(rawAnswer);
      break;

    case "-":
      rawAnswer = number1 - number2;
      formattedAnswer = String(rawAnswer);
      break;

    case "*":
      rawAnswer = number1 * number2;
      formattedAnswer = String(rawAnswer);
      break;

    case "/":
      // Requirement: Ensure division is rounded to two decimals with toFixed(2)
      rawAnswer = number1 / number2;
      formattedAnswer = rawAnswer.toFixed(2);
      break;

    default:
      throw new Error(`Unsupported arithmetic operator: ${operator}`);
  }

  const questionString = `What is ${number1} ${operator} ${number2}?`;

  return {
    question: questionString,
    number1,
    operator,
    number2,
    rawAnswer,
    formattedAnswer,
  };
}

// ---------------------------------------------------------------------------
// Execution: Generate & Display Single Live Challenge
// ---------------------------------------------------------------------------
console.log("=== Question 9: Random Math Quiz Generator ===");

const liveQuestion = generateQuizQuestion();
console.log("\n--- Live Generated Quiz Challenge ---");
console.log(`Question       : ${liveQuestion.question}`);
console.log(`Operator       : '${liveQuestion.operator}'`);
console.log(`Correct Answer : ${liveQuestion.formattedAnswer}`);

// ---------------------------------------------------------------------------
// Multi-Round Quiz Simulation (Covering +, -, *, and / explicitly)
// ---------------------------------------------------------------------------
console.log("\n--- Multi-Round Simulation Covering All Operators ---");

const simulatedChallenges = [
  generateQuizQuestion(15, 7, "+"),
  generateQuizQuestion(18, 9, "-"),
  generateQuizQuestion(6, 8, "*"),
  generateQuizQuestion(14, 3, "/"), // Division with repeating decimals
  generateQuizQuestion(10, 4, "/"), // Clean division
];

const quizTableData = simulatedChallenges.map((q, index) => {
  return {
    Round: `Round ${index + 1}`,
    Question: q.question,
    Operator: q.operator,
    RawSolution: q.rawAnswer.toFixed(4),
    "Correct Answer (Formatted)": q.formattedAnswer,
  };
});

console.table(quizTableData);
