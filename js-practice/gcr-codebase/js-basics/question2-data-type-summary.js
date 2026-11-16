/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 2: Multi-Type Data Summary
 * ============================================================================
 * Problem Statement:
 * Simulate a database summary of various user data entries across different
 * JavaScript data types.
 *
 * Requirements:
 * 1. Declare variables of different data types:
 *    - string, number, boolean, array, object, null, undefined.
 * 2. Use typeof operator and Array.isArray() to identify each type.
 * 3. Print a formatted report (label + value + type) using ONE console.table()
 *    statement.
 * 4. Use descriptive variable names and comments explaining type detection logic.
 * ============================================================================
 */

// 1. Declare variables of 7 fundamental JavaScript data types
const userFullName = "Sophia Sterling";              // string
const userAge = 28;                                  // number
const isAccountActive = true;                        // boolean
const userRoles = ["Admin", "Developer", "Editor"];  // array
const userProfile = {                                // object
  department: "Cloud Engineering",
  city: "San Francisco",
};
const secondaryEmail = null;                         // null (intentional absence of value)
let lastLoginTimestamp;                              // undefined (declared but uninitialized)

// 2. Helper function to accurately detect data type using typeof and Array.isArray()
function detectDataType(value) {
  // In JavaScript, typeof null evaluates to "object" (a well-known language quirk).
  // We check for null explicitly to report its true semantic type.
  if (value === null) {
    return "null";
  }

  // Arrays in JavaScript also return "object" when checked with typeof.
  // We use Array.isArray() to distinguish arrays from generic objects.
  if (Array.isArray(value)) {
    return "array";
  }

  // For string, number, boolean, object, undefined, function, symbol, bigint
  return typeof value;
}

// Helper to format values cleanly for tabular display
function formatDisplayValue(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (Array.isArray(value)) return `[${value.join(", ")}]`;
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

// 3. Construct structured array of entries for console.table()
const userDatabaseSummary = [
  {
    Label: "Full Name",
    Value: formatDisplayValue(userFullName),
    DetectedType: detectDataType(userFullName),
    TypeOfResult: typeof userFullName,
  },
  {
    Label: "Age",
    Value: formatDisplayValue(userAge),
    DetectedType: detectDataType(userAge),
    TypeOfResult: typeof userAge,
  },
  {
    Label: "Account Active",
    Value: formatDisplayValue(isAccountActive),
    DetectedType: detectDataType(isAccountActive),
    TypeOfResult: typeof isAccountActive,
  },
  {
    Label: "Assigned Roles",
    Value: formatDisplayValue(userRoles),
    DetectedType: detectDataType(userRoles),
    TypeOfResult: typeof userRoles,
  },
  {
    Label: "Profile Info",
    Value: formatDisplayValue(userProfile),
    DetectedType: detectDataType(userProfile),
    TypeOfResult: typeof userProfile,
  },
  {
    Label: "Secondary Email",
    Value: formatDisplayValue(secondaryEmail),
    DetectedType: detectDataType(secondaryEmail),
    TypeOfResult: typeof secondaryEmail,
  },
  {
    Label: "Last Login",
    Value: formatDisplayValue(lastLoginTimestamp),
    DetectedType: detectDataType(lastLoginTimestamp),
    TypeOfResult: typeof lastLoginTimestamp,
  },
];

// 4. Print the formatted report using ONE console.table() call
console.log("=== Question 2: Multi-Type Data Summary Report ===");
console.table(userDatabaseSummary);

