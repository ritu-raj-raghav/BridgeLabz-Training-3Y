/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 5: Weather Activity Planner
 * ============================================================================
 * Problem Statement:
 * Advise a user on suitable activities based on temperature, precipitation,
 * and wind speed conditions.
 *
 * Requirements:
 * 1. Create variables for temperature (Celsius), isRaining (boolean), and windSpeed (km/h).
 * 2. If raining -> "Stay indoors with hot coffee."
 * 3. Else if temperature > 35 -> "Go swimming."
 * 4. Else if temperature < 15 and windSpeed > 20 -> "Too cold and windy — stay home."
 * 5. Else -> "Perfect day for a walk."
 * 6. Combine && and || logical operators smartly.
 * ============================================================================
 */

function planWeatherActivity(temperature, isRaining, windSpeed) {
  let recommendation = "";
  let reason = "";

  // 1. First priority check: Precipitation (Rain)
  // Smart combination using truthy check / boolean logic
  if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
    reason = "Precipitation detected (raining)";
  }
  // 2. High heat threshold (> 35°C) without rain
  else if (temperature > 35) {
    recommendation = "Go swimming.";
    reason = `High temperature (${temperature}°C) ideal for water activities`;
  }
  // 3. Combined cold and high wind condition using the logical AND (&&) operator
  else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
    reason = `Chilly (${temperature}°C < 15°C) with gusty winds (${windSpeed} km/h > 20 km/h)`;
  }
  // 4. Default moderate pleasant weather fallback
  else {
    recommendation = "Perfect day for a walk.";
    reason = `Pleasant conditions (${temperature}°C, ${windSpeed} km/h wind, no rain)`;
  }

  return {
    temperature: `${temperature}°C`,
    isRaining,
    windSpeed: `${windSpeed} km/h`,
    recommendation,
    reason,
  };
}

// ---------------------------------------------------------------------------
// Execution & Test Scenarios
// ---------------------------------------------------------------------------
console.log("=== Question 5: Weather Activity Planner ===");

// Primary execution with sample scenario
const currentTemp = 24;
const currentlyRaining = false;
const currentWind = 12;

const primaryPlan = planWeatherActivity(currentTemp, currentlyRaining, currentWind);
console.log("\nCurrent Weather Report:");
console.log(` - Temperature : ${primaryPlan.temperature}`);
console.log(` - Is Raining  : ${primaryPlan.isRaining}`);
console.log(` - Wind Speed  : ${primaryPlan.windSpeed}`);
console.log(` - Advice      : "${primaryPlan.recommendation}"`);

// Test cases covering every branch of the conditional logic
console.log("\n--- Verification Across Different Weather Scenarios ---");
const testScenarios = [
  { temp: 18, rain: true, wind: 10, note: "Rainy Afternoon" },
  { temp: 39, rain: false, wind: 8, note: "Scorching Summer Day" },
  { temp: 8, rain: false, wind: 25, note: "Winter Gale" },
  { temp: 12, rain: false, wind: 14, note: "Cool but Calm (wind <= 20)" },
  { temp: 22, rain: false, wind: 12, note: "Temperate Spring Morning" },
];

const scenarioResults = testScenarios.map((s) => {
  const result = planWeatherActivity(s.temp, s.rain, s.wind);
  return {
    Scenario: s.note,
    Temp: result.temperature,
    Rain: s.rain ? "Yes" : "No",
    Wind: result.windSpeed,
    Recommendation: result.recommendation,
  };
});

console.table(scenarioResults);

