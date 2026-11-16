/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 1: Personalized Login Greeting
 * ============================================================================
 * Problem Statement:
 * Create a program that greets users with time-based messages based on the
 * current hour of the day.
 *
 * Requirements:
 * 1. Declare variables for userName and current hour using new Date().getHours().
 * 2. If time is before 12 -> "Good Morning [name]!"
 * 3. If time is between 12 and 17 (inclusive: 12 <= hour <= 17) -> "Good Afternoon [name]!"
 * 4. Otherwise -> "Good Evening [name]!"
 * 5. Use template literals (`${}`) and proper string formatting.
 * 6. Pure core JavaScript, compatible with Node.js and Browser console.
 * ============================================================================
 */

// Function to generate the personalized greeting message
function generateGreeting(userName, hour) {
  let greetingMessage = "";

  // Check if current hour is before 12 (0:00 to 11:59)
  if (hour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
  }
  // Check if current hour is between 12 and 17 (12:00 to 17:59)
  else if (hour >= 12 && hour <= 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
  }
  // Otherwise, hour is 18 or later (18:00 to 23:59)
  else {
    greetingMessage = `Good Evening ${userName}!`;
  }

  return greetingMessage;
}

// ---------------------------------------------------------------------------
// Execution with Current System Time
// ---------------------------------------------------------------------------
const userName = "Ritu Raj";
const currentHour = new Date().getHours(); // Returns integer from 0 to 23

console.log("=== Question 1: Personalized Login Greeting ===");
console.log(`Current System Hour: ${currentHour}:00 (24-hour format)`);
console.log(generateGreeting(userName, currentHour));

// ---------------------------------------------------------------------------
// Comprehensive Test Cases for All Time Slots
// ---------------------------------------------------------------------------
console.log("\n--- Verification Test Cases ---");
const testHours = [
  { hour: 8, slot: "Morning (< 12)" },
  { hour: 12, slot: "Afternoon Boundary (12)" },
  { hour: 15, slot: "Afternoon (12 - 17)" },
  { hour: 17, slot: "Afternoon Boundary (17)" },
  { hour: 18, slot: "Evening Boundary (18)" },
  { hour: 22, slot: "Night / Late Evening (> 17)" },
];

testHours.forEach(({ hour, slot }) => {
  console.log(`[Hour ${hour.toString().padStart(2, "0")}:00 - ${slot}]: ${generateGreeting("Alex", hour)}`);
});

